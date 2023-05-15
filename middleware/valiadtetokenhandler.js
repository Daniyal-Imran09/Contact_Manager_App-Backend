const express = require("express")
const asynchandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const dan = "daniyal123"
const validatetoken = asynchandler(async (req,res,next) =>{
    let token 
    let authtoken = req.headers.authorization || req.headers.authorization
    if(authtoken && authtoken.startsWith("Bearer")){
        token = authtoken.split(" ")[1]
       jwt.verify(token,dan,(error,decoded)=>{
        if(error){
            res.status(401)
            throw new Error("wrong token")
        }
       // console.log(decoded)
        req.user = decoded.user
        next();
       })
    }
})

module.exports = validatetoken