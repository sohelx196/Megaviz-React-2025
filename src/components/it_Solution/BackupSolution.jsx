import React from 'react'


import backupSolutionMain from "../../../src/assets/images/ExtraItSollution/backupSolutionMain.jpg";
import backDots from "../../src/../assets/images/ExtraItSollution/backDots.png";

import backupSolutionOverlap from "../../../src/assets/images/ExtraItSollution/Overlap/backupSolutionOverlap.png";

import toyMen from "../../../src/assets/images/ExtraItSollution/toyMen.png";
import twoWomen from "../../../src/assets/images/ExtraItSollution/twoWomen.png";

function BackupSolution() {
  return (
    <>
      {/* Main page start */}

     <section className="w-full bg-white px-4 md:px-8 py-16 relative">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative flex flex-col-reverse md:flex-row md:items-start justify-center gap-6 md:gap-0">
        
        {/* Text Box */}
        <div className="w-full md:w-[60%] lg:w-[65%] relative z-20 md:-mr-24">
          <div className="bg-[#C72C28] text-white p-6 md:p-10 shadow-lg flex flex-col justify-start
                          md:h-[460px] lg:h-[420px]
                          rounded-2xl md:rounded-r-none md:rounded-l-2xl md:rounded-br-[48px]">
            <h2 className="font-cabin text-2xl md:text-3xl lg:text-4xl font-bold mb-7">
              Backup Solutions
            </h2>
            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify mb-7">
              The explosion of data in the Information Age challenges businesses to re-conceive the modern server platform. MegaViz technicians build service offerings around the best-in-class server technologies, then combine hardware, software and services to create a platform a business requires.
            </p>
            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify mb-7">
              High-demand workloads and explosive global data growth are forcing storage solutions to get larger and more complex, At the same time, client-side applications and growth in end-user data demands are pushing many of today's server architectures to their limits of performance, availability and capacity.
            </p>
          </div>
        </div>

        {/* Main Image Container */}
        <div className="w-full md:w-[50%] lg:w-[55%] relative z-10 shrink-0">
          {/* Dot Pattern */}
          <img
            src={backDots}
            alt="Dot Pattern"
            className="absolute 
                       -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10
                       -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7
                       w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 
                       z-0 pointer-events-none"
          />
          {/* Main Image */}
          <img
            src={backupSolutionMain}
            alt="Team Working"
            className="w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10"
          />
        </div>

      </div>
    </section>
    
      {/* Main page end */}


{/* overlap start */}

  <section className="bg-white py-16 px-4 relative lg:ml-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative z-0 ml-0">
          <img
            src={backupSolutionOverlap}
            alt="Team Working"
            className="rounded-[30px] 
                       w-[90%] h-[500px] 
                       lg:w-[80%] lg:h-[550px] 
                       xl:w-[70%] xl:h-[600px] 
                       object-cover mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0 relative z-10">
          {/* Overlapping Box */}
          <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-10 
                          lg:absolute lg:left-[-180px] lg:top-[60px] lg:w-[680px] z-20">
            <h3 className="font-cabin text-3xl font-bold mb-4 text-[#102E52]">
              Reliable Server Backup Solutions, Protecting Your Data from Disasters, Downtime, and Loss
            </h3>
            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              Hardware, storage growth and environmental concerns can all be significant challenges for your server platform without a strong vision. Data is the lifeblood of organizations today. Without it, business processes cease to function. Corrupt information creates a perceived lack of integrity, so designing an infrastructure that minimizes system failures and their impacts isn't a luxury—it's a necessity.
            </p>
            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              Server backup software is used to ensure the information stored or processed through server hardware remains intact in case of mechanical failure or user error. These solutions store the information processed by the server in a remote location, a remote cloud, or on some other on-premises hardware device. Companies use server backup software to prevent data loss in disaster scenarios as well as to ensure their business data or customer business data remains available.
            </p>
          </div>
        </div>

      </div>
    </section>

{/* overlap end */}



{/* cards start */}

  <section className="w-full px-4 md:px-8 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#102E52]">
          Maximize ROI with
          <span className="block mt-2">
            Smart <span className="text-[#C72C28]">IT Solutions</span>
          </span>
        </h2>
        <p className="font-cabin mt-4 text-base md:text-lg text-[#464646] max-w-3xl mx-auto">
          At MegaViz, we protect your tech investments with tailored services that enhance performance,
          extend lifecycle value, and drive business productivity through strategic infrastructure and execution.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4">
        {/* Card 1 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[120px]">
            <h3 className="poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              How Megaviz Can Help:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              MegaViz understands your business invests heavily in technology products, and you need optimum
              performance throughout its lifecycle to maximize its value to your business. MegaViz's professional
              solutions support you and protect your data with a suite of services designed to maximize the life
              and ROI of your technology investments.
            </p>
          </div>
          <img
            src={toyMen}
            alt="IT Consultancy"
            className="absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] 
                       w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 
                       translate-y-12 md:translate-y-12 lg:translate-y-16"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[130px]">
            <h3 className="poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              Service Offerings:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              We create the necessary infrastructure to develop solutions and service offerings to help our clients
              adopt more advanced strategies to drive their business productivity. Let us help you set the stage
              with strategy and execution to meet your business needs with the following services:
            </p>
          </div>
          <img
            src={twoWomen}
            alt="IT Consultancy"
            className="absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] 
                       w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 
                       translate-y-6 md:translate-y-12 lg:translate-y-16"
          />
        </div>
      </div>
    </section>

{/* cards end */}


    </>
  )
}

export default BackupSolution