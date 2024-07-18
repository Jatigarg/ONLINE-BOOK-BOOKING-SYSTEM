import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import  cors  from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import emailRoute from "./route/email.route.js"

const app = express()
app.use(cors())
app.use(express.json()) 

dotenv.config();

const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI

// CONECT TO MONGO DB

try {
    mongoose.connect(MongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("connected")
} catch (error) {
    console.log("Error:", error)
}

// Define route

app.use("/book", bookRoute)
app.use("/users",userRoute)
app.use("/email",emailRoute)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})