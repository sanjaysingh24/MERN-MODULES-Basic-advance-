import express from  'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

const corsOptions={
    origin:'*',
    methods:['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
}
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send('Hello from express server');
   
})

export default app;

