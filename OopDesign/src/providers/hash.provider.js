import bcrypt from 'bcrypt';

export class hashProvider{
    async hashPassword(password){
        return await bcrypt.hash(password,10)
    }
    async comparePassword(password,hash){
        return await bcrypt.compare(password,hash)  
    }
}