import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userapi = createApi({
    reducerPath:'userapi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000/api'}),
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
        })
    
    })
})
export const { useSignUpMutation , useLoginUserMutation } = userapi;