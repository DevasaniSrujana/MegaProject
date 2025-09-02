import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path:"./env"
})

connectDB()







// // databese connection first approach
// import mongoose from "mongoose"
// import express from "express"
// import { DB_NAME } from "./constants.js";



// const app=express()
// ;(async ()=>{
//     try{
//       const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       console.log(`\n MongoDB connected at Host: ${connectionInstance.connection.host}`)
//       app.on("error",(error)=>{
//         console.log("Error: ",error)
//         throw error
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`App is listening at port : ${process.env.PORT}`)
//       })
//     }
    // catch(err){
    //     console.log("Mongo Db Connection failed",err)
    //     throw err
    // }
// })()

