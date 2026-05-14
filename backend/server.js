const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')



const app=express()
app.use("/images", express.static("public/images"));
app.use(cors())
app.use(express.json())


const PORT=process.env.PORT || 5000

require('dotenv').config()


mongoose.connect(process.env.MONGOURI,{
    dbName:"dbshop"
})
.then(()=> console.log("connected to mongodb"))
.catch((err)=> console.log("Error:",err))

const contactRoute=require('./route/contactRoute')
app.use('/',contactRoute)


const blogRoute=require('./route/blogRoute')
app.use('/',blogRoute)

const loginRoute=require('./route/loginRoute')
app.use('/', loginRoute)

const dashboardRoute=require('./route/dashboardRoute')
app.use('/', dashboardRoute)

const categoryRoute=require('./route/categoryRoute')
app.use('/',categoryRoute)

const productRoute=require('./route/productRoute')
app.use('/', productRoute)

const signupRoute=require('./route/signupRoute')
app.use('/api', signupRoute)

const orderRoute = require('./route/orderRoute');
app.use('/', orderRoute);

const wishlistRoute = require('./route/wishlistRoute');
app.use("/api/wishlist", wishlistRoute);

app.get("/", (req, res) => {
  res.send("Backend Running")
})

app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});





// const bcrypt=require('bcryptjs')
// const plainpassword="123";
// bcrypt.hash(plainpassword, 10)
// .then ((hashedpassword)=>{
//     console.log(hashedpassword)
// });

