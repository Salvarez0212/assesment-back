import { Router } from "express";
import {
  getAllListsController,
  getListByIdController,
  createListController,
  deleteListController,
} from "./lists.controller";

const router = Router();

router.get("/", getAllListsController);
router.get("/:id", getListByIdController);
router.post("/", createListController);
router.delete("/:id", deleteListController);

export default router;
