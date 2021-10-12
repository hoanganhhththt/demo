const express = require("express");
const Router = express.Router();
const userController = require("../controller/userController");
const middlewareAuth = require("../middleware/authen")

// đăng kí tài khoản
Router.route("/regester")
    .post(userController.regester);
// đăng nhập
Router.route("/login")
    .post(userController.login);
// chỉ định làm admin
Router.route("/termAdmin")
    .post(middlewareAuth.auth, middlewareAuth.isAdmin, userController.termAdmin);
Router.route("/user")
    .get(middlewareAuth.auth, userController.getUser)
    .put(middlewareAuth.auth, middlewareAuth.isAdmin, userController.putUser)
    .delete(middlewareAuth.auth, middlewareAuth.isAdmin, userController.deleteUser)
    // put delete;
module.exports = Router