const express= require('express')
const router=express.Router()
const {placeorder,updatepayment,myorders,orderdetails, allorders,adminorderdetails,updateorderstatus}= require('../controller/orderController')

router.post('/api/placeorder',placeorder)
router.put('/api/updatepayment/:orderId', updatepayment)
router.get('/api/myorders/:id',myorders)
router.get('/api/orderdetails/:orderid',orderdetails)
router.get('/api/allorders',allorders)
router.get('/api/adminorderdetails/:orderId',adminorderdetails)
router.put('/api/updateorderstatus/:orderId',updateorderstatus)


module.exports= router;



