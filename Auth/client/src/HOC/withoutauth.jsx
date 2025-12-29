import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const withoutauth = (Wrappedcomponent)=>{
    return (props)=>{
        const islogin=useSelector((state)=>state.authuser.isLogin);

        if(!islogin){
            return <Navigate to = "/login" replace/>
        }
        return <Wrappedcomponent {...props}/>
    }
}