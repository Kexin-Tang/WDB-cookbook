const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "You should give me your name!"]
    },
    password: {
        type: String,
        required: [true, "You should set your password!"]
    }
});

userSchema.statics.findAndValidate = async function (username, password) {
    const findUser = await this.findOne({ username: username });
    if (!findUser) {
        return false;
    } else {
        const isValid = await bcrypt.compare(password, findUser.password);
        return isValid ? findUser : false;
    }
};

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model("User", userSchema);