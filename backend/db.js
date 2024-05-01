const mongoose =require("mongoose");
const { boolean } = require("zod");


mongoose.connect("mongodb+srv://shiva18:01234567890123@cluster0.hxwolox.mongodb.net/todo")



const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("app",todoSchema);

module.exports=todo;