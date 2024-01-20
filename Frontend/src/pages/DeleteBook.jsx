import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DeleteBook = () => {
const {id}=useParams();
const navigate=useNavigate();
const[loading,setLoading]=useState(false)

const HandleDeleteBook=()=>{
   setLoading(true)
   axios.delete(`http://localhost:4000/books/${id}`)
   .then(()=>{
    setLoading(false)
    navigate("/")
   })
   .catch((error)=>{
    setLoading(false)
    console.log(error)
   })
}
  return (
    <div className='p-4'>
       <BackButton />
      <p className=' font-bold text-center pt-24'>DELETE BOOK</p>
      {loading?(<Spinner/>):""}
      <div className=' flex flex-col border-2 border-black w-[300px] md:w-[600px] mx-auto p-8 mt-4 h-fit'>
       <p className=' font-medium text-center'>ARE YOU SURE DO YOU WANT TO DELETE IT</p>
        
        <button type="submit" className=' flex mx-auto font-medium text-white  bg-red-600 p-2 rounded-md mt-2' onClick={HandleDeleteBook}>
            DELETE
          </button>
        </div>
       </div>
  )
}

export default DeleteBook