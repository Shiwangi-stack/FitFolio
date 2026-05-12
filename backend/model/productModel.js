const mongoose=require('mongoose')

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },

    mrp: { type: Number },
    sellingprice: { type: Number },

    photo1: { type: String },
    photo2: { type: String },
    photo3: { type: String },

    description: { type: String },
    gender: { type: String },
    availablesize: { type: String },
    material: { type: String },

    poston: { type: Date, default: Date.now }
});

const productModel=new mongoose.model("product", productSchema);

module.exports=productModel