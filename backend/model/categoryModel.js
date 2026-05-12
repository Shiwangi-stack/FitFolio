const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    title:{type:String, required:true},
    photo:{type:String},
     photopath : {type:String}
  
})

const categoryModel=new mongoose.model("category",categorySchema)

module.exports=categoryModel