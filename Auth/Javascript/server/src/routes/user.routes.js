import { Router } from "express";
import { Signup } from "../controllers/user.controllers.js";

export const userRouter = Router();


userRouter.post('/register',Signup)