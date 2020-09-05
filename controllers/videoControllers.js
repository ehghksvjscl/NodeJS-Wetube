import routes from "../routers/routes";
import Video from "../models/Video";
import { Mongoose } from "mongoose";
import { permittedCrossDomainPolicies } from "helmet";

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

export const getEditVideo = async (req,res) => {
    const {
        params:{id}
    } = req;
    try {
        const video = await Video.findById(id)
        res.render("editVideo",{pageTitle:"Edit Video",video});
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
        const video = await Video.findById(id)
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
        await Video.findOneAndDelete({_id:id})
    } catch (error) {
        console.log(error)
    }
    res.redirect(routes.home)
}