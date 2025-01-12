import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRoute from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Configurando o app
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db conecxao
connectDB();

// api endpoints
app.use("/api/food" , foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRoute)
app.use("/api/order",orderRouter)

app.get("/", (req, res)=>{
    res.send("API Working");
});

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://LuizMoura:PfEC44SPaIJDXheS@cluster0.8zsop.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0
