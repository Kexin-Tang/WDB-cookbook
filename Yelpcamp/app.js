const express = require("express");
const path = require("path");
const app = express();
const method = require('method-override');
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const errorHandler = require('./utils/errorHandler');
const expressError = require('./utils/ExpressError');
const session = require("express-session");
const flash = require('connect-flash');

const campgrounds = require('./routers/campgrounds');
const reviews = require("./routers/reviews");

// 设置session
const sessionConfig = {
    resave: false,
    secret: "YelpCamp",
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24,
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    }
};
app.use(session(sessionConfig));

// 连接数据库
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Database connected'));

// 设置EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));

// 设置flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

// 设置POST相关
app.use(express.urlencoded({ extended: true }));    // 用于解析POST的报文
app.use(method('_method'));                         // 使用POST去模拟PUT, PATCH, DELETE等

// campgrounds的路由
app.use('/campgrounds', campgrounds);

// review的路由
app.use('/campgrounds/:id/reviews', reviews);

// 访问主界面
app.get('/', (req, res) => {
    res.render('home');
});

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