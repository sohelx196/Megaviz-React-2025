import React from 'react'


import backDots from "../../../src/assets/images/ExtraItSollution/backDots.png";
import systemMain from "../../../src/assets/images/ExtraItSollution/systemMain.jpg";

import systemOverlap from "../../../src/assets/images/ExtraItSollution/Overlap/systemOverlap.png";

import toyMen from "../../../src/assets/images/ExtraItSollution/toyMen.png";
import twoWomen from "../../../src/assets/images/ExtraItSollution/twoWomen.png";

function SystemMonitoring() {
  return (
    <>

{/* Main page start */}

  <section className="w-full bg-white px-4 md:px-8 py-16 relative">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative flex flex-col-reverse md:flex-row md:items-start justify-center gap-6 md:gap-0">
        
        {/* Text Box */}
        <div className="w-full md:w-[60%] lg:w-[65%] relative z-20 md:-mr-24">
          <div className="bg-[#C72C28] text-white p-6 md:p-10 shadow-lg flex flex-col justify-start
                          md:h-[460px] lg:h-[470px]
                          rounded-2xl md:rounded-r-none md:rounded-l-2xl md:rounded-br-[48px]">
            <h2 className="cabin text-2xl md:text-3xl lg:text-4xl font-bold mb-7">System Monitoring</h2>

            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base mb-6 text-justify">
              With our vast industrial experience in the domain, we are engaged in providing Computer System AMC Service to customers. This service is highly acknowledged amongst customers for its effectiveness and longer service life. The professionals of our company execute this service in the committed time frame to meet the market demand. Moreover, our service is used for the maintenance of computer systems in various places.
            </p>

            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify">
              We have been committed to total client satisfaction through quality service, coupled with on-time support, and strongly believe in our corporate philosophy since our inception in the market. We amaze customers with our products and services which help us to offer solutions that maximize value for our customers. We source products from leading vendors in the market and are known for their high-grade quality. We are trading products of brands Secura, Avtech & more.
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
            src={systemMain}
            alt="Team Working"
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
            src={systemOverlap}
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
          
          {/* Overlapping Box */}
          <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-10 
                          lg:absolute lg:left-[-180px] lg:top-[50px] lg:w-[700px] z-20">
            <h3 className="font-cabin text-3xl font-bold mb-4 text-[#102E52]">
              Real-Time Monitoring for Always-On Performance
            </h3>
            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              Problem-solving is our primary objective. Modern network systems are getting more complex with every passing day. Post-commissioning or post-sales cost increases the overhead of a company. The solution to the burgeoning overhead is an annual maintenance contract. Radius Infotech offers a dedicated AMC solution for its customers. After the successful installation and commissioning of the systems, there is a need to get the desired output level from the system. Megaviz is a dedicated entity for providing annual maintenance services and handling minute details of an annual maintenance contract. Through our annual maintenance contract, Customers can expect Optimum performance from the system. Megaviz has an excellent record in executing annual maintenance for our existing as well as new customers.
            </p>
            <p className="font-cabin text-base font-normal text-[#696969]">
              MegaViz covers every nook and corner of the country for our customers. Due to our vast experience and solid expertise, we have been the preferred choice for AMC services in UAE.
            </p>
          </div>

        </div>
      </div>
    </section>

{/* Overlap image end */}




{/* Cards start */}

  <section className="w-full px-4 md:px-8 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#102E52]">
          Continuous System Monitoring
          <span className="block mt-2">for Maximum Uptime</span>
        </h2>
        <p className="font-cabin mt-4 text-base md:text-lg text-[#464646] max-w-3xl mx-auto">
          MegaViz ensures real-time visibility into your IT infrastructure — identifying issues before they impact operations,
          enhancing performance, and securing your network around the clock.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4">
        {/* Card 1 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[400px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[120px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              How Megaviz Can Help:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              We have been maintaining the hardware of big corporate, small organizations, and government undertakings.
              We have blended our qualitative service with the latest technology to offer our customers a competitive edge.
            </p>
          </div>
          <img
            src={toyMen}
            alt="IT Consultancy"
             loading="lazy"
            className="absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] 
                       w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] 
                       h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[400px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[130px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              Service Offerings:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              At MegaViz, we also take up Preventive Maintenances to reduce downtime of Analysers and also undertake Annual maintenance contracts for your computers. We are attached to different companies and our performance has been so far very good.
            </p>
          </div>
          <img
            src={twoWomen}
            alt="IT Consultancy"
             loading="lazy"
            className="absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] 
                       w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] 
                       h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16"
          />
        </div>
      </div>
    </section>

{/* Cards end */}


    </>
  )
}

export default SystemMonitoring