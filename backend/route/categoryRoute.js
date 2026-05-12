const express=require('express')
const router=express.Router()
const {categoryController, getcategory, getcategorybyid, deletecategory,updatecategory}=require('../controller/categoryController')

router.post('/api/insertcategory', categoryController)
router.get('/api/getcategory', getcategory)
router.get('/api/getcategorybyid/:id', getcategorybyid)
router.delete('/api/deletecategory/:categoryid', deletecategory)
router.put('/api/updatecategory/:editid', updatecategory)

module.exports=router