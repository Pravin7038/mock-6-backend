const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    Username:{type:String},
    Avatar:{type:String},
    Email:{type:String},
    Password:{type:String}
})

const User = mongoose.model("User",UserSchema);

module.exports = User;