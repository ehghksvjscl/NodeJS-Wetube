import routes from "../routers/routes";

export const getJoin = (req,res) => res.render("join",{pageTitle:"Join"});
export const postJoin = (req,res) => {
    const { 
        body: {name,email,password,password2}
    } = req;

    if (password !== password2) {
        res.status(400)
    } else {
        res.redirect(routes.home)
    }
    return res.render("join",{pageTitle:"Join"})
}
export const getlogin = (req,res) => res.render("login",{pageTitle:"Login"});
export const postlogin = (req,res) => {
    return res.redirect(routes.home)
}

export const logout = (req,res) => {
    return res.redirect(routes.home)
}
export const users = (req,res) => res.render("users",{pageTitle:"Users"});
export const userDetail = (req,res) => res.render("userDetail",{pageTitle:"User Detail"});
export const editProfile = (req,res) => res.render("editProfile",{pageTitle:"Edit Profile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle:"Change Password"});
