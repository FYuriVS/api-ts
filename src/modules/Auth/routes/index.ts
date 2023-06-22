import { Router } from "express";
import AuthController from "../AuthController";

const authRoutes = Router();

authRoutes.post("/signup", AuthController.signup);
authRoutes.post("/signin", AuthController.signin);

export default authRoutes;
