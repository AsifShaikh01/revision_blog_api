const express = require("express");
const {UserModel} = require("../model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register" , async(req,res)=>{
    const {username , email , password} = req.body;
    try {
        const exUser = await UserModel.findOne({email});
        if(exUser){
            res.send("This user is already registered!!")
        }

        const hashedPassword = await bcrypt.hash(password , 10);
        const user = new UserModel({username , email, password:hashedPassword});
        await user.save();
        res.send({"msg":"user registered!!"})
        
    } catch (error) {
       res.send(error)   
    }
})


userRouter.post("/login" , async(req,res)=>{
    const {email , password} = req.body;
    try {
        const exUser = await UserModel.findOne({email});
        if(!exUser){
            res.send("user not found!!");
        }

        const hashedPassword = await bcrypt.compare(password , exUser.password);
        if(!hashedPassword){
           res.send("Invalid Credentials!!")
        }

        const token = jwt.sign({email : exUser.email , id:exUser._id} , "revision");
        res.send({"msg" : "Login Successfull", token : token} )
        
    } catch (error) {
        res.send(error)
    }
})

module.exports={
    userRouter
}

