/*
    ! 该文件用于设置Reviews的控制器
 */
const Review = require("../models/review");
const Campground = require('../models/campground');

// 添加一个新评论并保存到数据库
module.exports.create = async (req, res, next) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', "Successfully made a new review!");
    res.redirect(`/campgrounds/${campground._id}`);
};

// 删除特定的评论
module.exports.delete = async (req, res, next) => {
    const { reviewId, id } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', "Successfully delete a review!");
    res.redirect(`/campgrounds/${id}`);
};