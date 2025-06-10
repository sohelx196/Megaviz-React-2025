import React from 'react'

import cyberSecurityMain from "../../../src/assets/images/ExtraItSollution/cyberSecurityMain.jpg";
import backDots from "../../../src/assets/images/ExtraItSollution/backDots.png";


import cyberOverlap from "../../../src/assets/images/ExtraItSollution/Overlap/cyberOverlap.png";

import toyMen from "../../../src/assets/images/ExtraItSollution/toyMen.png";
import twoWomen from "../../../src/assets/images/ExtraItSollution/twoWomen.png";


function CyberSecurity() {
  return (
    <>
       
         {/* Main Page start */}

    <section className="w-full bg-white px-4 md:px-8 py-16 relative">
      <div className="max-w-7xl mx-auto w-full relative flex flex-col-reverse md:flex-row md:items-start justify-center gap-6 md:gap-0">
        
        {/* Text Box */}
        <div className="w-full md:w-[60%] lg:w-[65%] relative z-20 md:-mr-24">
          <div className="bg-[#C72C28] text-white p-6 md:p-10 shadow-lg flex flex-col justify-start
                          md:h-[460px] lg:h-[480px]
                          rounded-2xl md:rounded-r-none md:rounded-l-2xl md:rounded-br-[48px]">
            <h2 className="font-cabin text-2xl md:text-3xl lg:text-4xl font-bold mb-7">
              Security & Firewall
            </h2>
            <p className="font-cabin text-[#FFFAFA] mb-7 text-sm md:text-xs lg:text-base text-justify">
              Security: Business assets such as networks, email systems, databases and sensitive data
              on file systems or intranets must constantly be protected. Insight provides solutions for
              the management and security of your core business components from encryption and server
              protection to compliance reporting and security analytics.
            </p>
            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify mb-7">
              Firewall: As critical information moves from the data center to the field across desktops,
              laptops and mobile devices, platform management and policy become every bit as important
              as your firewall. Insight's data protection solutions can help you stay secure at this
              fundamental level by providing comprehensive solutions that protect the data and
              applications on nearly any computing device your workforce might use.
            </p>
            <p className="font-cabin text-[#FFFAFA] text-sm md:text-xs lg:text-base text-justify">
              Without security business processes cease to function.
            </p>
          </div>
        </div>

        {/* Image Box */}
        <div className="w-full md:w-[50%] lg:w-[55%] relative z-10 shrink-0">
          {/* Background Dots */}
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
            src={cyberSecurityMain}
            alt="CyberSecurityImg"
             loading="lazy"
            className="w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10"
          />
        </div>
      </div>
    </section>

         {/* Main Page end */}



         {/* Overlap image start */}

<section className="bg-white py-16 px-4 relative lg:ml-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">

        {/* Left Image */}
        <div className="w-full md:w-1/2 relative z-0 ml-0">
          <img
            src={cyberOverlap}
            alt="CyberSecurityOverlap"
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
          {/* Overlapping Box */}
          <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-10 
                          lg:absolute lg:left-[-180px] lg:top-[50px] lg:w-[680px] z-20">
            <h3 className="font-cabin text-3xl font-bold mb-4 text-[#102E52]">
              Defending the Future: Your Trusted Partner in Next-Generation Cybersecurity for a Rapidly Evolving Digital World
            </h3>
            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              The world of technology is continuously evolving, from the rise in the Internet of Things (IoT) through the adoption of Software as a Service (SaaS) over traditional in-house applications. And as technologies shift, so does the threat landscape. Yet many organizations adapt their technology without guidance or direction from IT, information security, procurement, or risk specialists.
            </p>
            <p className="font-cabin text-base font-normal text-[#696969]">
              As a Managed Security Services Provider (MSSP), we act as our client’s trusted go-to partner bringing advanced expertise in the current threat landscape. Let us become an extension of your team, whether seeking assistance with 24x7 network security monitoring, Virtual CISO Services, or Penetration Testing.
            </p>
          </div>
        </div>
      </div>
    </section>

         {/* Overlap image end */}


{/* cards start */}

 <section className="w-full px-4 md:px-8 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#102E52]">
          Comprehensive <span className="text-[#C72C28]">Security</span>,
          <span className="block mt-2">Seamless Support</span>
        </h2>
        <p className="font-cabin mt-4 text-base md:text-lg text-[#464646] max-w-3xl mx-auto">
          MegaViz delivers end-to-end security solutions tailored to your business needs—backed by a trusted team of engineers providing fast, familiar, and reliable support.
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
              MegaViz, after understanding in detail your business needs, offers a complete package of security solutions ranging from formulating security strategy for business, Network security and design, Email and Web Security, Network Audit & Monitoring, Endpoint control and security services. MegaViz's solutions help you mitigate data damage risks and solve your security challenges.
            </p>
          </div>
          <img
            src={toyMen}
            alt="HelpImg"
             loading="lazy"
            className="absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px]
                       w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px]
                       h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#FFEEEE] rounded-2xl p-5 w-full lg:w-[500px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
          <div className="z-10 text-left pr-[130px]">
            <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#C72C28] mb-2">
              Service Offerings:
            </h3>
            <p className="font-cabin text-[14px] text-[#333333CC] font-normal leading-snug">
              At MegaViz, our team that makes your business run. With dedicated and experienced team of Engineers, your end user receive rapid response and support from engineers they know.
            </p>
          </div>
          <img
            src={twoWomen}
            alt="ServiceImg"
             loading="lazy"
            className="absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px]
                       w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px]
                       h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16"
          />
        </div>
      </div>
    </section>

{/* cards end */}


    </>
  )
}

export default CyberSecurity