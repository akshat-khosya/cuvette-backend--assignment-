import { Request, Response } from "express";
import log from "../lib/logger";
import { findOneUser, updateUserQuery } from "../repo/user.repo";
import { createUserService, createUserTokenService, userValidationService } from "../service/user.service";

const userCreateHandler = async (req: Request, res: Response) => {
    log.info(req.body);
    // check already existing student
    const userCheck = await findOneUser({ username: req.body.username});
    if (userCheck) {
        return res.status(400).json({ msg: "User already exists" });
    }
    // create student
    const user = await createUserService(req.body);
    return res.status(200).json({msg:"Student Created"});
};

const userLoginHandler = async (req: Request, res: Response)=>{
    // validating Password
    const user = await userValidationService({username:req.body.username,password:req.body.password});
    if(!user){
        return res.status(401).json({msg:"Invalid Email or Password"});
    }

    // create token
    const token = createUserTokenService(user);
    return res.status(200).json({token:token,msg:"Login Successfull"}); 
}

const updateUser = async (req:Request,res:Response)=>{
    await updateUserQuery({username:req.user},req.body)
    res.status(200).json({msg:"updated successfully"});
}

export { userCreateHandler,userLoginHandler,updateUser };