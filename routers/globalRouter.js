import express from "express";
import routes from "./routes";
import passport from "passport";
import { getJoin,postJoin,getlogin,postlogin,logout,githubLogin,githubCallback,postGithubLogIn,getme, facebookLogin, postFacebookLogin } from "../controllers/userController";
import { home,search } from "../controllers/videoControllers";
import { onlyPrivate,onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home,home)

globalRouter.get(routes.join,onlyPublic,getJoin)
globalRouter.post(routes.join,onlyPublic,postJoin,postlogin)

globalRouter.get(routes.login,onlyPublic,getlogin)
globalRouter.post(routes.login,onlyPublic,postlogin)

globalRouter.get(routes.logout,onlyPrivate,logout)
globalRouter.get(routes.search,search)

globalRouter.get(routes.github,githubLogin)
globalRouter.get(
    routes.githubCallback,
    passport.authenticate("github",{failureRedirect: "/login"}),
    postGithubLogIn
);

globalRouter.get(routes.facebook,facebookLogin);
globalRouter.get(
    routes.facebookCallback,
    passport.authenticate("facebook",{failureRedirect: "/login"}),
    postFacebookLogin
);

globalRouter.get(routes.me,getme);

export default globalRouter;
