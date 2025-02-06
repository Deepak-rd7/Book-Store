import mongoose from "mongoose";
import { type } from "os";

const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    available:{
        type:Boolean,
        
    },
    image:{
        type:String,
        required:true
    }
});

const bookModel=mongoose.model("Book",bookSchema);

export default bookModel;

