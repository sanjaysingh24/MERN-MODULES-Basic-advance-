import { Router } from "express";
import { login,  refreshtoken, Signup } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.js";
export const userRouter = Router();


userRouter.post('/register',upload.single('file'),Signup)
.post('/login',login)
.get('/refreshtoken',refreshtoken)