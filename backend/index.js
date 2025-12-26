import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Server is ready");
    
})

app.use("/api/products", productRoutes)

console.log(process.env.MONGO_URL)

app.listen(3000, ( ) =>{
    connectDB();
    console.log("Server started at http://localhost:3000  ");
});
