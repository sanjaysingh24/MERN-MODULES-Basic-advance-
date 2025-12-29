import { createSlice } from "@reduxjs/toolkit";

export const  authslicer = createSlice({
    name:'auth',
    initialState:{
        accessToken:null,
        isLogin:false
    },
    reducers:{
        loginsuccess:(state,action)=>{
            
            state.accessToken=action.payload,
            state.isLogin=true

        },
        logoutuser:(state)=>{
            state.accessToken=null,
            state.isLogin=false
        }
    }
})

export const{loginsuccess, logoutuser} = authslicer.actions
export default authslicer.reducer;