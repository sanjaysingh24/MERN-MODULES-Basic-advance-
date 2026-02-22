import express from 'express';
import { UserController } from './user.controller.js';
import { userService } from './user.service.js';
import { userRepositry } from './user.repositry.js';
import { tokenProvider } from '../../providers/token.provider.js';
import { hash } from 'bcrypt';
import { hashProvider } from '../../providers/hash.provider.js';

const router = express.Router();

const repo = new userRepositry();
const token = new tokenProvider();
const hashs = new hashProvider();
const service = new userService(repo,hashs,token);
const controller = new UserController(service);

router.post("/register",controller.register);
router.get("/getall",controller.getallUsers);
router.post("/login",controller.loginUser)

export default router;