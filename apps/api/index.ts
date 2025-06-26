import express from "express";
import { prismaClient } from "db/client";
const app = express();
app.use(express.json());
import cors from "cors";
import { authMidleware } from "./middleware";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
app.use(cors());
const connection = new Connection("https://api.devnet.solana.com");

app.post("/api/v1/website", authMidleware, async (req, res) => {
  const userId = req.userId!;
  const url = req.body.url;
  console.log(url);
  const response = await prismaClient.website.create({
    data: {
      userId,
      url,
    },
  });

  res.json({
    msg: "Sucessfull",
    id: response.id,
  });
});
app.get("/api/v1/website/status", authMidleware, async (req, res) => {
  const websiteid = req.query.websiteid as unknown as string;
  const userId = req.userId;
  const data = await prismaClient.website.findFirst({
    where: {
      id: websiteid,
      userId,
      diabled: false,
    },
    include: {
      ticks: true,
    },
  });
  res.json(data);
});
app.get("/api/v1/website", authMidleware, async (req, res) => {
  const userId = req.userId;
  const websites = await prismaClient.website.findMany({
    where: {
      userId,
      diabled: false,
    },
    include: {
      ticks: true,
    },
  });
  res.json({
    websites,
  });
});

//endpoint to get the validator id cant get from req.userId   


app.delete("/api/v1/website/", authMidleware, async (req, res) => {
  const websiteId = req.body.websiteId;
  const userId = req.userId;

  await prismaClient.website.update({
    where: {
      id: websiteId,
      userId,
    },
    data: {
      diabled: true,
    },
  });

  res.json({
    message: "Deleted Website Sucessfully",
  });
});
app.get("/api/payment/:validatorId", async (req, res) => {
  const validatorId = req.params.validatorId;
  const publickey = req.body.publickey;

  await prismaClient.$transaction(async (tx) => {
    let response = await tx.validator.update({
      data: {
        publickey: publickey,
      },
      where: {
        id: validatorId,
      },
    });

    //Now transaction using the solana blockchain
    const pvtkey = process.env.PRIVATE_KEY;
    if (!pvtkey) {
      res.status(400).json({ msg: "User private key not found" });
      return;
    }
    const keyPair = Keypair.fromSecretKey(Buffer.from(pvtkey, 'base64'));
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(keyPair.publicKey.toString()),
        toPubkey: new PublicKey(validatorId),
        lamports: Number(response.pendingPayouts)
      })
    );

    const { blockhash } = await connection.getLatestBlockhash();
    transaction.feePayer = new PublicKey(keyPair.publicKey.toString());
    transaction.recentBlockhash = blockhash;

    //signing the transactions
    transaction.sign(keyPair);
    const signature = await connection.sendTransaction(transaction, [keyPair]);

    // Update payout amount to zero after successful transaction
    await tx.validator.update({
      where: {
        id: validatorId,
      },
      data: {
        pendingPayouts: 0,
      },
    });
  });

  res.json({
    msg: "done"
  });
});

//how to get the validator id from the database



app.listen(8080, () => {
  console.log("sever Running .....");
});
