import mongoose from "mongoose";

export const connectDB = async () => {
    try{
       let connect = await mongoose.connect(`${process.env.MONGO_URL}`);
       if(connect) console.log('Database connected');
       else{
        console.log('Database not connected');
       };
    }catch(err){
        console.log(err);
    }
}