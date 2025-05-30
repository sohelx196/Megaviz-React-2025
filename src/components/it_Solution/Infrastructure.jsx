import React from 'react'


import backDots from "../../../src/assets/images/ExtraItSollution/backDots.png";
import infrastructureMain from "../../../src/assets/images/ExtraItSollution/infrastructureMain.jpg";

import infrastructureOverlap from "../../../src/assets/images/ExtraItSollution/Overlap/infrastructureOverlap.png";

import toyMen from "../../../src/assets/images/ExtraItSollution/toyMen.png";
import twoWomen from "../../../src/assets/images/ExtraItSollution/twoWomen.png";

function Infrastructure() {
  return (
    <>
       {/* main page start */}

 <section className="w-full bg-white px-4 md:px-8 py-16 relative">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative flex flex-col-reverse md:flex-row md:items-start justify-center gap-6 md:gap-0">

        {/* Text Box */}
        <div className="w-full md:w-[60%] lg:w-[65%] relative z-20 md:-mr-24">
          <div className="bg-[#C72C28] text-white p-6 md:p-10 shadow-lg flex flex-col justify-start
            md:h-[460px] lg:h-[440px]
            rounded-2xl md:rounded-r-none md:rounded-l-2xl md:rounded-br-[48px]">
            <h2 className="font-cabin text-2xl md:text-3xl lg:text-4xl font-bold mb-7">
              Infrastructure & Cloud
            </h2>
            <p className="font-cabin text-[#FFFAFA] mb-4 text-sm md:text-xs lg:text-base text-justify">
              As businesses develop, their infrastructure must grow with certain priorities in mind such as basic platform and infrastructure, core efficiency, vigilant security and the ability to go wireless and mobile. Our team helps unify your business infrastructure, maximize security, efficiency and position it to embrace new strategies.
            </p>
            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify">
              Your infrastructure is under constant challenge: a steady stream of new applications, security, wireless solutions and cloud-based services are demanding an ever-increasing amount of your network's finite bandwidth. Couple this with an increasingly mobile workforce leveraging smartphones, tablets and other mobile devices, and you are faced with even greater complexities and security struggles. Identifying the right network solution can be challenging.
            </p>
          </div>
        </div>

        {/* Main Image Section */}
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
            src={infrastructureMain}
            alt="Team Working"
            className="w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10"
          />
        </div>
      </div>
    </section>

       {/* main page end */}



{/* overlap images start */}

   <section className="bg-white py-16 px-4 relative lg:ml-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative z-0 ml-0">
          <img
            src={infrastructureOverlap}
            alt="Team Working"
            className="rounded-[30px] 
              w-[90%] h-[500px] 
              lg:w-[80%] lg:h-[550px] 
              xl:w-[70%] xl:h-[630px] 
              object-cover mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0 relative z-10">
          
          {/* Overlapping Box */}
          <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-10 
            lg:absolute lg:left-[-180px] lg:top-[40px] lg:w-[640px] z-20">
            <h3 className="font-cabin text-3xl font-bold mb-4 text-[#102E52]">
              As IT infrastructure costs and complexities rise, all organizations wrestle to ensure maximum productivity and strive to meet greater computing demands with leaner, greener architectures.
            </h3>
            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              System downtime is costly to both internal productivity and external client connectivity. Today's fast-paced business environment requires a reliable, high performing infrastructure to support critical business processes and applications. One that is agile and can accommodate the changing requirements of today's workforce without sacrificing accessibility or security. Getting there requires a vision and strategy supported by knowledgeable and skilled resources that can help assess your current state using best practices and a holistic approach to evaluation, then leverage this information to design and execute your strategy, through build, integration and management.
            </p>
          </div>

        </div>
      </div>
    </section>

{/* overlap images end */}




{/* bottom cards start */}

<section className="w-full px-4 md:px-8 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#102E52]">
          Smart <span className="text-[#C72C28]">Infrastructure</span>,
          <span className="block mt-2">Smarter Business</span>
        </h2>
        <p className="font-cabin mt-4 text-base md:text-lg text-[#464646] max-w-3xl mx-auto">
          From strategy to execution, Megaviz empowers businesses of all sizes
          to design, build, and operate advanced IT infrastructures that drive
          productivity and deliver real-time results.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4">
        {/* Card 1 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[120px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              How Megaviz Can Help:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              Megaviz can help clients plan, design, implement and operate
              real-time networking, wireless and infrastructures. Megaviz
              assists clients, from small business to large enterprise, with
              building and operating a solid infrastructure to enable advanced
              applications and services to deliver the right information to the
              right users at the right time.
            </p>
          </div>
          <img
            src={toyMen}
            alt="IT Consultancy"
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
              We create the necessary infrastructure to develop solutions and
              services offerings to help our clients adopt more advanced
              strategies to drive their business productivity. Let us help you
              set the stage with strategy and execution to meet your business
              needs with the following services:
            </p>
          </div>
          <img
            src={twoWomen}
            alt="IT Consultancy"
            className="absolute bottom-5 
              right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] 
              w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] 
              h-auto object-contain z-0 
              translate-y-6 md:translate-y-12 lg:translate-y-16"
          />
        </div>
      </div>
    </section>

{/* bottom cards end */}


    </>
  )
}

export default Infrastructure