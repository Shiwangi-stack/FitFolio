
const contactModel=require('../model/contactModel')

const contactController=async(request, response)=>{
    console.log('here')
    console.log(request.body)
    const {name, contact, email, subject, message}=request.body;
    if(!name || !email){
        console.log('Fill required fields')
        return response.status(400).json({'message':"All fields are required"})
    }
    try{
        const contactdata=new contactModel(request.body)
        await contactdata.save()
        return response.status(201).json({'message': 'message sent'})
    }
    catch(error)
    {
        console.log(error)
        return response.status(500).json({'message': 'Error'})
    }
}

const getfeedback=async(req, res)=>{
    try{
        const contactData=await contactModel.find()
        res.status(200).json(contactData)
    }
    catch(err){
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

module.exports={contactController, getfeedback}