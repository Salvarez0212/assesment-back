import { Router } from "express";
import { loginUserController, signUpUserController } from "./auth.controller";

const router = Router();
router.post("/login", loginUserController);
router.post("/signup", signUpUserController);
export default router;
