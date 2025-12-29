import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userapi = createApi({
    reducerPath:'userapi',
    baseQuery:fetchBaseQuery({ baseUrl:'http://localhost:3000/api',credentials: "include"}),
    endpoints:(builder)=>({
        signUp:builder.mutation({
            query:(newuser)=>({
                url:'/register',
                method:"POST",
                body:newuser,

            })
        }),
        loginUser:builder.mutation({
            query:(newuser)=>({
                url:'/login',
                method:'POST',
                body:newuser

            })
        }),
        getToken:builder.query({
            query:()=>({
                url:'/refreshtoken'
            })
        }),
        logoutUser:builder.mutation({
            query:()=>({
                url:'/logout',
                method:'POST',
                
            })
        })
    
    })
})
export const { useSignUpMutation , useLoginUserMutation , useGetTokenQuery, useLogoutUserMutation } = userapi;