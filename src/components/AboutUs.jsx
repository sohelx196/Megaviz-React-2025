import React from 'react'
import { Link } from 'react-router-dom';

import studentImg from "../assets/images/AboutUs/student.png";
import arrowIcon from "../assets/icons/arrorw.png";
import starIcon from "../assets/icons/newStar.png";
import personImg from "../assets/images/AboutUs/person1.png";



import mobileAppDev from "../assets/images/AboutUs/mobileAppDev.png";
import websiteDesign from "../assets/images/AboutUs/websiteDesign.jpg";
import websiteDevelopment from "../assets/images/AboutUs/websiteDevelopment.png";


import projectFinish from "../assets/images/AboutUs/projectFinish1.png";
import cardIcon from "../assets/images/AboutUs/cardImg.png";
import howWeWork from "../assets/images/AboutUs/howWeWork.png";
import playIcon from "../assets/images/AboutUs/playIcon.png";


import ourVision from "../assets/images/AboutUs/ourVision.png";
import ourMission from "../assets/images/AboutUs/ourMission.png";
import Testimonials from './Testimonials';


function AboutUs() {
  return (
    <>

     {/* Welcome to megaviz start */}
     <section className="my-7">
      <div className="text-center px-4 py-10 md:py-20">
        <h1 className="font-cabin text-[#102E52] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
          Welcome To <span className="text-[#C72C28]">MegaViz</span>
        </h1>
        <p className="font-cabin text-[#696969] mt-4 max-w-3xl mx-auto text-sm sm:text-base">
          MegaViz helps enterprises to assess their current IT Infrastructure and evaluates whether an upgrade is required to justify their business needs.
        </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
      <Link to="/contactUs">
        <button className="font-cabin group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-3 sm:py-4 rounded-full transition-colors duration-300">
          Contact Us
          <img
            src={arrowIcon}
            alt="Arrow"
            className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45"  loading="lazy"    />
        </button>
      </Link>
    </div>

      </div>

      <div className="relative hidden sm:flex justify-center items-center px-4 md:px-0">
        <div className="absolute -top-6 left-[30%] flex space-x-3 z-10">
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
        </div>

        <div className="absolute -bottom-6 left-[35%] flex space-x-3 z-10">
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
        </div>

        <div className="hidden lg:block absolute w-6 h-6 top-1/3 left-[18%] -translate-y-1/2 rounded-full shadow-[0px_3px_20px_rgba(0,0,0,0.05)]" style={{ background: "linear-gradient(180deg, #FF8E8E 0%, #F62424 100%)" }}></div>
        <div className="hidden lg:block absolute w-6 h-6 -top-[50%] right-[5%] rounded-full shadow-[0px_3px_20px_rgba(0,0,0,0.05)]" style={{ background: "linear-gradient(180deg, #FF8E8E 0%, #F62424 100%)" }}></div>

        <img src={studentImg} alt="Team Meeting" className="rounded-2xl w-full max-w-3xl object-cover z-10"   loading="lazy"/>

        <div className="quicksand absolute top-6 left-48 bg-white rounded-xl shadow-lg px-4 py-3 w-auto z-20">
          <div className="font-quicksand flex items-center space-x-2 mb-1">
            <img src={starIcon} alt="star icon" className="w-4 h-4"  loading="lazy" />
            <p className=" text-xs text-gray-500 font-semibold">GREAT PROJECT</p>
          </div>
          <p className=" text-lg font-bold leading-snug">1,472 Successful Projects</p>
        </div>

        <div className="absolute bottom-6 right-48 bg-white rounded-xl shadow-lg px-4 py-4 w-60 z-20">
          <div className="flex items-center space-x-2 mb-2">
            <img src={personImg} alt="Bill Adams" className="w-8 h-8 rounded-full"   loading="lazy"/>
            <div className="font-quicksand">
              <p className="text-sm font-semibold">Bill Adams</p>
              <p className="text-xs text-gray-500">CEO Uptech</p>
            </div>
          </div>
          <p className="font-nunito text-sm text-gray-600  leading-tight">
            “ Our team of professional engineers offer innovative solutions for all your IT requirements. We pride ourselves in providing the most cost effective and high performance IT solutions that not only match but surpass our customer's expectations. “
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6 px-4 sm:hidden">
        <div className="quicksand bg-white rounded-xl shadow-lg px-4 py-3 w-full max-w-xs">
          <div className="flex items-center space-x-2 mb-1">
            <img src={starIcon} alt="star icon" className="w-4 h-4"  loading="lazy" />
            <p className="text-xs text-gray-500 font-semibold">GREAT PROJECT</p>
          </div>
          <p className="text-base font-bold leading-snug">1,472 Successful Projects</p>
        </div>

        <div className="flex space-x-2">
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#377DFF] rounded-full"></div>
        </div>

        <img src={studentImg} alt="Team Meeting" className="rounded-2xl w-full max-w-sm object-cover"  loading="lazy" />

        <div className="flex space-x-2">
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
          <div className="w-[5px] h-[5.25px] bg-[#F62424] rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg px-4 py-4 w-full max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <img src={personImg} alt="Bill Adams" className="w-8 h-8 rounded-full"  loading="lazy" />
            <div className="quicksand">
              <p className="text-sm font-semibold">Bill Adams</p>
              <p className="text-xs text-gray-500">CEO Uptech</p>
            </div>
          </div>
          <p className="nunito text-sm text-gray-600 leading-tight">
            “ Our team of professional engineers offer innovative solutions for all your IT requirements. We pride ourselves in providing the most cost effective and high performance IT solutions that not only match but surpass our customer's expectations.“
          </p>
        </div>
      </div>
    </section>
     {/* Welcome to megaviz end */}


{/* our service section start */}

 <section className="py-16 px-4 sm:px-6 lg:px-8 text-center my-7">
      <p className="font-cabin text-[#D72323] text-base font-medium mb-2">Our Service</p>
      <h2 className="font-cabin text-3xl sm:text-5xl font-extrabold text-[#102E52] mb-4">
        What do we do
      </h2>
      <p className="font-cabin text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-12">
        You can give yourself time to concentrate on more important operations that are mission-critical to your organization.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-4">
        {/* Left Card */}
        <div className="hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer cabin relative h-[260px] sm:h-[280px] lg:h-[280px] w-[90%] mx-auto rounded-xl overflow-hidden group flex items-end">
          <img src={mobileAppDev} alt="Mobile app Development" className="w-full h-full object-cover"  loading="lazy" />
          <div className="absolute bottom-4 left-4 text-white text-base md:text-lg font-medium">
            <h2 className="font-cabin">Mobile app Development</h2>
          </div>
        </div>

        {/* Center Card */}
        <div className="hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer cabin relative h-[260px] sm:h-[280px] lg:h-[340px] w-[90%] mx-auto rounded-xl overflow-hidden group flex items-end lg:-translate-y-6 z-10">
          <img src={websiteDesign} alt="Website Design" className="w-full h-full object-cover"  loading="lazy"/>
          <div className="absolute bottom-7 left-4 text-white text-base md:text-lg font-medium">
            <h2 className="font-cabin">Website Design</h2>
          </div>
        </div>

        {/* Right Card */}
        <div className="hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer cabin relative h-[260px] sm:h-[280px] lg:h-[280px] w-[90%] mx-auto rounded-xl overflow-hidden group flex items-end">
          <img src={websiteDevelopment} alt="Website Development" className="w-full h-full object-cover"  loading="lazy" />
          <div className="absolute bottom-4 left-4 text-white text-base md:text-lg font-medium">
            <h2 className="font-cabin">Website Development</h2>
          </div>
        </div>
      </div>

      {/* See All Button */}
      <div className="mt-3">
        <Link to="/services">
          <button className="flex items-center gap-2 mx-auto font-cabin group bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-3 sm:py-4 rounded-full transition-colors duration-300">
            See All
            <img src={arrowIcon} alt="Arrow" className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45"  loading="lazy"/>
          </button>
        </Link>
      </div>

    </section>

{/* our service section end */}



{/*  About Us start */}

 <section className="px-4 py-7 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto space-y-12 bg-[#F9F9F9] px-4 py-12 sm:px-8 sm:py-16 lg:p-20">

        {/* ABOUT US TEXT SECTION */}
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 px-4">
          <h2 className="font-cabin text-2xl sm:text-4xl md:text-5xl font-bold text-[#102E52] whitespace-nowrap w-full sm:w-auto text-center sm:text-left px-4 self-center">
            About Us
          </h2>

          <p className="font-cabin text-base sm:text-lg text-[#878C91] leading-relaxed text-left sm:text-justify lg:text-left max-w-screen-md mx-auto px-4 sm:px-6 lg:px-0">
            Mega Vision Computers Trading LLC is a leading Enterprise IT solutions provider head quartered in Dubai and servicing the IT requirements of companies in UAE and the wider GCC region.
            We offer end to end IT solutions and services ranging from simple supply and installation of basic Hardware / Software / Surveillance / Access Control systems to configuration and maintenance of large Enterprise Servers and Security Firewall networks.
          </p>
        </div>

        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 items-stretch">

          {/* Stat Card */}
          <div className="lg:col-span-2 relative text-white rounded-2xl shadow-lg min-h-[250px] overflow-hidden flex flex-col justify-between p-6 bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src={projectFinish} alt="Background" className="w-full h-full object-cover opacity-3 rotate-[6deg] scale-110"  loading="lazy" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
              <h3 className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-bold leading-tight">
                1,472<span className="text-[#C72C28] text-xl sm:text-2xl md:text-3xl lg:text-6xl font-extrabold">+</span>
              </h3>
              <p className="font-jakarta mt-2 text-xs sm:text-sm md:text-base text-gray-300">
                Project finish with superbly
              </p>
            </div>

            {/* Card Icon */}
            <div className="absolute bottom-4 z-10">
              <img src={cardIcon} alt="Card Icon" className="h-8 sm:h-10 md:h-12 object-contain"  loading="lazy"/>
            </div>
          </div>

          {/* Image Card */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-2xl bg-black">
            {/* Main Image */}
            <div className="aspect-video w-full h-auto">
              <img src={howWeWork} alt="How We Work" className="w-full h-full object-cover block"  loading="lazy" />
            </div>

            {/* Overlay Title */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <h3 className="font-jakarta text-white text-2xl sm:text-4xl font-semibold tracking-widest">
                HOW WE WORK
              </h3>
            </div>

            {/* Play Icon */}
            <img
              src={playIcon}
              alt="Play Icon"
               loading="lazy"
              className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-3 lg:-bottom-1 lg:-right-2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain z-10"
            />
          </div>
        </div>
      </div>
    </section>

{/*  About Us end */}


{/* vision and mission start */}

  <section className="px-4 py-10 sm:py-14 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-5">

        {/* Vision Card */}
        <div className="bg-[#FEEFC1] rounded-xl p-6 sm:p-8 flex flex-col justify-start items-center shadow-md max-w-md mx-auto hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="w-full text-start">
            <h3 className="font-cabin text-2xl sm:text-3xl md:text-4xl font-bold text-[#323131] mb-4">
              Our Vision
            </h3>
            <p className="font-cabin text-[#323131] text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-[1.8rem] max-w-prose ">
              An Individual Character And Arise As A Regarded Programming Arrangements Supplier By Building And Keeping Up
              Durable Connections, Conveying Quality Programming And By Giving Inventive Business Arrangements...
            </p>
          </div>

          <div className="flex justify-center mt-5 sm:mt-6">
            <img src={ourVision} alt="Vision" className="w-full max-w-[320px] sm:max-w-[360px] object-contain"  loading="lazy" />
          </div>
        </div>

        {/* Mission Card */}
        <div className="hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#EBE2F2] rounded-xl p-6 sm:p-8 flex flex-col justify-start items-center shadow-md max-w-md mx-auto">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img src={ourMission} alt="Mission" className="w-full max-w-[320px] sm:max-w-[360px] object-contain"  loading="lazy"/>
          </div>
          <div className="w-full">
            <h3 className="font-cabin text-2xl sm:text-3xl md:text-4xl font-bold text-[#323131] mb-4">
              Our Mission
            </h3>
            <p className="font-cabin text-[#323131] text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-[1.8rem] max-w-prose ">
              To Give Inventive, High Calibre And Top Tier IT Consulting & IT Solutions & Services To Our Clients,
              Empowering Them To Accomplish Their Business Destinations. Partners And Accomplices While Co-Operating.
              Also, To Keep Up And Grow Our Convention Of "Greatness Through Quality".
            </p>
          </div>
        </div>

      </div>
    </section>

{/* vision and mission end */}


{/* Testimonial start  */}
<Testimonials/>
{/* Testimonial end */}



    </>
  )
}

export default AboutUs