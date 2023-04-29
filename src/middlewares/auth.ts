import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
import { AuthUser } from "../auth/auth.types";

export const isAuthenticated = (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Unathorized" });
  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.SECRET_JWT);
    req.user = user;
    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
