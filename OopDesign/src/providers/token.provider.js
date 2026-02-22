import jwt from 'jsonwebtoken'
let JWT_SECRET="jskdjfkjsdfjksd"
export class tokenProvider{
     generateToken(payload){
        return jwt.sign(payload,JWT_SECRET,{expiresIn:"1h"})
    }
     verifyToken(token){
        return jwt.verify(token,JWT_SECRET)
    }
}