import React from 'react'

import { Link } from "react-router-dom";

import officeImg from "../assets/images/OurSollution/office1.png";
import clientCardImg from "../assets/images/OurSollution/clientCard.png";



import itConsultancy from "../assets/images/OurSollution/itConsultancy.png";
import cctv from "../assets/images/OurSollution/cctv.png";
import infraCloud from "../assets/images/OurSollution/infra&cloud.png";
import cyberSecurity from "../assets/images/OurSollution/cyberSecurity.png";
import backupSolution from "../assets/images/OurSollution/backupSollution.png";
import telephony from "../assets/images/OurSollution/telephony.png";
import itSupport from "../assets/images/OurSollution/itSupport.png";
import systemMonitoring from "../assets/images/OurSollution/systemMonitering.png";

function Services() {
  return (
    <>
  
      {/* megaviz service start */}

  <section className="text-center px-6 md:px-20 py-12">
        <h2 className="font-cabin text-red-600 font-semibold text-base md:text-lg lg:text-xl mb-2">
          MegaViz Services
        </h2>
        <h1 className="font-cabin text-4xl md:text-5xl font-bold text-[#102E52] leading-tight">
          <span className="block">We're passionate about helping other</span>
          <span className="block">
            businesses <span className="text-[#C72C28]">succeed</span>
          </span>
        </h1>
        <p className="font-cabin mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          Technology can solve a lot of today’s business problems. Any business owner
          knows that your business is only as good as the tools and the people it employs.
          That means you need the right solutions for your unique business needs, so your
          people can perform their job duties at maximum efficiency. Our solutions are
          designed to provide our customers with a solution as their IT department or to
          supplement their existing IT department.
        </p>
      </section>

      {/* Image Section */}
      <section className="relative px-4 md:px-20 py-14">
        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-screen-xl">
            {/* Main Background Image */}
            <img
              src={officeImg}
              alt="Office Scene"
              className="rounded-2xl object-cover w-full h-auto"
            />

            {/* Overlay Card */}
            <div
              className="absolute w-[90px] sm:w-[110px] md:w-[130px] lg:w-[230px] xl:w-[310px]
                         top-[23%] left-[13%] -translate-x-1/2 -translate-y-1/2">
              <img
                src={clientCardImg}
                alt="Client Card"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    
      
      {/* megaviz service end */}





{/* Innovative It solution start */}

 <section className="my-14 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <div className="py-6">
          <p className="font-cabin text-[#E21F36] font-semibold text-base md:text-lg lg:text-xl">
            Innovative IT Solutions
          </p>
          <h1 className="font-cabin text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mt-2 text-[#0C0C0C] leading-tight">
            <span>Start your amazing IT</span>
            <span className="block mt-2 sm:mt-3">Experience with Us.</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:w-[300px] w-full">
          <Link
            to="/itConsultancy"
            className="relative hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#FEE6DC] rounded-2xl p-4 shadow-md flex flex-col items-center text-center h-full"
          >
            <img src={itConsultancy} alt="IT Consultancy" className="mb-3 w-40 h-40 z-20" />
            <h2 className="font-poppins text-lg font-semibold mb-2 z-20">IT Consultancy</h2>
            <p className="font-poppins text-xs z-20">
              MegaViz’s architectural approach to UC&C transforms your communication culture with integrated platforms.
            </p>
          </Link>

          <Link
            to="/solutions/cctv"
            className="relative hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#DFF7EA] rounded-2xl p-4 shadow-md flex flex-col items-center text-center h-full"
          >
            <img src={cctv} alt="CCTV Surveillance" className="mb-3 w-40 h-40 z-20" />
            <h2 className="font-poppins text-lg font-semibold mb-2 z-20">CCTV Surveillance</h2>
            <p className="font-poppins text-xs z-20">
              Secure your branches efficiently with intelligent CCTV technology and reduce guarding costs.
            </p>
          </Link>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          <Link
            to="/infrastructure"
            className="relative hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#FEEFC1] rounded-2xl p-6 shadow-md h-[260px] flex items-center gap-6"
          >
            <img src={infraCloud} alt="Infrastructure & Cloud" className="w-32 h-32 flex-shrink-0 z-20" />
            <div className="flex flex-col justify-center z-20 text-center">
              <h2 className="font-poppins text-lg font-semibold mb-2">Infrastructure & Cloud</h2>
              <p className="font-poppins text-xs">
                We help clients design and operate real-time networking, wireless, and infrastructures.
              </p>
            </div>
          </Link>

          <Link
            to="/cyberSecurity"
            className="relative hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#DFF7EA] rounded-2xl p-6 shadow-md h-[260px] flex items-center gap-6"
          >
            <img src={cyberSecurity} alt="Cyber Security" className="w-32 h-32 flex-shrink-0 z-20" />
            <div className="flex flex-col justify-center z-20 text-center">
              <h2 className="font-poppins text-lg font-semibold mb-2">Cyber Security Solutions</h2>
              <p className="font-poppins text-xs">
                Leverage decades of cybersecurity experience from MegaViz’s elite professionals.
              </p>
            </div>
          </Link>

          <Link
            to="/solutions/backup"
            className="relative hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#EBE2F2] rounded-2xl p-6 shadow-md h-[260px] flex items-center gap-6"
          >
            <img src={backupSolution} alt="Backup Solutions" className="w-32 h-32 flex-shrink-0 z-20" />
            <div className="flex flex-col justify-center z-20 text-center">
              <h2 className="font-poppins text-lg font-semibold mb-2">Backup Solutions</h2>
              <p className="font-poppins text-xs">
                Best-in-class backup platforms combining hardware, software, and expert services.
              </p>
            </div>
          </Link>

          <Link
            to="/solutions/telephony"
            className="relative hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#FEE6DC] rounded-2xl p-6 shadow-md h-[260px] flex flex-col items-center justify-center text-center"
          >
            <img src={telephony} alt="Telephony" className="w-24 h-24 mb-4 z-20" />
            <h2 className="font-poppins text-lg font-semibold mb-2 z-20">Telephony</h2>
            <p className="font-poppins text-xs px-2 z-20">
              Proven telecom expertise delivering top-tier communication solutions across UAE.
            </p>
          </Link>

          <Link
            to="/solutions/it-support"
            className="relative hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#FEEFC1] rounded-2xl p-6 shadow-md h-[260px] flex items-center gap-6"
          >
            <img src={itSupport} alt="IT Support" className="w-32 h-32 flex-shrink-0 z-20" />
            <div className="flex flex-col justify-center z-20 text-center">
              <h2 className="font-poppins text-lg font-semibold mb-2">IT Support</h2>
              <p className="font-poppins text-xs">
                Perfect for growing businesses—get essential IT support with service-level guarantees.
              </p>
            </div>
          </Link>

          <Link
            to="/solutions/system-monitoring"
            className="relative hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer bg-[#EBE2F2] rounded-2xl p-6 shadow-md h-[260px] flex items-center gap-6"
          >
            <img src={systemMonitoring} alt="System Monitoring" className="w-32 h-32 flex-shrink-0 z-20" />
            <div className="flex flex-col justify-center z-20 text-center">
              <h2 className="font-poppins text-lg font-semibold mb-2">System Monitoring</h2>
              <p className="font-poppins text-xs">
                Let your employees work more efficiently from anywhere with MegaViz’s monitoring tools.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>

{/* Innovative It solution end */}


    </>
  )
}

export default Services