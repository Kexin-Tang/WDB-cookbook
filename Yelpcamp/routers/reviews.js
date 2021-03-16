/*
    ! 该文件用于设置review的路由
*/
const express = require("express");
const router = express.Router({ mergeParams: true }); // set mergeParams to let :id be accessed in this file
const errorHandler = require('../utils/errorHandler');
const expressError = require('../utils/ExpressError');
const { validReview } = require('../middleware');
const { isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews");


// 添加review
router.post('/', isLoggedIn, validReview, errorHandler(reviewController.create));

// 删除review
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, errorHandler(reviewController.delete));

module.exports = router;