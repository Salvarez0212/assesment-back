import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { findUser, createUser } from "./auth.service";

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

export const signUpUserController = async (req: Request, res: Response) => {
  try {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const isValidPassword = passwordRegex.test(req.body.password);

    if (!isValidPassword) {
      return res
        .status(400)
        .json({ message: "The password is not strong enough" });
    }

    const user = {
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 12),
    };

    const userCreated = await createUser(user);
    res
      .status(201)
      .json({ message: "User created successfully", data: userCreated });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
