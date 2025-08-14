import React from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/icons/arrorw.png'; 
// import ComingSoonImg from '../assets/icons/comingSoon.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function ComingSoon({ComingSoonImg,text1,text2}) {

    useEffect(() => {
      AOS.init({ duration: 1700, once: true });
    }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center pt-10 px-4">
        
        {/* Illustration */}
        <img
          src={ComingSoonImg}
          alt="Coming Soon"
          className="w-56 sm:w-72 lg:w-96 h-auto mb-6"
          loading="lazy"
        />

        {/* Heading */}
        <h1  className="font-cabin font-bold text-3xl sm:text-5xl text-[#0F2B59] leading-tight mb-3">
         <span data-aos="fade-right" data-aos-duration="1000"  className='text-red-800'>{text1}</span> <span data-aos="fade-right" data-aos-duration="5000">{text2}</span>
        </h1>

        {/* Subtext
        <p className="font-saira text-gray-600 text-lg max-w-xl mb-6">
          We’re working hard to bring you something amazing. Stay tuned for updates!
        </p> */}

        {/* Back to Home Button
        <Link to="/">
          <button className="cabin group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-4 rounded-full transition-colors duration-300">
            Back to Home
            <img
              src={arrowIcon}
              alt="Arrow"
              className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45"
            />
          </button>
        </Link> */}

      </div>
    </>
  );
}

export default ComingSoon;
