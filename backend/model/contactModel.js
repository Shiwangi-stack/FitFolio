const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String},
    contact:{type:Number},
    subject:{type:String},
    message:{type:String},
    createdaAt:{type:Date, default:Date.now}
})

const contactModel=mongoose.model('contact',contactSchema)
module.exports=contactModel