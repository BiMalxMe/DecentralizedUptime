import type { NextFunction, Request, Response } from "express";
import { jwtpulbickkey } from "./config";
import jwt, { decode } from "jsonwebtoken"

export function authMidleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];
  if(!token){
    return res.status(401).json({error : "Unaithorized"})
  }
  console.log(token)
  try{
}catch(e){
  return res.json({msg : "fuk"})
  
}
const decoded = jwt.verify(token,jwtpulbickkey)
if (!decoded) {
  return res.json({
    msg :  "You are Unauthorized"
  })
}
  req.userId = decoded.sub as string;
  next();
}
