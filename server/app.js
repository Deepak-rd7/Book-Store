import express from "express";
import mongoose from "mongoose";
import router from "./routes/bookroutes.js";
import cors from "cors";
const app=express();
const port=3000;
app.use(cors());

mongoose.connect("mongodb://localhost:27017/bookStore").then(()=>{
    console.log("DB Connected");
}).catch(()=>{
    console.log("DB connection Error");
})

//Middlewares
app.use(express.json());
app.use("/books",router);





app.listen(port ,()=>{
    console.log(`Server is running on ${port}`);
})