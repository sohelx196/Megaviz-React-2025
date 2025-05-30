import React from 'react'

import backDots from "../../../src/assets/images/ExtraItSollution/backDots.png";
import itSupportMain from "../../../src/assets/images/ExtraItSollution/itSupportMain.jpg";

import itSupportOverlap from "../../../src/assets/images/ExtraItSollution/Overlap/itSupportOverlap.png";


import toyMen from "../../../src/assets/images/ExtraItSollution/toyMen.png";



function ItSupport() {
  return (
    <>
        
{/* Main start */}

 <section className="w-full bg-white px-4 md:px-8 py-16 relative">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative flex flex-col-reverse md:flex-row md:items-start justify-center gap-6 md:gap-0">
        {/* Text Box */}
        <div className="w-full md:w-[60%] lg:w-[65%] relative z-20 md:-mr-24">
          <div
            className="bg-[#C72C28] text-white p-6 md:p-10 shadow-lg flex flex-col justify-start
                       md:h-[460px] lg:h-[430px]
                       rounded-2xl md:rounded-r-none md:rounded-l-2xl md:rounded-br-[48px]"
          >
            <h2 className="font-cabin text-2xl md:text-3xl lg:text-4xl font-bold mb-7">
              IT Support
            </h2>

            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base mb-6 text-justify">
              At MegaViz, our mission is very simple. Provide reliable, IT
              services to small and medium-sized businesses.
            </p>

            <p className="cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify">
              Managed services from MegaViz bring advanced IT management,
              support, and security solutions to small and medium businesses.
              We offer our customers a proactive service approach. Our team is
              able to efficiently manage the business&apos;s infrastructures
              and end users. We help businesses to free up internal resources
              and cost-effectively manage primary business operations with no
              technical obstacles. Managed IT Services from Wise Tech Group
              takes on proactive monitoring, maintenance, security, and IT
              support for your business infrastructures, applications, and
              cloud solutions.
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
            src={itSupportMain}
            alt="Team Working"
            className="w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10"
          />
        </div>
      </div>
    </section>

{/* Main end */}




{/* Overlap image start */}

 <section className="bg-white py-16 px-4 relative lg:ml-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative z-0 ml-0">
          <img
            src={itSupportOverlap}
            alt="Team Working"
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
          <div
            className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-10
                       lg:absolute lg:left-[-180px] lg:top-[50px] lg:w-[650px] z-20"
          >
            <h3 className="font-cabin text-3xl font-bold mb-4 text-[#102E52]">
              Secure, Scalable, and Seamless IT Infrastructure Management
            </h3>

            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              Manage, monitor, and maintain business networks and servers.
              On-premise or cloud. With around-the-clock advanced network
              monitoring. We are able to proactively respond to alerts, avoid
              downtime, and identify bottlenecks and security vulnerabilities.
              Protecting businesses from today’s security threats and helping
              organizations implement and maintain security policies and
              procedures. Our Manage Security includes endpoint security,
              network security, cloud security, and policy management. Plan,
              provide and manage disaster recovery solutions that fit business
              needs. Our disaster recovery solutions include off-site backups,
              hybrid disaster recovery solutions, and redundancy solutions.
              Delivering day-to-day management and maintenance tasks required to
              ensure your employees experience a reliable and secured workspace.
              The team that makes your business run. With a dedicated and
              experienced team of Engineers, your end user receives rapid
              response and support from engineers they know.
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
          Reliable and Proactive
          <span className="block mt-2">IT Management</span>
        </h2>
        <p className="font-cabin mt-4 text-base md:text-lg text-[#464646] max-w-3xl mx-auto">
          MegaViz supports organizations with end-to-end IT infrastructure solutions — from 24/7 network monitoring to disaster recovery and security management — ensuring optimized performance, minimized downtime, and a fully protected digital environment.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4">
        {/* Card 1 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[130px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              How Megaviz Can Help:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              MegaViz technicians build service offerings around the best-in-class technologies, then combine hardware, software and services to create a platform that a business requires.
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

        {/* Uncomment and add more cards here if needed */}

      </div>
    </section>

{/* Cards end */}


    </>
  )
}

export default ItSupport