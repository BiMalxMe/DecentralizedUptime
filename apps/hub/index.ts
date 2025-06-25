import { randomUUIDv7, type ServerWebSocket } from "bun"
import { type IncomingMessage, type SignupIncomingMessage } from "overlaps/types"
import {prismaClient} from "db/client"
import nacl_util from "tweetnacl-util"
import nacl from "tweetnacl"
import { Public } from "../../packages/db/generated/prisma/runtime/library"
import { PublicKey } from "@solana/web3.js"

const availableValidators : {
    validatorId : string,
    socket : ServerWebSocket<unknown>,
    publickey : string
}[] = []

const CALLBACKS :{
    [callbackId : string ] : (data: IncomingMessage) => void
}= {}


// callbacks = {
//     ["123","456"] : data : {msgOnject1},data : {msgObj2}
// }

//In lamports
const CONSTPERVALIDATION  = 1000 ;

Bun.serve({
  fetch(req,server){
    if(server.upgrade(req)){
        return
    }
    return new Response("Failed to Upgrade")
  }  ,
  port : 8081,
  websocket : {
    async message(ws: ServerWebSocket<unknown>,message: string){
        const data : IncomingMessage= JSON.parse(message);

        if(data.type === "signup"){
            const verified = await verifyMessage(
                `Signed message for ${data.data.callbackId}, ${data.data.publickey}`,
                    data.data.publickey,
                    data.data.signedMessage
            )
            if(verified){
                await SignupHandler(ws,data.data)
            } 
        }else if(data.type === "validate"){
            //@ts-ignore
            CALLBACKS[data.data.callbackId](data);
            delete CALLBACKS[data.data.callbackId]
        }

    },
    async close(ws : ServerWebSocket<unknown>){
        availableValidators.splice(availableValidators.findIndex(x => x.socket === ws),1)
    }
  }
});

async function SignupHandler(ws : ServerWebSocket<unknown>, {
    ip,publickey,signedMessage,callbackId
} : SignupIncomingMessage
){
    const validatorDB = await prismaClient.validator.findFirst({
        where :{
            publickey
        },
    });

    if(validatorDB ){
        ws.send(JSON.stringify({
            type : "signup",
            data : {
                validatorId : validatorDB.id,
                callbackId,
            }
        }));

        availableValidators.push({
            validatorId :validatorDB.id,
            socket :ws,
            publickey :validatorDB.publickey
        });
        return
    }
    
    const validator  = await prismaClient.validator.create(
        {
            data : {
                ip,
                publickey,
                location : "Unknown"
            },
 });
 
 ws.send(JSON.stringify({
    type : "signup",
    data : {
        validatorId :validator.id,
        callbackId
    }
 }));
 availableValidators.push({
    validatorId : validator.id,
    socket : ws,
    publickey : validator.publickey
 })
}

async function verifyMessage(
    message : string,
    publickey : string,
    signature : string,
){
const messagebytes = nacl_util.decodeUTF8(message);
const result  = nacl.sign.detached.verify(
    messagebytes,
    new Uint8Array(JSON.parse(signature)),
    new PublicKey(publickey).toBytes()
);
return result
}

setInterval(async() =>{
    const webistesToMonitor = await prismaClient.website.findMany({
        where : {
            diabled : false
        }});
    for (const website of webistesToMonitor){
        availableValidators.forEach(validator => {
            const callbackId = randomUUIDv7();
            validator.socket.send(JSON.stringify({
                type : "validate",
                data :{
                    url : website.url,
                    callbackId
                }
            }));

            CALLBACKS[callbackId] = async (data :IncomingMessage) => {
                if(data.type === "validate"){
                    const {validatorId , status , latency , signedMessage} = data.data;
                    const verified = await verifyMessage(
                        `Replying to ${callbackId}`,
                        validator.publickey,
                        signedMessage
                    );
                    if (!verified) {
                        return;
                    }

                    await prismaClient.$transaction(async (tx) => {
                        await tx.websiteTick.create({
                            data: {
                                websiteId: website.id,
                                validatorId,
                                status,
                                latency,
                                createdAt: new Date(),
                            },
                        });

                        await tx.validator.update({
                            where: { id: validatorId },
                            data: {
                                pendingPayouts: { increment: CONSTPERVALIDATION },
                            },
                        });
                    });
                }
            };
        });
    }
}, 60 * 1000);