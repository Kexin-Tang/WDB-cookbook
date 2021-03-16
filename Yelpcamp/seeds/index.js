/*
    ! 该文件用于随机生成一些记录, 然后存入DB中
*/
const mongoose = require("mongoose");
const Campground = require('../models/campground');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');

// 连接数据库
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Database connected'));

// 在array中随机选取一个
let sample = (array) => array[Math.floor(Math.random() * array.length)];

// 生成数据
const seedDB = async () => {
    // await Campground.deleteMany({});    // 先删除已有的数据
    // 生成数据
    for (let i = 0; i < 4; i++) {
        const random1000 = Math.floor(Math.random() * 1000);    // 随机选取一个城市信息
        const price = Math.floor(Math.random() * 20) + 20;
        const newCamp = new Campground({                        // 基于这个信息, 新建新的记录
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Some descriptions...',
            price: price,
            author: "604f2055f205442c908eb241"
        })
        await newCamp.save();
    }
}

// 生成数据, 完成后断开连接
seedDB().then(() => {
    mongoose.connection.close();
    console.log("Bye!");
});