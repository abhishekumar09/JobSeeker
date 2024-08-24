import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});

const app = express();




// middleware                                   // basic backend code 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:"http//localhost:5173",
    Credentials:true
}
app.use(cors(corsOptions));

// listening on server 
const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT,()=>{
    console.log(`server runnin at port ${PORT}`);
});