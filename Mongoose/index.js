const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/products');
const method = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));

// 连接服务器
mongoose.connect("mongodb://localhost:27017/farmStand", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connect Successfully!"))
    .catch(e => console.log(`Connection Falied: ${e}`));

// 设置EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 设置路由

// 设置主页面router
app.get('/products', async (req, res) => {
    const { category } = req.query;
    // 如果是访问特定的种类
    if (category) {
        // 查找所有同类记录
        let products = await Product.find({ category: category });
        res.render('index', { products, category });
    } else {
        let products = await Product.find({});
        res.render('index', { products, category: 'all' });
    }
});

// 设置新添加一个记录的router
app.get('/products/add', (req, res) => {
    res.render('add');
})

// 设置用户提交新记录后的重定向router
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/products');
})

// 设置用户访问某一个记录详细信息的router
app.get('/products/:id', async (req, res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    res.render('detail', { product });
})

// 设置修改记录的router, 渲染相关页面
app.get('/products/:id/edit', async (req, res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    res.render('edit', { product });
});

// 设置用户提交修改的router, 以PUT形式提交
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    let product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    console.log(product);
    res.redirect(`/products/${product._id}`);
});

// 设置用户删除记录的router
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

// 添加监听
app.listen(8080, function () {
    console.log("Listening on Port 8080...");
});