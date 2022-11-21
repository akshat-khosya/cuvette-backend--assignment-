import {Router} from "express";
import { genrateThumnailHandler } from "../controller/thumbnail.controller";
import { requiresUser, validateRequest } from "../middleware";
import { thumbnailGenratorSchema } from "../schema/thumbnail.schema";

export default function(){
    const router = Router();
    // genrate thumnail
    router.post("/api/thumnail/genrate",[validateRequest(thumbnailGenratorSchema),requiresUser],genrateThumnailHandler);
    return router;
}