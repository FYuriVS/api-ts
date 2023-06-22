import { Router } from "express";
import authRoutes from "./modules/Auth/routes";

const routes = Router();

// ------------------  Auth Routes
routes.use("/auth", authRoutes);

export default routes;
