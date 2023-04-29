import { Router } from "express";
import { loginUserController } from "./auth.controller";

const router = Router();
router.post("/", loginUserController);

export default router;
