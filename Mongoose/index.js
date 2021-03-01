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
app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        let products = await Product.find({ category: category });
        res.render('index', { products, category });
    } else {
        let products = await Product.find({});
        res.render('index', { products, category: 'all' });
    }
});

app.get('/products/add', (req, res) => {
    res.render('add');
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/products');
})

app.get('/products/:id', async (req, res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    res.render('detail', { product });
})

app.get('/products/:id/edit', async (req, res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    res.render('edit', { product });
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    let product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    console.log(product);
    res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

// 添加监听
app.listen(8080, function () {
    console.log("Listening on Port 8080...");
});