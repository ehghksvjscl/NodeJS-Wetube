// 1. routes.js 등록

// 2. routers 폴더에 apiRouter.js 새로 만들기

// 3. app.js에 등록

// 4. apiRouter.js 수정 

// 5. 필요한 함수 가져오기(videoController.js에서)
import express from "express";

import routes from "../routers/routes";
import { postRegisterView } from "../controllers/videoControllers";

const apiRouter = express.Router();

apiRouter.post(routes.registerview,postRegisterView);

export default apiRouter;
