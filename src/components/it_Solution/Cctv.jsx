import React from 'react'


import backDots from "../../../src/assets/images/ExtraItSollution/backDots.png";
import cctvMain from "../../../src/assets/images/ExtraItSollution/cctvMain.jpg";

import cctvOverlap from "../../../src/assets/images/ExtraItSollution/Overlap/cctvOverlap.png";


import toyMen from "../../../src/assets/images/ExtraItSollution/toyMen.png";
import twoWomen from "../../../src/assets/images/ExtraItSollution/twoWomen.png";


function Cctv() {
  return (
    <>

{/* Main page start */}

 <section className="w-full bg-white px-4 md:px-8 py-16 relative">
      <div className="max-w-7xl mx-auto w-full relative flex flex-col-reverse md:flex-row md:items-start justify-center gap-6 md:gap-0">
        
        {/* Text Box */}
        <div className="w-full md:w-[60%] lg:w-[65%] relative z-20 md:-mr-24">
          <div className="bg-[#C72C28] text-white p-6 md:p-10 shadow-lg flex flex-col justify-start
                          md:h-[460px] lg:h-[430px]
                          rounded-2xl md:rounded-r-none md:rounded-l-2xl md:rounded-br-[48px]">
            <h2 className="font-cabin text-2xl md:text-3xl lg:text-4xl font-bold mb-7">
              CCTV Surveillance
            </h2>

            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base mb-6 text-justify">
              Closed Circuit Television (CCTV) surveillance is an important tool to successfully monitor premises and deter crime. A large number of businesses and government agencies use CCTV to monitor and collect video/audio evidence. Wise Tech Group deployed and engaged in maintaining medium to enterprise-size CCTV surveillance systems consisting of hundreds of cameras. We deployed a surveillance system that allows our customers to monitor multiple locations from a single Security Operations Center (SOC).
            </p>

            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify">
              Our engineers have the knowledge and necessary field experience to design and implement the system that will meet your needs and budget while giving you the flexibility to expand as your business grows.
            </p>
          </div>
        </div>

        {/* Main Image Container */}
        <div className="w-full md:w-[50%] lg:w-[55%] relative z-10 shrink-0">
          {/* Dot Pattern */}
          <img
            src={backDots}
            alt="Dot Pattern"
             loading="lazy"
            className="absolute 
              -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10
              -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7
              w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 
              z-0 pointer-events-none"
          />

          {/* Main Image */}
          <img
            src={cctvMain}
            alt="Team Working"
             loading="lazy"
            className="w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10"
          />
        </div>
      </div>
    </section>

{/* Main page end */}



{/* Overlap start */}

   <section className="bg-white py-16 px-4 relative lg:ml-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">

        {/* Left Image */}
        <div className="w-full md:w-1/2 relative z-0 ml-0">
          <img
            src={cctvOverlap}
            alt="Team Working"
             loading="lazy"
            className="rounded-[30px] 
              w-[90%] h-[400px] 
              lg:w-[80%] lg:h-[550px] 
              xl:w-[70%] xl:h-[630px] 
              object-cover mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0 relative z-10">
          <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-10
            lg:absolute lg:left-[-180px] lg:top-[50px] lg:w-[700px] z-20">

            <h3 className="font-cabin text-3xl font-bold mb-4 text-[#102E52]">
              Enhancing Security Visibility Without Overstretching Your IT or Budget
            </h3>

            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              CCTV systems maintenance for medium and large enterprises. CCTV configuration and management at government facilities. Installation and setup of CCTV systems ranging from 20 to 1000 cameras. Full on-site design and implementation of the CCTV system. Setup of CCTV feeds over wireless, wired, and fiber-optic connections CCTV migrations from Analog to IP technologies. Maintenance of a Hybrid system, consisting of analog and IP cameras.
            </p>

            <h3 className="font-cabin text-[#C72C28] font-bold mb-1">
              WHY INVEST IN CCTV
            </h3>

            <p className="font-cabin text-base font-normal text-[#696969]">
              Quality video evidence helps solve crime and increases apprehensions by private security and police agencies. Saves money by identifying operational issues. Acts as a deterrent to those that would consider being dishonest. Video evidence often eliminates or significantly reduces exposure to litigation via fraudulent or frivolous claims. All too often businesses discover products or money missing weeks after the fact. Having video archives available to go back and review often solves these mysteries. Video analytics – let video help the operational side of your business by mapping customer patterns, counting people, capturing license plates, and more.
            </p>

          </div>
        </div>
      </div>
    </section>

{/* Overlap end */}



{/* Cards start */}

 <section className="w-full px-4 md:px-8 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#102E52]">
          Next-Gen CCTV for
          <span className="block mt-2">Safer Spaces</span>
        </h2>
        <p className="font-cabin mt-4 text-base md:text-lg text-[#464646] max-w-3xl mx-auto">
          MegaViz delivers advanced CCTV solutions with real-time monitoring,
          remote access, and secure data storage — helping businesses deter
          threats, improve visibility, and ensure compliance across all
          environments.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4">
        {/* Card 1 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[120px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              How Megaviz Can Help:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              With our highly qualified design teams, we endorse that customers
              receive a uniquely designed CCTV camera installation that records
              the most essential footage with coverage from the right angles
              that makes sense. We take pride in designing the perfect CCTV
              solutions to meet all surveillance requirements. In order to
              support the broad needs of customers, our professional design
              team provides proficiency in systems, software, support, and
              maintenance in analog as well as IP camera setups.
            </p>
          </div>

          <img
            src={toyMen}
            alt="IT Consultancy"
             loading="lazy"
            className="absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          {/* Text Section */}
          <div className="z-10 text-left pr-[130px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              Service Offerings:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              At MegaViz, we have a mission to keep our customers satisfied. As
              the security of customer infrastructure and assets is our prime
              responsibility, we offer the highest quality services in
              designing, angling, and installing top-standard CCTV cameras
              available in the market. In terms of CCTV Camera Installation, we
              are the leading service provider in UAE.
            </p>
          </div>

          {/* Responsive Image */}
          <img
            src={twoWomen}
            alt="IT Consultancy"
             loading="lazy"
            className="absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16"
          />
        </div>
      </div>
    </section>

{/* Cards end */}

    </>
  )
}

export default Cctv