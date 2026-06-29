const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    bio: String,
    avatar: String,
    streak: Number
})

const user = mongoose.model("user", userSchema);
module.exports = user;