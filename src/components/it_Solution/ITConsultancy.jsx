import React from 'react'

import backDots from "../../../src/assets/images/ExtraItSollution/backDots.png";
import itConsultancyMain from "../../../src/assets/images/ExtraItSollution/itConsultancyMain.jpg";


import toyMen from "../../../src/assets/images/ExtraItSollution/toyMen.png";
import twoWomen from "../../../src/assets/images/ExtraItSollution/twoWomen.png";

function ITConsultancy() {
  return (
    <>
       
{/* Main page start */}

 <section className="w-full bg-white px-4 md:px-8 py-16 relative">
      <div className="max-w-7xl mx-auto w-full relative flex flex-col-reverse md:flex-row md:items-start justify-center gap-6 md:gap-0">

        {/* Text Box */}
        <div className="w-full md:w-[60%] lg:w-[65%] relative z-20 md:-mr-24">
          <div className="bg-[#C72C28] text-white p-6 md:p-10 shadow-lg flex flex-col justify-start
                          md:h-[460px] lg:h-[480px]
                          rounded-2xl md:rounded-r-none md:rounded-l-2xl md:rounded-br-[48px]">
            <h2 className="font-cabin text-2xl md:text-3xl lg:text-4xl font-bold mb-7">IT Consultancy</h2>
            <p className="font-cabin text-[#FFFAFA] mb-4 text-sm md:text-xs lg:text-base text-justify">
              You deserve the best possible results from your information technology (IT). But when it comes to IT, many business owners don't know where to start.
              This is why we offer a complete IT assessment absolutely free with no strings attached. Find out exactly how to improve the efficiency and security of your business IT network. 
              These services are suitable for envisaging and conceiving the entire project theme as per the clients' specific requirements. When the entire project is replenished into working methodologies, we make use of optimized techniques to execute the assigned task to meet the clients' requirements.
            </p>
            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify">
              MegaViz's technology consultants advise businesses on how best to use technology and offer services to accomplish that mission. Our experienced staff can assess your IT infrastructure and the health of your system. We work with you to evaluate and understand your priorities and business parameters. We then propose the best solutions to match your goals, resources and technology investment. MegaViz offers a multitude of technology products to accommodate your project needs.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-[50%] lg:w-[55%] relative z-10 shrink-0">
          {/* Dotted Background */}
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
            src={itConsultancyMain}
            alt="Team Working"
            className="w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10"
          />
        </div>
      </div>
    </section>

{/* Main page end */}



{/* cards start */}

<section className="w-full px-4 md:px-8 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#102E52]">
          Empowering Your Business{" "}
          <span className="block mt-2">
            with Expert{" "}
            <span className="text-[#C72C28]">
              IT Solutions
            </span>
          </span>
        </h2>
        <p className="font-cabin mt-4 text-base md:text-lg text-[#464646] max-w-2xl mx-auto">
          At MegaViz, we combine trusted IT consulting with dedicated engineering support to keep your operations running smoothly and efficiently.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4">

        {/* Card 1 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[400px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[100px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              How Megaviz Can Help:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              We have emerged as a celebrated business enterprise engrossed in offering IT Consulting Services to our clients.
            </p>
          </div>

          <img
            src={toyMen}
            alt="IT Consultancy"
            className="absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[400px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[100px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              Service Offerings:
            </h3>
            <p className="font-cabin text-sm text-[#333333CC] font-normal leading-snug">
              At MegaViz, our team makes your business run. With a dedicated and experienced team of Engineers, your end user receives rapid response and support from engineers they know.
            </p>
          </div>

          <img
            src={twoWomen}
            alt="IT Consultancy"
            className="absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16"
          />
        </div>

      </div>
    </section>

{/* cards end */}

    </>
  )
}

export default ITConsultancy