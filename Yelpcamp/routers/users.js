/*
    ! 该文件用于设置User的路由
*/
const express = require("express");
const router = express.Router();
const errorHandler = require('../utils/errorHandler');
const password = require('passport');
const userController = require("../controllers/users");

router.route('/register')
    .get(userController.renderRegister)
    .post(errorHandler(userController.register));

router.route('/login')
    .get(userController.renderLogin)
    .post(password.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), errorHandler(userController.login));

// 注销
router.get('/logout', userController.logout);

// 获取用户信息
router.get('/user/:id', userController.getUserInfo)

module.exports = router;