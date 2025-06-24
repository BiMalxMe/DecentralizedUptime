import type { NextFunction, Request, Response } from "express";

export function authMidleware(req: Request, res: Response, next: NextFunction) {
  const authheader = req.headers["authorization"];
console.log(authheader)
  req.userId = "1";
  next();
}
