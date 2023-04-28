import { Router } from "express";
import {
  getAllListsController,
  getListByIdController,
  createListController,
  updateListController,
  deleteListController,
} from "./lists.controller";

const router = Router();

router.get("/", getAllListsController);
router.get("/:id", getListByIdController);
router.post("/", createListController);
router.put("/", updateListController);
router.delete("/:id", deleteListController);

export default router;
