import React from 'react'
import image from '../assets/space.jpg'
import { FaArrowRight } from "react-icons/fa6";

function Card( {tag, heading, text}) {
  return (
    <>
        <div className='w-[300px] bg-white rounded-lg mt-3 pb-4 ml-3 flex flex-col gap-3 '>
            <div className='w-[100%]'>
                <img src={image} alt="" className='rounded-t-lg'/>
            </div>
            <div >
                <span className='text-green-400 pl-2 pr-2 rounded-lg border-2 border-green-200  bg-green-100 ml-3'>{tag}</span>
            </div>
            <div>
                <span className='ml-3  text-[18px] font-medium'>{heading}</span>
            </div>
            <div>
                <p className='ml-3 text-gray-600 text-[16px]'>{text}</p>
            </div>
            <div>
                <span className='ml-3 text-blue-500'>Read more <FaArrowRight className='inline'/> </span> 
            </div>
        </div>
    
    </>
  )
}

export default Card