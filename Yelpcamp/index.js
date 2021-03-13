const express = require("express");
const path = require("path");
const app = express();
const method = require('method-override');
const mongoose = require("mongoose");
const Campground = require('./models/campground');
const ejsMate = require("ejs-mate");
const errorHandler = require('./utils/errorHandler');
const expressError = require('./utils/ExpressError');
const { campgroundSchema, reviewSchema } = require("./joiSchema");
const Review = require("./models/review");

app.use(express.urlencoded({ extended: true }));    // 用于解析POST的报文
app.use(method('_method'));                         // 使用POST去模拟PUT, PATCH, DELETE等

// 连接数据库
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Database connected'));

// 设置EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

const validCampgrounds = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new expressError(msg, 400);
    }
    else {
        next();
    }
};

const validReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new expressError(msg, 400);
    }
    else {
        next();
    }
}

// 访问主界面
app.get('/', (req, res) => {
    res.render('home');
});

// 列出所有campgrounds
app.get('/campgrounds', errorHandler(async (req, res, next) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}));

// 创建新的campgrounds
app.get('/campgrounds/new', (req, res, next) => {
    res.render('campgrounds/new');
});
app.post('/campgrounds', validCampgrounds, errorHandler(async (req, res, next) => {
    const newCamp = new Campground(req.body.campgrounds);
    await newCamp.save();
    res.redirect(`/campgrounds/${newCamp._id}`);
}));

// 访问id的详细信息
app.get('/campgrounds/:id', errorHandler(async (req, res, next) => {
    const { id } = req.params;
    const camp = await Campground.findById(id).populate("reviews");
    res.render('campgrounds/show', { camp });
}));

// 编辑id对应记录
app.get('/campgrounds/:id/edit', errorHandler(async (req, res, next) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp });
}));
app.put('/campgrounds/:id', errorHandler(async (req, res, next) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, { ...req.body.campgrounds }, { new: true });
    res.redirect(`/campgrounds/${id}`);
}));

// 删除id对应记录
app.delete('/campgrounds/:id', errorHandler(async (req, res, next) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}));

// 添加review
app.post('/campgrounds/:id/reviews', validReview, errorHandler(async (req, res, next) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}));


app.delete('/campgrounds/:id/reviews/:reviewId', errorHandler(async (req, res, next) => {
    const { reviewId, id } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
}));

// 针对各种类型的HTTP请求，请求各种网页时，如果不符合上述所有条件，则报错404
app.all('*', (req, res, next) => {
    return next(new expressError("404 Page Not Found!", 404));
})

// 针对各种类型的HTTP请求，请求各种网页时，如果访问上述条件出错时，报错
app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = "Something went wrong...";
    res.status(status).render('error', { err });
})

// 添加监听
app.listen(8080, function () {
    console.log("Listening on Port 8080 ...");
})