import express from "express"
const router = express.Router()
import bookStore from "../models/BookModel.js";

// To create a book
router.post("/", async(req,res)=>{
    try{
    
        const {tittle,author,PublishYear}=req.body;

       const book= await bookStore.create({tittle,author,PublishYear});
      return  res.status(200).send(book);
       console.log(book)
      
    }catch(error){
        res.status(500).send({message:error.message});
    }
})

// To find all the books
router.get("/", async (req,res)=>{
    
    try{

        const bookdata= await bookStore.find({});
        return res.status(200).json({
         count:bookdata.length,
         data:bookdata
    })
}catch(error){
    res.status(500).send({message:error.message})
}

})

// To find the book by id
router.get("/:id", async (req,res)=>{
    
    try{
        const {id}=req.params
        const bookdata= await bookStore.findById(id);
        return res.status(200).json(bookdata)
}catch(error){
    res.status(500).send({message:error.message})
}

})

//To find the book by id and update
router.put("/:id", async (req,res)=>{
    
    try{
        const {id}=req.params
        const result= await bookStore.findByIdAndUpdate(id,req.body);
        if(!result){
            res.status(404).send("book not found")
        }
        return res.status(200).send("book updated sucessfully")
}catch(error){
    console.log(error.message)
    res.status(500).send({message:error.message})
}

})

//To delete the book
router.delete("/:id", async (req,res)=>{
    
    try{
        const {id}=req.params
        const result= await bookStore.findByIdAndDelete(id,req.body);
        if(!result){
            res.status(404).send("book not found")
        }
        return res.status(200).send("book deleted sucessfully")
}catch(error){
    console.log(error.message)
    res.status(500).send({message:error.message})
}

})

export default router;




//sFYpuZRgMrW1SVVi

