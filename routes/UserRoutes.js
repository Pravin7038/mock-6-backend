const express = require("express")
const route = express.Router();
const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
route.post("/register",async(req,res)=>{

    const {Email,Password} = req.body;
    try {
        
        const user = await User.findOne({Email})

        console.log(user)
        if(user){

            res.send({msg:"User is Already Exist"})
        }
        else{

            const Newpass = await bcrypt.hash(Password,10)

            await User.create({...req.body,Password:Newpass});

            res.send({msg:"New User is Registered"})
        }

    } catch (error) {

        res.send({msg:"Somethin went wrong"})
        
    }
})

route.post("/login",async(req,res)=>{

    const {Email,Password} = req.body;
    try {

        const user = await User.findOne({Email})

        const Pass = user.Password
        const verify = await bcrypt.compare(Password,Pass);

        if(verify){

           const token =  await jwt.sign({userId:user._id,username:user.Username},"pravin");

            res.send({msg:"login successful",token:token});
        }
        else{

            res.send({msg:"login failed"})
        }
        
    } catch (error) {
        
        res.send({msg:"Somethin went wrong"})
    }

})

module.exports = route;