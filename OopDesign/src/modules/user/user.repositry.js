
// main data query only 
import { User } from "./user.models.js";

export class userRepositry{
    async createuser(user){
        const saveuser = await User.create(user)
        saveuser.password = undefined;
        return saveuser

    }
    async getuserbyEmail(email){
        return await User.findOne({email:email})
    }
    async getalluser(){
        return await User.find({})
    }
}