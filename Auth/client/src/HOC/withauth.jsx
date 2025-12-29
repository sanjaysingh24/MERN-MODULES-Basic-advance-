import React from "react";
import {Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";
export const withauth = (WrappedComponent)=>{
    return (props)=>{
        const islogin = useSelector((state)=>state.authuser.isLogin);
        console.log(islogin);
        if(islogin){
           return <Navigate to ="/dashboard" replace/>
         }
         return <WrappedComponent {...props}/>
    }
}