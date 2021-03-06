import express from "express";
import routes from "./routes";
import {
    videos,
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo
} from "../controllers/videoControllers";
import { uploadVideo,onlyPrivate } from "../middlewares"

const videoRouter = express.Router();

// Video
videoRouter.get(routes.videos,videos);

// Upload
videoRouter.get(routes.upload,onlyPrivate,getUpload);
videoRouter.post(routes.upload,onlyPrivate, uploadVideo, postUpload);

// Edit Video
videoRouter.get(routes.editVideo(),onlyPrivate,getEditVideo);
videoRouter.post(routes.editVideo(),onlyPrivate,postEditVideo);

// Video Detail
videoRouter.get(routes.videoDetail(),videoDetail);

// Video Delete
videoRouter.get(routes.deleteVideo(),onlyPrivate,deleteVideo);

export default videoRouter;
