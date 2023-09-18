const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        default:"update mobile no"
    },
    exercise: {
        type: String,
        required: true,
        default:"update exercise"
    },
    description: {
        type: String,
        required: true,
        default:"update description"
    },
    duration: {
        type: String,
        required: true,
        default:"update duration"
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;
