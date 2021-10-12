const { SECRET_KET } = require("../../constant");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");


const auth = async (req, res, next) => {
    try {
        console.log("abc ", req.headers);
        var token = req.headers.authorization.split(" ")[1]
        let data = jwt.verify(token, SECRET_KET)
        const user = await UserModel.findOne({ userName: data.userName, role: data.role });
        if (!user) {
            throw new Error("not find account by token !!");
        }
        req.user = user;
        next()
    } catch (error) {
        console.log("eorrr" , error.message);
        res.status(401).json({ message: "token wrong !!!" })
    }
}

const isAdmin = async (req, res, next) => {
    let user = req.user
    if (user.role === "admin") {
        next()
    } else {
        res.status(401).json({ message: "You must to be admin to use this API" })
    }
}
module.exports = {
    auth, isAdmin
}
