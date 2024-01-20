import express from "express";
const PORT=process.env.PORT || 4000;
const app = express();
import mongoose, { get } from "mongoose";
import { MONGO_URL } from "./config.js";
import router from "./Router/bookRouter.js"; 
import cors from "cors";

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log(MONGO_URL)
    app.listen(PORT,()=>{
        console.log(`App listening on port ${PORT}`)
    }) 
})
.catch((error)=>{
    console.log(error)
})

// middleware to parse data to json
app.use(express.json());

// middleware for cross-origin request
app.use(cors());

// custom middleware for cors
/*app.use(cors({
    origin:"http://localhost:4000/",
    methods:["GET","POST","DELETE"],
    allowedHeaders:["content-type"]
}))*/

app.get("/test",(req,res)=>{
    res.json("passed")
})

app.use("/books",router)