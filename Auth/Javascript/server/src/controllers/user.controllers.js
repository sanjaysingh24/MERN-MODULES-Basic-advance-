import {User} from '../models/user.models.js';


export const Signup = async(req,res)=>{
    const {userName,email,password} =req.body;
    console.log(req.files);
    console.log(req.body);
    return;
    try{

    }catch(err){
        console.log(err);
        return res.status(500).json({error:err.message});
    }
}