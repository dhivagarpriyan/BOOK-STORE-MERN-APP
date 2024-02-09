import React from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const CreateBook = () => {
  const[loading,setLoading]=useState(false);
  const[tittle,setTittle]=useState("");
  const[author,setAuthor]=useState("");
  const[PublishYear,setPublishYear]=useState("");
  const navigate=useNavigate();
  
  const HandleCreateBook=(e)=>{
    e.preventDefault();
    const data={
      tittle,
      author,
      PublishYear
    };
    setLoading(true)
    axios.post("https://book-store-mern-app-tau.vercel.app/books",data)
    .then(()=>{
      setLoading(false);
      navigate("/");
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })

  }

  return (
    <div className='p-4'>
      <BackButton />
      <p className=' font-bold text-center pt-8'>CREATE BOOK</p>
      {loading?(<Spinner/>):""}
      <div className=' flex flex-col  border-2 border-black w-[300px] md:w-[600px] mx-auto p-8 mt-4 h-fit'>
        <form onSubmit={HandleCreateBook}>
         <div className=' my-4'>
          <label className=' font-semibold'>TITTLE</label>
          <input 
            type='text'
            value={tittle}
            onChange={(e)=>setTittle(e.target.value)}
            className=' border-2 border-black w-full rounded-md'
          />
          </div>
          <div className=' my-4'>
          <label className=' font-semibold'>AUTHOR</label>
          <input 
            text="text"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            className=' border-2 border-black w-full rounded-md'
          />
          </div>
          <div className=' my-4'>
          <label className=' font-semibold'>PUBLISHYEAR</label>
          <input 
           type='number'
            value={PublishYear}
            onChange={(e)=>setPublishYear(e.target.value)}
            className=' border-2 border-black w-full rounded-md'
          />
          </div>
          <button type="submit" className=' flex mx-auto font-medium text-white bg-gradient-to-l from-blue-600 to-cyan-500 p-2 rounded-md  '>
            CREATE
          </button>
        </form> 
        
        
      </div>
    </div>
     
  )
}

export default CreateBook
