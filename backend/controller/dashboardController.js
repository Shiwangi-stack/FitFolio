// const blogModel=require('../model/blogModel')
// const contactModel=require('../model/contactModel')
// const categoryModel=require('../model/categoryModel')

// const getcount=async(req, res)=>{
//     try{
//         const blogCount=await blogModel.countDocuments()
//         const contactCount=await contactModel.countDocuments()
//         const categoryCount=await categoryModel.countDocuments()
//         res.status(200).json({
//             blogCount, contactCount, categoryCount
//         })
//     }
//     catch(err)
//     {
//         console.log(err)
//         res.status(500).json({'message':'error'})
//     }
// }

// module.exports=getcount

const blogModel = require('../model/blogModel');
const contactModel = require('../model/contactModel');
const categoryModel = require('../model/categoryModel');
const orderModel = require('../model/orderModel');
const productModel = require('../model/productModel'); 

const getcount = async (req, res) => {
  try {
    const blogCount = await blogModel.countDocuments();
    const contactCount = await contactModel.countDocuments();
    const categoryCount = await categoryModel.countDocuments();
    const orderCount = await orderModel.countDocuments();
    const productCount = await productModel.countDocuments(); // 🔥 NEW LINE
    res.status(200).json({
      blogCount,
      contactCount,
      categoryCount,
      orderCount,   // 🔥 ADD THIS
      productCount   // 🔥 ADD THIS
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error' });
  }
};

module.exports = getcount;