import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();


//dealing with the cross origin
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
//to parse the incoming json data
app.use(express.json({limit : "16kb"}))
//to parse the incoming url data
app.use(express.urlencoded({extended: true}));

//to use the static assest in the project
app.use(express.static('public'));

//to perfrom crud on the cookies
app.use(cookieParser());

export default app;