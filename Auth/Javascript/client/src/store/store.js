import { userapi } from "./slice/api";
import { configureStore } from "@reduxjs/toolkit";

export const store =configureStore({
    reducer:{
        [userapi.reducerPath]:userapi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(userapi.middleware)
})