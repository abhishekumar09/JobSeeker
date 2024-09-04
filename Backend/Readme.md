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








// middleware -: means jo request and response k beech mein km krta hei







// params :  req.params refers to an object containing route parameters parsed from the URL path. 


definition -:

params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}. Syntax: req.params.









What is the difference between params and query in node?
query is used for getting the query string values and req. params is used for getting the route parameters...




// Multer : used for uploading profie photos aur then jo images hein use hm cloudnary pe dalenge ten take a link from it 