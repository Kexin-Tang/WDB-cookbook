/*
    ! 本文件用于定义Users的控制器
*/
const User = require("../models/user");

// TODO **************************************************************
// 跳转到注册页面
module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

// 将注册信息提交到数据库
module.exports.register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err)
                return next(err);
            req.flash('success', `Welcome to Yelp Camp, ${username}`);
            res.redirect('/campgrounds');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
};

// TODO **************************************************************
// 跳转到登录界面
module.exports.renderLogin = (req, res) => {
    res.render('users/login');
};

// 将登录信息与数据库中存储的信息做比较，并依此跳转
module.exports.login = async (req, res) => {
    const { username } = req.body;
    const returnUrl = req.session.returnUrl || "/campgrounds";
    delete req.session.returnUrl
    req.flash('success', `Welcome back, ${username}`);
    res.redirect(returnUrl);
};

// TODO **************************************************************
// 注销
module.exports.logout = (req, res) => {
    req.logout();
    req.flash('success', "Goodbye~");
    res.redirect('/campgrounds');
};

// TODO **************************************************************
// 获取用户信息
module.exports.getUserInfo = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        req.flash('error', "User do not exist!");
        res.redirect('/login');
    } else {
        res.render('users/user', { user });
    }
};