import express from "express";
import cors from "cors";
import { deserializeUser } from "../middleware";

function createServer() {
    const app = express();

    const options: cors.CorsOptions = {
        origin: "*"
    };

    app.use(cors(options));

    app.use(express.json());

    app.use(express.urlencoded({ extended: false }));

    app.use(deserializeUser);

    app.use(express.static("public"));

    app.use('/images',express.static("../../images"));

    return app;
}

export default createServer;