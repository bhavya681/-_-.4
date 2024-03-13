import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectToDb from './db/dbConnect.js';
import auth from "./routes/auth.js";

const app=express();
app.use(express.json());
app.use(cors());

connectToDb();

const port=process.env.MONGO_PORT || 4000;

app.use("/api/v1/auth",auth);

app.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}`);
})