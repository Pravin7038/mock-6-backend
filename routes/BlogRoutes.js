const express = require("express")
const route = express.Router();
const Blog = require("../models/BlogModel");
const auth = require("../Middleware")
route.post("/", auth, async (req, res) => {

    try {


        await Blog.create(req.body)
        res.send({ msg: "New Blog Created" })




    } catch (error) {

        res.send({ msg: error })
    }
});

route.get("/", auth, async (req, res) => {

    console.log(req.query.title);

    try {
        if (req.query) {

            const blog = await Blog.findOne({title:req.query.title})

            res.send({ blog: blog });
        }
        else {
        const AllBlogs = await Blog.find()

        res.send({ blogs: AllBlogs });

        }

    } catch (error) {

        res.send({ msg: error })
    }

});



module.exports = route;