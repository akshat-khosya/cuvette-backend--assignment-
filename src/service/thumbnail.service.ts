import { existsSync, mkdir, mkdirSync, writeFile, writeFileSync } from "fs";
import path,{ join } from "path";
import log from "../lib/logger";
import sharp from "sharp";


const downloadImage = async (url:string)=>{
    const filename = url.split("/").pop() as string;


    const folderPath = path.resolve(__dirname,"../../images");
    if(!existsSync(folderPath)){
        mkdirSync(folderPath);
    }
    const filePath = join(folderPath,filename);
    
    const response = await fetch(url);
    const blob = await response.blob();
    const bos = Buffer.from(await blob.arrayBuffer());

    writeFileSync(filePath,bos);
    return {filename,filePath};
}

const reszieImage = async (filePath:string,filename:string)=>{
    const image = sharp(filePath);
    const folderPath = path.resolve(__dirname,"../../images");
    const thumbnailPath = join(folderPath,`thumnail${filename}`);
    log.info(thumbnailPath);
    try {
        let res= await image.resize(50,50).toFile(thumbnailPath);
        return thumbnailPath;
    } catch (error) {
        log.error(error);
        return false;
    }
    
}

export {downloadImage,reszieImage};