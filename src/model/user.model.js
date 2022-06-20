const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type:"string",min:3,max:10,
        required:true,
        unique:true
    },
    password:{
        type:"string",
        required:"true"
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports= mongoose.model("Usermodel",userSchema);