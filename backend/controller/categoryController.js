const categoryModel=require('../model/categoryModel')

const categoryController=async(request, response)=>{
    console.log(request.body)
    const {title, photopath}=request.body;
    if(!title || !photopath){
        console.log('Fill required fields')
        return response.status(400).json({'message':"All fields are required"})
    }
    try{
    const categorydata=new categoryModel(request.body)
    await categorydata.save()
    return response.status(201).json({'message':'Category Added'})
    }
    catch(error)
    {
console.log(error)
return response.status(500).json({'message':'Error'})
    }


}
const getcategory=async(req,res)=>{
    try{
        const categoryData=await  categoryModel.find()
        console.log(categoryData)
        res.status(200).json(categoryData)
    }
    catch(err){
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

const getcategorybyid=async(req,res)=>{
    const {id}=req.params
    try{
        const categoryData=await  categoryModel.findById(id)
        console.log(categoryData)
        res.status(200).json(categoryData)
    }
    catch(err){
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

const deletecategory=async(req, res)=>{
    const {categoryid}=req.params
    try{
        const dbcategory=await categoryModel.findByIdAndDelete(categoryid)
        if(!dbcategory)
            return res.status(404).json({'message':'Category not found'})
        res.status(200).json({'message':'Category Deleted'})
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

const updatecategory=async(req, res)=>{
    const {editid}=req.params

    try{
        const dbcategory=await categoryModel.findByIdAndUpdate(editid, req.body)
        if (!dbcategory)
            return res.status(404).json({'message':'Category Not found'})
        res.status(200).json({'message':'Category Updated'})
    }
    catch (err)
    {
        res.status(500).json({'message':'Error'})
            console.log(err)
        
    }
}


module.exports={categoryController, getcategory,getcategorybyid, deletecategory, updatecategory}