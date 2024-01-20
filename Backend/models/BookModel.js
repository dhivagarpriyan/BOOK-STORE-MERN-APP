import mongoose from "mongoose";

const BookSchema= new mongoose.Schema({
    tittle:{
        type:String,
        required:true

    },

     author:{
        type:String,
        required:true

    },

    PublishYear:{
        type:Number,
        required:true

    },
})

const bookStore= mongoose.model("bookStore",BookSchema);

export  default bookStore