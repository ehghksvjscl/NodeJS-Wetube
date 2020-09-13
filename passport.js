import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import {facebookLoginCallback, githubLoginCallback} from "./controllers/userController";
import dotenv from "dotenv";
import routes from "./routers/routes";

dotenv.config();

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`
},githubLoginCallback)
);

passport.use(new FacebookStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: `http://localhost:4000${routes.facebookCallback}`
},facebookLoginCallback));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());