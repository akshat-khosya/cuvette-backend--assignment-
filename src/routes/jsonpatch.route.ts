import {Router} from "express";
import { jsonPatchHandler } from "../controller/jsonpatch.controller";
import { requiresUser, validateRequest } from "../middleware";
import { jsonpatchSchema } from "../schema/jsonpatch.schema";


export default function(){
    const router = Router();
    // json patch
    router.post("/api/json/patch",[validateRequest(jsonpatchSchema),requiresUser],jsonPatchHandler);
    return router;
}