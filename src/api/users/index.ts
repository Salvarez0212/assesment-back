import { Router } from "express";
import { getAllUsersController, createUserController } from "./user.controller";

const router = Router();

router.get("/", getAllUsersController);
router.post("/", createUserController);

export default router;
