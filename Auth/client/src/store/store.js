import { userapi } from "./slice/api";
import { configureStore } from "@reduxjs/toolkit";
import authreducer  from './slice/authslice'
export const store =configureStore({
    reducer:{
        [userapi.reducerPath]:userapi.reducer,
        authuser:authreducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(userapi.middleware)
})