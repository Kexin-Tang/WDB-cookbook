const express = require("express");
const path = require("path");
const app = express();
const method = require('method-override');
const mongoose = require("mongoose");
const Campground = require('./models/campground');

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


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
});

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});
app.post('/campgrounds', async (req, res) => {
    const { location, title } = req.body.campgrounds;
    const newCamp = new Campground({ title: title, location: location });
    await newCamp.save();
    res.redirect(`/campgrounds/${newCamp._id}`);
});


app.get('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/show', { camp });
});

app.get('/campgrounds/:id/edit', async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp });
});

app.put('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, { ...req.body.campgrounds }, { new: true });
    res.redirect(`/campgrounds/${id}`);
});

app.delete('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
});

// 添加监听
app.listen(8080, function () {
    console.log("Listening on Port 8080 ...");
})