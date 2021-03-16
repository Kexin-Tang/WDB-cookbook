/*
    ! 该文件用于设置campgrounds的路由
*/
const express = require("express");
const router = express.Router();
const Campground = require('../models/campground');
const errorHandler = require('../utils/errorHandler');
const expressError = require('../utils/ExpressError');
const { isLoggedIn, validCampgrounds, isAuthorized } = require('../middleware');

// 列出所有campgrounds
router.get('/', errorHandler(async (req, res, next) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}));

// 创建新的campgrounds
router.get('/new', isLoggedIn, (req, res, next) => {
    res.render('campgrounds/new');
});
router.post('/', isLoggedIn, validCampgrounds, errorHandler(async (req, res, next) => {
    const newCamp = new Campground(req.body.campgrounds);
    newCamp.author = req.user._id;
    await newCamp.save();
    req.flash('success', "Successfully made a new campground!");
    res.redirect(`/campgrounds/${newCamp._id}`);
}));

// 访问id的详细信息
router.get('/:id', errorHandler(async (req, res, next) => {
    const { id } = req.params;
    const camp = await Campground.findById(id).populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    }).populate("author");
    if (!camp) {
        req.flash("error", "Cannot found the campground!");
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { camp });
}));

// 编辑id对应记录
router.get('/:id/edit', isLoggedIn, isAuthorized, errorHandler(async (req, res, next) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp });
}));

// 更新相应的编辑
router.put('/:id', isLoggedIn, isAuthorized, errorHandler(async (req, res, next) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, { ...req.body.campgrounds }, { new: true });
    req.flash('success', "Successfully update the campground!");
    res.redirect(`/campgrounds/${id}`);
}));

// 删除id对应记录
router.delete('/:id', isLoggedIn, isAuthorized, errorHandler(async (req, res, next) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', "Successfully delete the campground!");
    res.redirect('/campgrounds');
}));

module.exports = router;