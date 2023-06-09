import { Request, Response } from "express";
import {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
} from "./lists.service";

export const getAllListsController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const lists = await getAllLists(userId);
    res.status(200).json({ message: "Lists found", data: lists });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getListByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const list = await getListById(id);

    res.status(200).json({ message: "List found", data: list });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createListController = async (req: Request, res: Response) => {
  try {
    const list = await createList(req.body);
    res.status(201).json({ message: "List created successfully", data: list });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateListController = async (req: Request, res: Response) => {
  try {
    const list = await updateList(req.body);

    if (!list)
      return res.status(404).json({ message: "List of favs not found" });
    res.status(201).json({ message: "The list was updated", data: list });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteListController = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const list = await deleteList(id);
    res.status(200).json({ message: "Fav list deleted", data: list });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
