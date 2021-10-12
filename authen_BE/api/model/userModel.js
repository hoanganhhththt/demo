const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const bcrypt = require("bcrypt")
const constValue = require("../../constant")
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "nhập user name bạn ơiii!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "nhập mật khẩu bạn ơiii!"]
    },
    phone: {
        type: Number,
        required: [true, "nhập số điện thoại bạn ơiii!"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true
    }
})

userSchema.pre("save", function (next) {
    // lấy thông tin user hiện tại
    var user = this
    // kiểm tra mật khẩu có được update hay không ? hay tạo mới không?
    // isModified sẽ trả về true khi mà mật khẩu được thay đổi hay tạo mới tại thời điểm đấy(thời điểm hàm đk thực thi)
    if (user.isModified("password")) {
        // tạo ra một chuỗi bất kì bằng genSalt rồi trộn chung với password để mã hóa
        bcrypt.genSalt(constValue.SALT_ROUNDS, (err, salt) => {
            if (err) {
                return next(err);
            } else {
                console.log("user password ", user.password);
                bcrypt.hash(user.password, salt, (err, hash) => {
                    user.password = hash;
                    next()
                })
            }
        })
    } else {
        return next()
    }
})


// tìm tài khoản
userSchema.statics.findAccount = async (userName, password) => {
    try {
        let user = await userModel.findOne({ userName: userName })

        if (!user) {
            throw new Error("account not found !!!")
        }
        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) {
            throw new Error("password not match !!!")
        }
        return user
    } catch (error) {
        throw error
    }
}
// hàm tạo token
userSchema.methods.generateToken = async function () {
    var user = this;
    const token = await jwt.sign({ userName: user.userName, role: user.role }, constValue.SECRET_KET)

    return token;
}
const userModel = model("user", userSchema)

module.exports = userModel
