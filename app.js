import dotenv from "dotenv"
import express from "express";

import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";

import userRouter  from "./routers/userRouter";
import videoRouter  from "./routers/videoRouter";
import globalRouter  from "./routers/globalRouter";
import routes from "./routers/routes";
import {localMiddleware} from "./middlewares";

import "./passport"

dotenv.config();
const app = express();

const CokieStore = MongoStore(session);

// 미들 웨어
app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({mongooseConnection: mongoose.connection})
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Local 미들웨어
app.use(localMiddleware);

// 라우터
app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

export default app;