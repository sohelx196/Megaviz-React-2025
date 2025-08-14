import React from 'react'
import { Link } from 'react-router-dom'
import arrowIcon from '../assets/icons/arrorw.png';
import NotFoundImg from '../assets/icons/NotFound.png';

export default function PageNotFound() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center text-center">
        
        {/* Small image at top */}
        <img 
          src={NotFoundImg} 
          alt="Page Not Found" 
          className="w-48 h-auto mb-4" 
        />

        <p className="font-saira text-xl sm:text-2xl text-red-600">
          Oops! <span className='text-blue-950'>Page not found.</span> 
        </p>

        <Link to="/">
          <button className="mt-6 cabin group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-2 lg:px-5 lg:py-3 rounded-full transition-colors duration-300">
            Go to Home
            <img
              src={arrowIcon}
              alt="Arrow"
              className="w-2 h-2 lg:w-3 lg:h-3 transition-transform duration-300 group-hover:rotate-45"
            />
          </button>
        </Link>
      </div>   
    </>
  )
}
