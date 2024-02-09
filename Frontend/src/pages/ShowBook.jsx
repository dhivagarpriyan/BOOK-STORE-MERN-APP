import React from 'react'
import BackButton from '../components/BackButton'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';


const ShowBook = () => {
  const[books,setBooks]=useState({});
  const[loadind,setLoading]=useState(false);
  const {id}=useParams();
  useEffect(()=>{
      setLoading(true)
      axios.get(`https://book-store-mern-app-tau.vercel.app/books/${id}`)
      .then((res)=>{
        setBooks(res.data)
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error)
        setLoading(false)
      })

  },[])
  return (
    <div className=' p-4'>

      <BackButton  />
      <p className=' font-bold text-center pt-4'>BOOK DETAILS</p>
      {loadind?(
        <Spinner 
          
        />
      ):(
        <div className=' flex flex-col w-[300px] md:w-[600px] border border-black mx-auto mt-4 rounded-md h-fit p-2'>
            <div className='p-4 mx-auto flex justify-between'>
              <span className=' text-xl font-semibold'>ID</span>
              <span className=' ml-4 font-medium'>{books._id}</span>
            </div>

            <div className='p-4 mx-auto flex justify-between '>
            
              <span className=' text-xl font-semibold'>TITTLE</span>
              <span className=' ml-4 font-medium'>{books.tittle}</span>
            </div>

            <div className='p-4 mx-auto flex justify-between'>
              <span className=' text-xl font-semibold'>AUTHOR</span>
              <span className=' ml-4 font-medium'>{books.author}</span>
            </div>
           
            <div className='p-4 mx-auto flex justify-between'>
              <span className=' text-xl font-semibold'>PUBLISH YEAR</span>
              <span className=' ml-4 font-medium'>{books.PublishYear}</span>
            </div>

            <div className='p-4 mx-auto flex justify-between'>
              <span className=' text-xl font-semibold'>CREATE TIME</span>
              <span className=' ml-4 font-medium'>{ new Date(books.createdAt).toString()}</span>
            </div>
           
            <div className='p-4 mx-auto flex justify-between '>
              <span className=' text-xl font-semibold'>UPDATED TIME</span>
              <span className=' ml-4 font-medium'>{new Date(books.updatedAt).toString()}</span>
            </div>
           

           
        </div>
      )}
    </div>
  )
}

export default ShowBook
