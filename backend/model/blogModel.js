const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    title:{type:String, required:true},
    category:{type:String, require:true},
    postby:{type:String},
    description:{type:String},
    photo:{type:String},
    photopath:{type:String},
    poston:{type:Date, default:Date.now}
})

const blogModel=new mongoose.model("blog",blogSchema)

module.exports=blogModel