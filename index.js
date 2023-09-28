const express = require("express");
const mongoose = require("mongoose"); 
require("dotenv").config()
const app = express();
const UserRoute = require("./routes/UserRoutes")
const BlogRoute = require("./routes/BlogRoutes")
const cors = require("cors")
app.use(cors())
app.use(express.json());
app.use("/user",UserRoute)
app.use("/blogs",BlogRoute)
app.get("/",(req,res)=>{

    res.send("Welcome to the server")
})

const connect = async()=>{

    try {

        await mongoose.connect(process.env.URL);

        console.log("connected")
        
    } catch (error) {
        
        console.log(error)
    }
}

app.listen(8080,()=>{

    connect()
    console.log("listen")
})