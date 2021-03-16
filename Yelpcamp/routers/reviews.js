/*
    ! 该文件用于设置review的路由
*/
const express = require("express");
const router = express.Router({ mergeParams: true }); // set mergeParams to let :id be accessed in this file
const errorHandler = require('../utils/errorHandler');
const expressError = require('../utils/ExpressError');
const Review = require("../models/review");
const Campground = require('../models/campground');
const { validReview } = require('../middleware');
const { isLoggedIn, isReviewAuthor } = require("../middleware");


// 添加review
router.post('/', isLoggedIn, validReview, errorHandler(async (req, res, next) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', "Successfully made a new review!");
    res.redirect(`/campgrounds/${campground._id}`);
}));


router.delete('/:reviewId', isLoggedIn, isReviewAuthor, errorHandler(async (req, res, next) => {
    const { reviewId, id } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', "Successfully delete a review!");
    res.redirect(`/campgrounds/${id}`);
}));

module.exports = router;