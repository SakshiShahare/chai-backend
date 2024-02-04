import dotenv from "dotenv";
import express from 'express';
import connectDB from "./db/connect.js";
import app from "./app.js";

dotenv.config();
const port = process.env.PORT || 3000;

try {
    await connectDB();
    app.listen(port , ()=>{
        console.log("Server is listening on port" , port);
    })
} catch (error) {
    console.log(error);
}