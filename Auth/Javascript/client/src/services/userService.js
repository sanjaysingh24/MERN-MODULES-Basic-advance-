
import axiosInstance from "./axiosInstance";



export const userSignup = async(data)=>{

    try{
        const response = await axiosInstance.post('/register',data);
        return response.data;
    }catch(err){
        return err.response.data;
       
    }

}