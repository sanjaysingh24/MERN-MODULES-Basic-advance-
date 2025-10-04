import app from "./app.js";
import 'dotenv/config';
import { connectDB } from "./config/db.js";
const port = process.env.PORT;
await connectDB(`${process.env.MONGO_URL}`);
const startServer = async()=>{
    try{
       app.listen(port,(err)=>{
        if(err) throw err;
        console.log(`Server is running on port ${port}`);
       })
    }catch(err){
        console.log(err);
    }
}
startServer();