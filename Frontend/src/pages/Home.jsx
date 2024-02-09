import React from 'react'
import Spinner from '../components/Spinner'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from "react-icons/ai"
import { BsInfoCircleFill} from "react-icons/bs"

import {MdOutlineAddBox,MdOutlineDelete} from"react-icons/md"

const Home = () => {
const[books,setBooks]=useState([]);
const[loading,setLoading]=useState(false);
useEffect(()=>{
   setLoading(true);
   axios.get("http://https://book-store-mern-app-tau.vercel.app/books")
   .then((res)=>{
    setBooks(res.data.data)
    setLoading(false);
   })
   .catch((error)=>{
    console.log(error)
    setLoading(false)
   })
},[])
    
  return (
    <div className='p-4'>
        <div className=' flex justify-between items-center mx-8'>
            <h1 className=' text-2xl font-bold'>BOOK LIST</h1>
            <Link to={"/books/create"} className=' text-2xl text-sky-600'>
            <MdOutlineAddBox />
            </Link>
        </div>
         { loading ? (
           <Spinner />
         ):(
           <table className='mt-12 w-full border-separate border-spacing-2'>
            <thead>
                  <tr>
                    <th className=' border border-black rounded-full '>NO</th>
                    <th className=' border border-black rounded-full '>TITTLE</th>
                    
                    <th className=' border border-black rounded-full  max-md:hidden'>AUTHOR</th>
                    <th className=' border border-black rounded-full  max-md:hidden'>PUBLISH YEAR</th>
                    <th className=' border border-black rounded-full   '>OPERTIONS</th>
                    
                  </tr>
            </thead>
            <tbody>
                  {books.map((book,index)=>(
                    <tr key={book._id} className='h-8'>
                      <td className=' text-center font-semibold border border-black rounded-full'>{index+1}</td>
                      <td className=' text-center font-semibold border border-black rounded-full'>{book.tittle}</td>
                      <td className=' text-center font-semibold border border-black rounded-full max-md:hidden'>{book.author}</td>
                      <td className=' text-center font-semibold border border-black rounded-full max-md:hidden'>{book.PublishYear}</td>
                      <td className=' text-center font-semibold border border-black rounded-full'>
                        <div className=' flex justify-center gap-x-2'>
                          <Link to={`/books/details/${book._id}`}>
                             <BsInfoCircleFill className=' text-green-700 text-xl'/>
                          </Link>
                          <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className=' text-yellow-600 text-xl'/>
                          </Link>
                          <Link to={`/books/delete/${book._id}`}>
                            <MdOutlineDelete className=' text-red-600 text-xl'/>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))} 
            </tbody>
           </table>
         )}
    </div>
  )
}

export default Home
