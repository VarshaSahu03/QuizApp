import dotenv from 'dotenv';
dotenv.config();

import express from "express";
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());

import userRoutes from "./routes/UserDataRoute.js";

import cors from "cors";
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // You may need this if you are using cookies or authentication
}));

import connectDB from "./config/connectdb.js"; 
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

const port = 8000;

app.use("/api/user", userRoutes);
0
app.listen(port, ()=>{
console.log(`server is running on port:${port}`)
});