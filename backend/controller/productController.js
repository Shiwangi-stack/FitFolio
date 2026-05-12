const productModel=require('../model/productModel')

const productController=async(request, response)=>{
    console.log(request.body)
    const {title, category}=request.body;
    if(!title || !category){
        console.log('Fill required fields')
        return response.status(400).json({'message':"All fields are required"})
    }
    try{
    const productdata=new productModel(request.body)
    await productdata.save()
    return response.status(201).json({'message':'Product Added'})
    }
    catch(error)
    {
console.log(error)
return response.status(500).json({'message':'Error'})
    }


}
const getproduct=async(req,res)=>{
    try{
        const productData=await  productModel.find()
        console.log(productData)
        res.status(200).json(productData)
    }
    catch(err){
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

const getproductbyid=async(req,res)=>{
    const {id}=req.params
    try{
        const productData=await  productModel.findById(id)
        console.log(productData)
        res.status(200).json(productData)
    }
    catch(err){
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

const deleteproduct=async(req, res)=>{
    const {productid}=req.params
    try{
        const dbproduct=await productModel.findByIdAndDelete(productid)
        if(!dbproduct)
            return res.status(404).json({'message':'Product not found'})
        res.status(200).json({'message':'Product Deleted'})
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

const updateproduct=async(req, res)=>{
    const {editid}=req.params

    try{
        const dproduct=await productModel.findByIdAndUpdate(editid, req.body)
        if (!dproduct)
            return res.status(404).json({'message':'product Not found'})
        res.status(200).json({'message':'product Updated'})
    }
    catch (err)
    {
        res.status(500).json({'message':'Error'})
            console.log(err)
        
    }
}


module.exports={productController, getproduct,getproductbyid, deleteproduct, updateproduct}