// here controller every thing like the reques and response 

export class UserController{
    constructor(userService){
        this.userService =userService;
    }
    register = async(req,res)=>{
        const user = await this.userService.registeruser(req.body);
        return res.status(201).json({success:true,data:user})
    };
    loginUser = async(req,res)=>{
        const user = await this.userService.loginuser(req.body);
        return res.status(200).json({success:true,data:user})
    }
    getallUsers = async(req,res)=>{
        const user = await this.userService.getalluser();
        return res.status(200).json({success:true,data:user})
    }
}