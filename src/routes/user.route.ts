import {Router} from "express";
import { updateUser, userCreateHandler, userLoginHandler } from "../controller/user.conroller";
import { requiresUser, validateRequest } from "../middleware";
import { userCreateSchema,userAuthSchema, userAddressSchema } from "../schema/user.schema";

export default function(){
    const router = Router();
    // create a user
    router.post("/api/user/create",validateRequest(userCreateSchema),userCreateHandler);
    // auth a user
    router.post("/api/user/login",validateRequest(userAuthSchema),userLoginHandler);
    // add address to user
    router.patch("/api/user/address",[validateRequest(userAddressSchema),requiresUser],updateUser);
    return router;
}