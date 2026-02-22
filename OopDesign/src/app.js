import express from 'express';
import userRoutes from './modules/user/user.routes.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get("/",(req,res)=>{
    return res.send("hello sir")
})
app.use("/api/user",userRoutes)
export default app;