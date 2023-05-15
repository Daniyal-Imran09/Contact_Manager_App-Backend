var mongoose = require('mongoose');
const dbconnect = async () => {
try {
    mongoose.set('strictQuery',false)
    await mongoose.connect("mongodb://127.0.0.1:27017/contactapp")
    console.log("hello i am database")
} catch (error) {
    console.log("ahhhue")
}
}
module.exports = dbconnect;