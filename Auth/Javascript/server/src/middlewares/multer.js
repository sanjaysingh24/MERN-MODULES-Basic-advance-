import multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";


const storage =new CloudinaryStorage({
    cloudinary,
    params:{
        folders:"users",
        allowed_formats:["jpg","png","jpeg","webp","svg"],
    },
});

export const upload= multer({storage});