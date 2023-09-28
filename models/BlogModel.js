const mongoose = require("mongoose")
// const CommentSchema = new mongoose.Schema({

//     username:{type:String},
//     content:{type:String}
// })
const BlogSchema = new mongoose.Schema({
    id:{type:Number},
    username:{type:String},
    title:{type:String},
    content:{type:String},
    category:{type:String},
    date:{type:String},
    likes:{type:Number},
    comments:[{username:String,content:String}]
})

const Blog = mongoose.model("Blog",BlogSchema);

module.exports = Blog;