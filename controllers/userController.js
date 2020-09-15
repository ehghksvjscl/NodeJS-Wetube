import passport from "passport";
import routes from "../routers/routes";
import User from "../models/User";

export const getJoin = (req,res) => res.render("join",{pageTitle:"Join"});
export const postJoin = async (req,res,next) => {
    const { 
        body: {name,email,password,password2}
    } = req;

    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user,password);
            next();
        } catch (error) {
            console.log(error)            
            res.redirect(routes.home)
        }
    }
}
export const getlogin = (req,res) => res.render("login",{pageTitle:"Login"});
export const postlogin = passport.authenticate('local',{
    failureRedirect: routes.login,
    successRedirect: routes.home
}); 

export const logout = (req,res) => {
    req.logout();
    return res.redirect(routes.home)
}
export const users = (req,res) => res.render("users",{pageTitle:"Users"});

// github login
export const githubLogin = passport.authenticate("github");
export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
    const {_json: {id,avatar_url:avatarUrl,name,email} } = profile;
    try {
        const user = await User.findOne({email:email});
        if(user) {
            user.gitghubId = id;
            user.save();
            return cb(null,user);
        } else {
            const newUser = await User.ceate({
                email,
                name,
                gitghubId: id,
                avatarUrl
            });
            return cb(null, newUser);
        }
    } catch (error) {
        return cb(error);
    }
}
export const postGithubLogIn = (req,res,next) => {
    res.redirect(routes.home);
}

// facebook login
export const facebookLogin = passport.authenticate('facebook');
export const facebookLoginCallback = (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken, refreshToken, profile, cb);
}
export const postFacebookLogin = (res,req) => {
    res.redirect(routes.home);
}

export const getme = (req,res) => {
    res.render("userDetail",{pageTitle:"User Detail",user:req.user});
}

export const userDetail = async(req,res) => {
    const { params: {id}} = req;
    const user = await User.findById(id).populate("videos");
    console.log(user)
    try {
        res.render("userDetail",{pageTitle:"User Detail",user});
        console.log(user)
    } catch (error) {
        res.redirect(routes.home)
    }
}
export const getEditProfile = (req,res) => {
    res.render("editProfile",{pageTitle:"Edit Profile"});
}
export const postEditProfile = async(req,res) => {
    const {
        body: {name,email},
        file
    } = req;
    try {
        const user = await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            avatarUrl: file ? file.path : req.user.avatarUrl
        });
        res.redirect(routes.me);
    } catch (error) {
        console.log(error)
        res.redirect(routes.editProfile);
    }
}

export const getChangePassword = (req,res) => {
    res.render("changePassword",{pageTitle:"Change Password"});
}
export const postChangePassword = async(req,res) => {
    const {
        body: {
            oldPassword,
            newPassword,
            newPassword1
        }
    } = req;
    try {
        if (newPassword !== newPassword1) {
            res.status(400);
            res.redirect(routes.changePassword);
            return;
        } 
        await req.user.changePassword(oldPassword,newPassword);
        res.redirect(routes.me);
    } catch (error) {
        res.redirect(routes.changePassword);
    }
}