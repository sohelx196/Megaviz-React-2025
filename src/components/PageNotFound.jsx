import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
         <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center">
            <h1 className='text-6xl mb-5'>😕</h1>
      {/* <h1 className="text-5xl font-bold mb-4">404</h1> */}
      <p className="font-saira text-2xl text-gray-600">Oops! Page not found.</p>

      <Link to="/">
        <button   className=" mt-6 px-4 py-2 border hover:bg-white hover:text-black border-gray-600 text-gray-800 rounded  transition-all">Go to Home</button>
      </Link>

    </div>  
    </>
  )
}
