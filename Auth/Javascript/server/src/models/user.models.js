import mongoose from 'mongoose';

const userSchema  = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        trim:true,
    },
    profileImage:{
        type:String,
    }
},{timestamps:true})

export const User = mongoose.model('User',userSchema);