import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js" // quando importar um arquivo js, nao se esquecer de colocar o ".js"

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser)

export default userRouter;
