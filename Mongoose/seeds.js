const mongoose = require("mongoose");
const Product = require('./models/products');

// 连接服务器
mongoose.connect("mongodb://localhost:27017/farmStand", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connect Successfully!"))
    .catch(e => console.log(`Connection Falied: ${e}`));

let list = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Milk',
        price: 2.49,
        category: 'dairy'
    }
];

// let p = new Product({
//     name: "Ruby Grape",
//     price: 1.99,
//     category: 'fruit'
// });

// p.save()
//     .then(msg => console.log(msg))
//     .catch(e => console.log(e));

Product.insertMany(list);