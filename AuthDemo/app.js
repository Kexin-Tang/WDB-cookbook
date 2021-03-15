const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require('./model/user');
const session = require("express-session");

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extends: true }));
app.use(session({ secret: "session" }));

// 连接数据库
mongoose.connect("mongodb://localhost:27017/authdemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Database connected'));

const requireLogin = function (req, res, next) {
    if (!req.session.user_id) {
        return res.redirect('/');
    } else {
        next();
    }
}

// 主页路由
app.get('/', (req, res) => {
    res.render('home');
});

// 注册页面路由
app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // const hashedPwd = await bcrypt.hash(password, 12);
    const newUser = new User({ username: username, password: password });
    await newUser.save();
    req.session.user_id = newUser._id;
    res.redirect(`/secret`);
})

// 登录页面路由
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findAndValidate(username, password);

    if (user) {
        req.session.user_id = user._id;
        res.render("secret")
    } else {
        res.render("error");
    }
});


// 管理员页面路由
app.get('/secret', requireLogin, (req, res) => {
    res.render("secret");
});

// logout页面路由
app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/');
})

app.listen(8080, function () {
    console.log("Listening to Port 8080...");
});