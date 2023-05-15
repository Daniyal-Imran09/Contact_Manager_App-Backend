const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type: String,
        required:[true,"please add name"]
    },
    email:{
        type: String,
        required:[true,"please add email"],
        unique:[true,"email already taken"]

    },
    password:{
        type: String,
        required:[true,"please add password"]

    }
},{
    timestamps:true
}
)

module.exports = mongoose.model("user",schema)