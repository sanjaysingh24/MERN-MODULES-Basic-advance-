import {User} from '../models/user.models.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
let salt =10;
export const Signup = async(req,res)=>{
    const {name,email,password} =req.body;
     const imgurl = req.file.path
    
   
    try{
        //check exist email

        const checkexist = await User.findOne({email:email});
        if(checkexist){
            return res.status(400).json({message:"User already exist",status:false})
        }
        else{
            
           
            const hash = bcrypt.hashSync(password, salt);
            const newuser = new User({
                userName:name,
                email:email,
                profileImage:imgurl,
                password:hash
            })

            const savedata = await newuser.save();
            return res.status(201).json({message:"Successfully User Created",status:true,data:newuser.email})
        }

    }catch(err){
        console.log(err);
        return res.status(500).json({error:err.message});
    }
}

export const login = async(req,res)=>{
    const {email,password} = req.body;
  
    try{
        //checkpassword
        const checkemail = await User.findOne({email:email});
        if(checkemail){
            const checkpass = bcrypt.compareSync(password,checkemail.password);
            if(checkpass){
                const token = jwt.sign({suid:checkemail._id},process.env.SECRET_KEY,{expiresIn:'5m'})
                const refreshtoken = jwt.sign({suid:checkemail._id},process.env.REFRESH_SECRET_KEY,{expiresIn:'30d'})
                checkemail.refreshtoken = refreshtoken;

                await checkemail.save();
                res.cookie("refreshtoken",refreshtoken,{
                    httpOnly:true,
                    secure:true,
                    sameSite:"none",
                    path:"/",
                    maxAge:30*24*60*60*1000
                });
                return res.status(200).json({message:"User Successfully login",status:true,data:checkemail.email,token:token})
            }
            else{
                return res.status(403).json({message:"Invalid credentials",status:false})
            }
        
        }
        else{
            return res.status(403).json({message:"Credentials Not found",status:false})
        }

    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error",status:false})
    }
}