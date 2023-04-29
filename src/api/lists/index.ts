import { Router } from "express";
import {
  getAllListsController,
  getListByIdController,
  createListController,
  updateListController,
  deleteListController,
} from "./lists.controller";
import { isAuthenticated } from "../../middlewares/auth";
const router = Router();

router.get("/", isAuthenticated, getAllListsController);
router.get("/:id", isAuthenticated, getListByIdController);
router.post("/", isAuthenticated, createListController);
router.put("/", isAuthenticated, updateListController);
router.delete("/", isAuthenticated, deleteListController);

export default router;
