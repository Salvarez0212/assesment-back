import { Request, Response } from "express";
import { getAllLists } from "./lists.service";

export const getAllListsController = async (req: Request, res: Response) => {
  try {
    const lists = await getAllLists();
    res.status(200).send({ message: "Lists found", data: lists });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
