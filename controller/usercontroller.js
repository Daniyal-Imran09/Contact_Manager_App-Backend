const express = require("express")
const router = express.Router()
const asynchamdler = require("express-async-handler")
const model = require("../models/contactmodel")
const user = require("../models/usermodel")
const webtoken = require("jsonwebtoken")
const dan = "daniyal123"
const registeruser = asynchamdler(async (req,res)=>{
    const {name,email,password}  = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("no enetres")
    }
    const User = await user.create({
        name,
        email,
        password
    })
    res.status(200).json(user)
})

const loginuser = asynchamdler(async (req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.status(404)
        throw new Error("wrong credentials")
    }
    const check = await user.findOne({email})
    if(check){
        const accesstoken = webtoken.sign({
            
        user:{
             username: check.name,
              useremail:  check.email,
              id:  check.id
        }
    },
  dan,
    {expiresIn: "15m"}
        
   
);
res.status(200).json({accesstoken})
}
   
})


const currentuser = asynchamdler(async (req,res)=>{
    res.status(200).json(req.user)
})

module.exports = {registeruser,loginuser,currentuser}
