import dotenv from "dotenv";
import express from 'express';
import connectDB from "./db/connect.js";

dotenv.config();

connectDB();
