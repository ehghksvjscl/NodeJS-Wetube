import express from "express";

import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"

import userRouter  from "./routers/userRouter";
import videoRouter  from "./routers/videoRouter";
import globalRouter  from "./routers/globalRouter";
import routes from "./routers/routes";
import {localMiddleware} from "./middlewares"

const app = express();

app.set("view engine","pug")

// 미들 웨어
app.use("/uploads",express.static("uploads"));
app.use("/static",express.static("static"));
app.use(helmet()); 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(morgan("dev"));
app.use(localMiddleware)

// 라우터
app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

export default app;