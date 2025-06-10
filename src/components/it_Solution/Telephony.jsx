import React from 'react'

import backDots from "../../../src/assets/images/ExtraItSollution/backDots.png";
import telephonyMain from "../../../src/assets/images/ExtraItSollution/telephonyMain.jpg";

import telephonyOverlap from "../../../src/assets/images/ExtraItSollution/Overlap/telephonyOverlap.png";

import toyMen from "../../../src/assets/images/ExtraItSollution/toyMen.png";
import twoWomen from "../../../src/assets/images/ExtraItSollution/twoWomen.png";

function Telephony() {
  return (
    <>

{/* Main page start */}

<section className="w-full bg-white px-4 md:px-8 py-16 relative">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative flex flex-col-reverse md:flex-row md:items-start justify-center gap-6 md:gap-0">
        {/* Text Box */}
        <div className="w-full md:w-[60%] lg:w-[65%] relative z-20 md:-mr-24">
          <div className="bg-[#C72C28] text-white p-6 md:p-10 shadow-lg flex flex-col justify-start
                          md:h-[460px] lg:h-[440px]
                          rounded-2xl md:rounded-r-none md:rounded-l-2xl md:rounded-br-[48px]">
            <h2 className="font-cabin text-2xl md:text-3xl lg:text-4xl font-bold mb-7">Telephoney</h2>

            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base mb-4 text-justify">
              The future will belong to businesses that know how to efficiently align, integrate and make the most of their technologies. MegaViz creates business solutions that utilize new technologies to streamline systems, accelerate communication and maximize productivity.
            </p>

            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify mb-4">
              People are on the move, working in separate offices, homes and coffee shops around the country or around the world and your organization needs to support them.
            </p>

            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify mb-4">
              At the same time, communications options have multiplied. It's difficult for the average worker to manage all these points of contact while communicating effectively with customers, colleagues, vendors, partners and the public.
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
            src={telephonyMain}
            alt="Telephony Image"
             loading="lazy"
            className="w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10"
          />
        </div>
      </div>
    </section>

{/* Main page end */}


{/* Overlap image start */}

 <section className="bg-white py-16 px-4 relative lg:ml-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative z-0 ml-0">
          <img
            src={telephonyOverlap}
            alt="Telephony Overlap"
             loading="lazy"
            className="rounded-[30px] 
                       w-[90%] h-[500px] 
                       lg:w-[80%] lg:h-[550px] 
                       xl:w-[70%] xl:h-[600px] 
                       object-cover mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0 relative z-10">
          <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-10 
                          lg:absolute lg:left-[-180px] lg:top-[80px] lg:w-[580px] z-20">
            <h3 className="font-cabin text-3xl font-bold mb-4 text-[#102E52]">
              Simplifying Business Communication Without Sacrificing Security or Cost Efficiency
            </h3>
            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              To add to the degree of difficulty, the number of unified communication and collaboration tools available today is growing almost as quickly as the number of devices and platforms used to access them.
            </p>
            <p className="font-cabin text-base font-normal text-[#696969]">
              The exponential growth in complexity makes it difficult to keep pace with the support required for security, upgrades and maintenance - and still maintain budget and spending ratios.
            </p>
          </div>
        </div>
        
      </div>
    </section>

{/* Overlap image end */}



{/* Cards start  */}

 <section className="w-full px-4 md:px-8 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#102E52]">
          Smart, Unified Business
          <span className="block mt-2">Communication</span>
        </h2>
        <p className="font-cabin mt-4 text-base md:text-lg text-[#464646] max-w-3xl mx-auto">
          MegaViz empowers organizations with advanced telecom services and
          integrated communication platforms—boosting productivity,
          collaboration, and connectivity across remote and onsite
          infrastructures.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4">
        {/* Card 1 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[120px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              How Megaviz Can Help:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              MegaViz's communication platform allows you to transform your
              communications culture by embracing new technologies into your
              integrated communications platform. MegaViz also provides a host
              of unified services to increase productivity and collaboration by
              streamlining your communication channels. We can implement both
              remote and onsite IT infrastructure to meet the demands of your
              organization.
            </p>
          </div>

          <img
            src={toyMen}
            alt="HelpImg"
             loading="lazy"
            className="absolute bottom-5 
              right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] 
              w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] 
              h-auto object-contain z-0 
              translate-y-12 md:translate-y-12 lg:translate-y-16"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[130px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              Service Offerings:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              MegaViz’s proven experience and in-depth industry knowledge will
              play a key role in delivering excellent telecom solutions and
              business communication services across the UAE.
            </p>
          </div>

          <img
            src={twoWomen}
            alt="ServiceImg"
             loading="lazy"
            className="absolute bottom-5 
              right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] 
              w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] 
              h-auto object-contain z-0 
              translate-y-6 md:translate-y-12 lg:translate-y-16"
          />
        </div>
      </div>
    </section>

{/* Cards end */}

    </>
  )
}

export default Telephony