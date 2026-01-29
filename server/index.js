import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001 
const databaseUrl = process.env.DATABASE_URL
app.use(cors());
app.use(cookieParser());
app.use(express.json());
const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

mongoose.connect(databaseUrl).then(()=> console.log("Connected to MongoDB")) 
      .catch((err)=> console.log(err));

