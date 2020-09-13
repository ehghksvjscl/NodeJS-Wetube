import express from "express";

import routes from "../routers/routes";
import { 
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users,onlyPrivate,users);
userRouter.get(routes.editProfile,onlyPrivate,editProfile);
userRouter.get(routes.changePassword,changePassword);
userRouter.get(routes.userDetail(),userDetail);

export default userRouter;
