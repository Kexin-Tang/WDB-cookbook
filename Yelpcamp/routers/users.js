const express = require("express");
const router = express.Router();
const User = require('../models/user');
const errorHandler = require('../utils/errorHandler');
const password = require('passport');


router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', errorHandler(async (req, res) => {
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
}));

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', password.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), errorHandler(async (req, res) => {
    const { username } = req.body;
    const returnUrl = req.session.returnUrl || "/campgrounds";
    delete req.session.returnUrl
    req.flash('success', `Welcome back, ${username}`);
    res.redirect(returnUrl);
}));

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "Goodbye~");
    res.redirect('/campgrounds');
});

router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        req.flash('error', "User do not exist!");
        res.redirect('/login');
    } else {
        res.render('users/user', { user });
    }
})

module.exports = router;