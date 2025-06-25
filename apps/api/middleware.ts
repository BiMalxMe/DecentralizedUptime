import type { NextFunction, Request, Response } from "express";
import { jwtpulbickkey } from "./config";
import jwt, { decode } from "jsonwebtoken"

export function authMidleware(req: Request, res: Response, next:NextFunction ) {
  const token = req.headers["authorization"];
  if(!token){
     res.status(401).json({error : "Unaithorized"})
     return
  }
  try{
}catch(e){
   res.json({msg : "fuk"})
   return
  
}
const decoded = jwt.verify(token,jwtpulbickkey)
if (!decoded) {
   res.json({
    msg :  "You are Unauthorized"
  })
  return
}
  req.userId = decoded.sub as string;
  console.log(req.userId)
  next();
}
