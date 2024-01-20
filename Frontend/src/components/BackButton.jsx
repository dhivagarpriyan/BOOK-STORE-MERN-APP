import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackButton = ({destination="/"}) => {
  return (
    <div className=' flex justify-start items-center'>
        <Link to={destination} className=' w-fit border  bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-2 py-1 rounded-md cursor-pointer'>
             <BsArrowLeft  size={25}
              className=' font-bold'
             />
        </Link>

    </div>
  )
}

export default BackButton