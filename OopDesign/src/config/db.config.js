import mongoose from "mongoose";

export const connectDb  = async()=>{
    try{
     const connectdb = await mongoose.connect("mongodb://localhost:27017/oopdesign")
     console.log("Database connected")
    }catch(err){
        console.log(err) 
    }
}