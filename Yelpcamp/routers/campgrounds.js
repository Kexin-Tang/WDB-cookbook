/*
    ! 该文件用于设置campgrounds的路由
*/
const express = require("express");                     // ? Express
const router = express.Router();

const errorHandler = require('../utils/errorHandler');  // ? ErrorHandler
const expressError = require('../utils/ExpressError');

const { isLoggedIn, validCampgrounds, isAuthorized } = require('../middleware');    // ? Middleware
const campgroundsControllers = require('../controllers/campgrounds');               // ? Controller

const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage })

router.route('/')
    .get(errorHandler(campgroundsControllers.index))                    // 列出所有campgrounds
    .post(isLoggedIn, upload.array('image'),
        validCampgrounds, errorHandler(campgroundsControllers.create)); // 将new的内容保存到数据库中并重定向

// 定义新的campgrounds
router.get('/new', isLoggedIn, campgroundsControllers.new);

router.route('/:id')
    .get(errorHandler(campgroundsControllers.campDetail))                           // 访问id的详细信息
    .put(isLoggedIn, isAuthorized, upload.array('image'),
        errorHandler(campgroundsControllers.update))                                // 更新相应的编辑
    .delete(isLoggedIn, isAuthorized, errorHandler(campgroundsControllers.delete)); // 删除id对应记录

// 编辑id对应记录
router.get('/:id/edit', isLoggedIn, isAuthorized, errorHandler(campgroundsControllers.edit));

module.exports = router;