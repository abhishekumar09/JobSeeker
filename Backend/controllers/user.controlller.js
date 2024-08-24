import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    };
    const user = await User.findOne({ email }); // is use for check that user does exist r not
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is a salt like a layer of password how much it's strong

    await User.create({
      fullname,
      email,
      phoneNumber,
      password:hashedPassword,
      role,
    });
    return res.status(201).json({
        message:"Account created successfully.",
        success:true
    });
  } catch (error) {
    console.log(error);
  }
};



// Login Page

export const login =  async (req,res) => {
    try{
        const {email , password , role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
              message: "Something is missing",
              success: false,
            });
    };
    let user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            Message:"Incorrect email or password.",
            success:false,
        })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch) {
        return res.status(400).json({
            Message:"Incorrect email or password.",
            success:false,
        })
    };
    // check role is correct or not   // like the person register as role of student and they login as a recuritor so for that case 
    if(role != user.role){
return res.status(400).json({
    message:"Account doesn't exist with current role.",
    success:false
})
    };
    // Generate Token after that we store in cookie
    const tokenData = {
        userId : user._id
    }
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY,{expiresIn:'1d'});

    // this user object will share with user when they logged in 
    user = {
        _id:user._id,
        fullname:user.fullname,
        email:user.email,
        phoneNumber:user.phoneNumber,
        role:user.role,
        profile:user.profile
    }
return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpsOnly:true, sameSite:'strict'}).json({                   // max age stores 1 day 60 hrs 60 mins 60 sec 1000ms store in cookie         // samestrick is baasically used for safety from hacker that they do not take our key
  message: `welcome back ${user.fullname}`,
  user,
  success:true
})
    }catch (error){
console.log(error);
    }
}


// Logout page

export const logout = async (req,res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge: 0 }).json({          // maxage exppires immediately // cookie is empty all data erase and logout easily
          message:"Logged out successfully",
          success:true
        })
        } catch (error) {
        console.log(error);
    }
}







// Update Profile

export const updateProfile = async (req,res) => {
    try {
        const {fullname, email, phoneNumber, bio, skills} = req.body;
        if (!fullname || !email || !phoneNumber || !bio || !skills) {
            return res.status(400).json({
              message: "Something is missing",
              success: false,
            });
          };
const skillsArray = skills.split(",");
const userId = req.id;     // middleware authentication
let user = await User.findById(userId);

if(!user){
    return res.status(400).json({
        message:"User not found",
        success:false
    })
}
    } catch (error) {
        console.log(error);
        
    }
}