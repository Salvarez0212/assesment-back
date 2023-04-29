import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { findUser } from "./auth.service";

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.body.email);

    if (!user) {
      const err = new Error("User Not Found!");
      throw err;
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      const tokenPayload = {
        email: user.email,
      };
      const accessToken = jwt.sign(tokenPayload, process.env.SECRET_JWT);
      res
        .status(201)
        .json({ message: "User Logged in", data: { accessToken } });
    } else {
      const err = new Error("Wrong Email or Password ");
      throw err;
    }
  } catch (error: any) {
    res.status(error.status).json({
      status: "fail",
      message: error.message,
    });
  }
};
