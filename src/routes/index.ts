import { Express } from "express";
import jsonpathcRoute from "./jsonpatch.route";
import thumbnailRoute from "./thumbnail.route";
import userRoute from "./user.route";

export default function (app: Express) {
    app.use(userRoute());
    app.use(thumbnailRoute());
    app.use(jsonpathcRoute());
}