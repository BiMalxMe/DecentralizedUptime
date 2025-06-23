import express from "express"
import { prismaClient } from "db/client"
import { authMidleware } from "./middleware";
const app = express()

app.post("/api/v1/website",authMidleware,async(req,res)=> {
    const userId = req.userId!;
    prismaClient.user.create({
        data : {
         userId ,
         url

        }
    })
    
    
})
app.get("/api/v1/website/status",authMidleware,(req,res)=> {

})
app.get("/api/v1/websites",authMidleware,(req,res)=> {

})
app.delete("/api/v1/website/",authMidleware,(req,res)=> {

})

app.listen(300);