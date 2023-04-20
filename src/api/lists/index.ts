import { Router } from "express";
import { getAllListsController } from "./lists.controller";

const router = Router();

router.get("/", getAllListsController);
router.get("/:id", getAllListsController);

export default router;
