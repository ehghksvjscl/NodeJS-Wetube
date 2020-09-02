import routes from "../routers/routes";
import Video from "../models/Video";

export const home = async (req,res) => {
    try {
        const video = await Video.find({});
        res.render("home", {pageTitle:"Home",video})
    } catch(error) {
        console.log(error);
        res.render("home", {pageTitle:"Home",video})
    }
}
export const search = (req,res) => {
    const {query: { term:searchingBy }} = req
    return res.render("search",{pageTitle:"Search",searchingBy,video});
}
export const videos = (req,res) => res.render("videos",{pageTitle:"Videos"});

export const getUpload = (req,res) => res.render("upload",{pageTitle:"Upload"});
export const postUpload = async(req,res) => {
    const {
        body: {title, description},
        file: {path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });

    console.log(newVideo)

    res.redirect(routes.videoDetail(newVideo.id))
}

export const editVideo = (req,res) => res.render("editVideo",{pageTitle:"Edit Video"});
export const videoDetail = (req,res) => res.render("videoDetail",{pageTitle:"Video Detail"});
export const deleteVideo = (req,res) => res.render("deleteVideo",{pageTitle:"Delete Video"});