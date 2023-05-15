const express = require("express")
const connectDB = require("./config/dbconnection")
const croute = require("./contactroutes/C-routes")
const userroute = require("./contactroutes/userroutes")
//const MongoClient = require('mongodb').MongoClient;

const app = express()
const port = 3000


// client.connect()
//   .then(() => {
//     console.log('Connected to MongoDB successfully!');
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB:', err);
//   });

connectDB()
app.use(express.json())
app.use("/api/contacts",croute)
app.use("/users",userroute)
app.listen(port , ()=>{
    console.log("its working")
})
