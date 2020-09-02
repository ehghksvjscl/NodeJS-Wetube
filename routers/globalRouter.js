import express from "express";
import routes from "./routes";
import { getJoin,postJoin,getlogin,postlogin,logout } from "../controllers/userController";
import { home,search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home,home)

globalRouter.get(routes.join,getJoin)
globalRouter.post(routes.join,postJoin)

globalRouter.get(routes.login,getlogin)
globalRouter.post(routes.login,postlogin)

globalRouter.get(routes.logout,logout)
globalRouter.get(routes.search,search)

export default globalRouter;
