/*
    ! 该文件用于设置Campgrounds的控制器，实现访问特定网址时的逻辑 
 */
const { cloudinary } = require('../cloudinary');
const Campground = require('../models/campground');


// TODO *******************************************
// 用于列出所有的campgrounds
module.exports.index = async (req, res, next) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
};

// TODO *******************************************
// 定义新的campgrounds
module.exports.new = (req, res, next) => {
    res.render('campgrounds/new');
};

// 将定义的新内容保存到数据库并重定向
module.exports.create = async (req, res, next) => {
    const newCamp = new Campground(req.body.campgrounds);
    newCamp.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    newCamp.author = req.user._id;
    await newCamp.save();
    req.flash('success', "Successfully made a new campground!");
    res.redirect(`/campgrounds/${newCamp._id}`);
};

// TODO *******************************************
// 访问campground的详细信息
module.exports.campDetail = async (req, res, next) => {
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
};

// TODO *******************************************
// 编辑特定campground
module.exports.edit = async (req, res, next) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp });
};

// 将编辑的内容存储到数据库并重定向
module.exports.update = async (req, res, next) => {
    const { id } = req.params;
    const camp = await Campground.findByIdAndUpdate(id, { ...req.body.campgrounds });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    camp.images.push(...imgs);
    await camp.save();
    if (req.body.deleteImages) {
        for (let file of req.body.deleteImages) {
            cloudinary.uploader.destroy(file);
        }
        await camp.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } });
    }
    req.flash('success', "Successfully update the campground!");
    res.redirect(`/campgrounds/${id}`);
};

// TODO *******************************************
// 删除特定的campground
module.exports.delete = async (req, res, next) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', "Successfully delete the campground!");
    res.redirect('/campgrounds');
};