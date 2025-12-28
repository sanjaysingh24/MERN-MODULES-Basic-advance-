import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config();
import {connectDB} from './src/config/db.js'
const port = process.env.PORT;
await connectDB();
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