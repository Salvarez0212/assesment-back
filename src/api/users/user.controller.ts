import { Request, Response } from "express";
const bcrypt = require("bcrypt");
import { getUsers, createUser } from "./user.service";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json({ message: "Users found", data: users });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createUserController = async (req: Request, res: Response) => {
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
