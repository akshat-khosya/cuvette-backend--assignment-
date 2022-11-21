import { Request,Response } from "express"
import config from "../lib/config/default";
import { downloadImage, reszieImage } from "../service/thumbnail.service";



const genrateThumnailHandler = async (req:Request,res:Response)=>{
    const {filename,filePath} = await downloadImage(req.body.url);
    const newImage = await reszieImage(filePath,filename);
    if(!newImage){
        return res.status(500).json({message:"Something went wrong"});
    }
    return res.sendFile(newImage);
}

export {genrateThumnailHandler};