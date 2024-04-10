import mongoose from 'mongoose';
import app from "./../app.js";

const MONGO_URI = app.get("mongo_uri");

export async function connectDB() {
    try {
        // mongoose.set('strictQuery', false)
        await mongoose.connect(MONGO_URI) 
        console.log('Mongo esta funcionando')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
}