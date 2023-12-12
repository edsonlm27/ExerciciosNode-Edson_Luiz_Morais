import { Router } from "express";
import userController from "./app/controllers/userController.js";

const router = Router();

router.get("/usuario", userController.index);

export default router;
