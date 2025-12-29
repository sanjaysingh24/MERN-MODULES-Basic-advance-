import express from  'express';
import cors from 'cors';
import 'dotenv/config';
import { userRouter } from './routes/user.routes.js';
import cookieparser from 'cookie-parser';
const app = express();


app.use(cookieparser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api',userRouter);

app.get('/',(req,res)=>{
    res.send('Hello from express server');
   
})

export default app;

