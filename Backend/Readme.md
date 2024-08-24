Cookie-Parser - use for passes the token from frontent to backend   like if we sand data it stores (cookies) in browser but not pass into backend so we not access that's why we use cookie parser.


cors - that provides your express app with middlewares to enable Cross-origin resource sharing (CORS) which is a mechanism that allows resources on your express app from being shared with external domains, its important in making cross-domain requests possible in case it's needed.


// jwt is basically used for generating the token





// it's basic api           // in which we show how toget data on browser

app.get("/home", (req,res)=>{
    return res.status(200).json({
        message:"I am coming",
        success:true
    })
})






// why utils folder use ?
Ans- : The utils folder is the place for utility functions that can be reused across your application.




// Best Boiler template for setup of MongoDB

import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch(error){
                      console.log(error);
    }
}

export default connectDB;






// env mein SECRET_KEY yeh hm randomly bhi dal skte hein kuch bhi 




// In  controller we write login of all website