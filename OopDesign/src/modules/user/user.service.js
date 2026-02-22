//HERE ALL THE BUSINESS LOGIC WILL BE HANDLED like  we define inside the controllers

export class userService{
    constructor(userRepositry,hashProvider,tokenProvider){
        this.userRepositry = userRepositry;
        this.hashProvider = hashProvider;
        this.tokenProvider = tokenProvider;
    }
    async registeruser(data){
        const {email,password} = data;
        const exitinguser = await this.userRepositry.getuserbyEmail(email);
        if(exitinguser){
           return {message:"user already exists"}
        }
        const hashPassword = await this.hashProvider.hashPassword(password)
        
        const user = await this.userRepositry.createuser({...data,password:hashPassword});
        return {message:"user created successfully",data:user};
    }
    async getalluser(){
        return await this.userRepositry.getalluser();
    }
}