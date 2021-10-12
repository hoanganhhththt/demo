const userModel = require("../model/userModel");
const UserModel = require("../model/userModel")
exports.regester = async (req, res) => {
    try {
        let { phone, userName, password } = req.body;
        let role = "user"
        const newUser = new UserModel({
            phone, password, userName, role
        })
        let result = await newUser.save();
        res.json({ result })
    } catch (error) {
        res.json({ message: error.message })
    }

}
 
exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body
        const user = await UserModel.findAccount(userName, password)
        const token = await user.generateToken();
        let result = await UserModel.findById({ _id: user._id }, { _id: 0, __v: 0, password: 0 })
        res.json({ token, user: result })
    } catch (error) {
        res.json({ message: error.message })
    }
}
exports.termAdmin = async (req, res) => {
    let { userName } = req.body;
    try {
        let user = await UserModel.findOne({ userName: userName })
        if (!user) {
            return res.json({ message: "find account not found by user name" })
        }
        user.role = "admin";
        let newUser = await user.save();
        res.json({ message: "change role to admin success", newUser })

    } catch (error) {
        res.json({ message: error.message })
    }
}


exports.getUser = async (req, res) => {
    try {
        let listUser = await UserModel.find({}, { _id: 0, password: 0, __v: 0 });
        res.json({ user: listUser })
    } catch (error) {
        res.json({ message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { userName } = req.body
        let user = await UserModel.find({ userName: userName });
        await user.delete();
        res.json({ message: "delete account success" })
    } catch (error) {
        res.json({ message: error.message })
    }
}
exports.putUser = async (req, res) => {
    try {
        const { phone, userName, password } = req.body
        let user = await UserModel.find({ userName: userName });
        user.phone = phone;
        user.userName = userName;
        user.password = password;
        let newUser = await user.save()
        res.json({ user })
    } catch (error) {
        res.json({ message: error.message })
    }
}