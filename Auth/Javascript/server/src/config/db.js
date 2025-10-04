import mongoose from "mongoose";

export const connectDB = async (url) => {
    try{
       let connect = await mongoose.connect(url);
       if(connect) console.log('Database connected');
       else{
        console.log('Database not connected');
       };
    }catch(err){
        console.log(err);
    }
}