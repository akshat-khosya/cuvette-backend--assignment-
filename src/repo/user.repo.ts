import { query } from "express";
import { Document, Types } from "mongoose";
import log from "../lib/logger";
import { User } from "../model/user.model";
import { IUser } from "../model/user.model";
const findOneUser = async (query: Object) => {
    return await User.findOne(query);
}
const createUser = async (query: Object) => {
    try {
        const user = await User.create(query);
        return user;
    } catch (error) {
        throw new Error((error as Error).message);
    }

}
const userValidateQuery = async (input: {
    user: (Document<unknown, any, IUser> & IUser & {
        _id: Types.ObjectId;
    }), password: string
}) => {
    return await input.user.comparePassword(input.password);
}
const updateUserQuery = async (query:Object,update:Object)=>{
    log.info(query);
    log.info(update)
    try {
        const updatedUser = await User.updateOne(query,{
            $set:update
        });
        return updatedUser
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
export { findOneUser, createUser,userValidateQuery,updateUserQuery };