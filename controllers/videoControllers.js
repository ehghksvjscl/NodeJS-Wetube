import routes from "../routers/routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async (req,res) => {
    try {
        const video = await Video.find({}).sort({_id:-1});
        res.render("home", {pageTitle:"Home",video})
    } catch(error) {
        console.log(error);
        res.render("home", {pageTitle:"Home",video})
    }
}
export const search = async(req,res) => {
    const {query: { term:searchingBy }} = req
    let video = []
    try {
        video = await Video.find({
            title: { $regex: searchingBy, $options: "i"}
        });
    } catch (error) {
        console.log(error)
    }
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
        description,
        creator: req.user.id
    });

    req.user.videos.push(newVideo.id);
    req.user.save();
    res.redirect(routes.videoDetail(newVideo.id))
}

export const getEditVideo = async (req,res) => {
    const {
        params:{id}
    } = req;
    try {
        const video = await Video.findById(id);
        if(video.creator !== req.user.id) {
            throw Error();
        } else {
            res.render("editVideo",{pageTitle:"Edit Video",video});
        }
    } catch (error) {
        console.log(error)
        res.redirect(routes.home)        
    }
}
export const postEditVideo = async(req,res) => {
    const {
        params:{id},
        body:{title,description}
    } = req;
    try {
        await Video.findOneAndUpdate({_id:id},{title:title,description:description})
        res.redirect(routes.videoDetail(id))
    } catch (error) {
        console.log(error)
        res.redirect(routes.home)
    }
}

export const videoDetail = async (req,res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id).populate("creator").populate("comments");
        res.render("videoDetail",{pageTitle:"Video Detail", video})
    } catch (error) {
        console.log(error)
        res.redirect(routes.home)
    }
}

export const deleteVideo = async(req,res) => {
    const {
        params: {id}
    } = req;

    try {
        const video = await Video.findById(id);
        if(video.creator !== req.user.id) {
            throw Error();
        } else {
            await Video.findOneAndDelete({_id:id})
        }
    } catch (error) {
        console.log(error)
    }
    res.redirect(routes.home)
}

export const postRegisterView = async(req,res) => {
    // 비디오 찾기
    const { // id 찾기
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id) // 찾기 없으면 catch
        video.views = video.views + 1; // 비디오 카운트 + 1
        video.save(); // 저장
        res.status(200) // 코드 정상 처리
    } catch (error) {
        res.status(400);
    } finally {
        res.end();
    }
}

export const postAddComment = async(req,res) => {
    const {
        params: {id},
        body: {comment},
        user,
    } = req;
    try {
        const video = await Video.findById(id);
        const newComment = await Comment.create({
            text: comment,
            creator: user.id
        });
        video.comments.push(newComment.id);
        video.save();
    } catch (error) {
        res.status(400);
    } finally {
        res.end();
    }
}