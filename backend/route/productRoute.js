const express=require('express')
const router=express.Router()
const {productController, getproduct, getproductbyid, deleteproduct,updateproduct}=require('../controller/productController')

router.post('/api/insertproduct', productController)
router.get('/api/getproduct', getproduct)
router.get('/api/getproductbyid/:id', getproductbyid)
router.delete('/api/deleteproduct/:productid', deleteproduct)
router.put('/api/updateproduct/:editid', updateproduct)

module.exports=router