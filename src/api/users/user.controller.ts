import { Request, Response } from "express";
import { getUsers } from "./user.service";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json({ message: "Users found", data: users });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
