import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{    // kismein apply kr rha hei
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    applicant:{     // kon apply kr rha hei which user/applicant
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application  = mongoose.model("Application", applicationSchema);