/*
    ! 该文件用于定义Schema
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },

    description: {
        type: String
    },
    location: {
        type: String
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);