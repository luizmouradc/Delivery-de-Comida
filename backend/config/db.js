import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://LuizMoura:PfEC44SPaIJDXheS@cluster0.8zsop.mongodb.net/food-del').then(()=> console.log("DB Conectado"))
}
 