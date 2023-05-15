const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const asynchamdler = require("express-async-handler")
const contacts = require("../models/contactmodel")
//get 
const getcontct = expressAsyncHandler( async (req,res)=>{
  const Contacts = await contacts.find({userid: req.user.id})
    res.status(200).json(Contacts)
});
//post 
const createcontact = expressAsyncHandler(  async (req,res)=>{
    console.log("the body is",req.body)
    const {name,email,phone}=req.body
    const contact = await contacts.create({
        name,
        email,
        phone,
        userid:req.user.id
    })
    res.status(200).json(contact)
})

//update
const updatecontact = expressAsyncHandler (async (req,res)=>{
    const cont = await contacts.findById(req.params.id)
    if(!cont){
        res.status(404)
        throw new Error("not found by id")
    }
    const update = await contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(update)
})
//delete
const deleteconatct = expressAsyncHandler (async (req,res)=>{
    const cont = await contacts.findById(req.params.id)
    if(!cont){
        res.status(404)
        throw new Error("not found by id")
    }
    await cont.remove()
    res.status(200).json(cont)
})
//getconatct 
const getcount = expressAsyncHandler (async (req,res)=>{
    const cont = await contacts.findById(req.params.id)
    if(!cont){
        res.status(404)
        throw new Error("not found by id")
    }
    res.status(200).json(cont)
})

module.exports={
    getcontct,
    getcount,
    updatecontact,
    deleteconatct,
    createcontact
}