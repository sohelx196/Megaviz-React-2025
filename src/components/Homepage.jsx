import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

import heroBgTop from "../assets/images/main_Img/heroBgTop.png";
import heroBgBottom from "../assets/images/main_Img/heroBgBottom.png";
import arrowIcon from "../assets/icons/arrorw.png";

// import microsoft from "../assets/images/microsoft.png";
// import sonicWall from "../assets/images/sonicWall.png";
// import vmware from "../assets/images/vmware.png";
// import fortinet from "../assets/images/fortinet.png";
// import apple from "../assets/images/apple.png";

import growthIcon from "../assets/icons/growth.png";
import ideaIcon from "../assets/icons/idea.png";
import syncIcon from "../assets/icons/sync.png";
import meetingImg from "../assets/images/main_Img/meeting01.png";

// service cards images
import card01 from "../assets/images/cards_img/homepageCards/card01.png";
import card02 from "../assets/images/cards_img/homepageCards/card02.png";
import card03 from "../assets/images/cards_img/homepageCards/card03.png";
import card04 from "../assets/images/cards_img/homepageCards/card04.png";
import card05 from "../assets/images/cards_img/homepageCards/card05.png";
import card06 from "../assets/images/cards_img/homepageCards/card06.png";
import card07 from "../assets/images/cards_img/homepageCards/card07.png";
import card08 from "../assets/images/cards_img/homepageCards/card08.png";

// strategic partner images
import dellEmc from "../assets/images/strategicImages/dellEmc.png";
import epson from "../assets/images/strategicImages/epson.png";
import apc from "../assets/images/strategicImages/apc.png";
import acronis from "../assets/images/strategicImages/acronis.png";
import fujitsu from "../assets/images/strategicImages/fujitsu.png";
import avaya from "../assets/images/strategicImages/avaya.png";
import yealink from "../assets/images/strategicImages/yealink.png";
import yeastar from "../assets/images/strategicImages/yeastar.png";
import suprema from "../assets/images/strategicImages/suprema.png";
import dlink from "../assets/images/strategicImages/dlink.png";
import origin from "../assets/images/strategicImages/origin.png";
import samsung from "../assets/images/strategicImages/samsung.png";
import cisco from "../assets/images/strategicImages/cisco.png";
import sonicwall from "../assets/images/strategicImages/sonicWall.png";
import fortinet from "../assets/images/strategicImages/fortinet.png";
import vembu from "../assets/images/strategicImages/vembu.png";


// Meet Our client images
import govOfDubai from '../assets/images/OurClient/govOfDubai.png';
import dubaiMuniciplity from '../assets/images/OurClient/dubaiMunicipality.png';
import dubaiCustoms from '../assets/images/OurClient/dubaiCustoms.png';
import dubaiPolice from '../assets/images/OurClient/dubaiPolice.png';
import emarine from '../assets/images/OurClient/e-marine.png';
import brightLerners from '../assets/images/OurClient/brightLerners.png';
import dubaiEconomy from '../assets/images/OurClient/dubaiEconomy.png';
import dubaiSme from '../assets/images/OurClient/dubaiSme.png';
import ega from '../assets/images/OurClient/ega.png';
import emiratesInsurance from '../assets/images/OurClient/emiratesInsurance.png';
import electronicGovAuthority from '../assets/images/OurClient/electronicGovAuthority.png';
import dubaiWomenEstablish from '../assets/images/OurClient/dubaiWomenEstablish.png';
import zulekhaHospital from '../assets/images/OurClient/zulekhaHospital.png';
import dtc from '../assets/images/OurClient/dtc.png';
import dubaiSouth from '../assets/images/OurClient/dubaiSouth.png';
import luxuryCarts from '../assets/images/OurClient/luxuryCarts.png';






import meetingImg2 from "../assets/images/main_Img/meeting02.png";

// Testimonial Section
import Testimonials from "./Testimonials";

function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1700, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4">
        {/* Background Images */}
        <img
          src={heroBgTop}
          alt="Top Background"
          className="absolute top-0 left-0 w-full h-auto object-cover z-0 pointer-events-none"
          loading="lazy"
        />
        <img
          src={heroBgBottom}
          alt="Bottom Background"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-0 pointer-events-none"
          loading="lazy"
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="font-cabin text-gray-500 text-xl sm:text-2xl md:text-[28px] font-medium mb-2">
            Automate. Integrate. Dominate.
          </h2>
          <h1 className="font-cabin text-[32px] sm:text-[48px] md:text-[63px] font-bold text-[#102E52] leading-tight">
            Future of
          </h1>
          <h1 className="font-cabin text-[32px] sm:text-[48px] md:text-[63px] font-bold text-red-600 leading-tight mb-4">
            Modern IT Technology is here
          </h1>
          <p className="font-cabin text-gray-500 text-base sm:text-lg md:text-xl font-normal mb-8 px-2 sm:px-8">
            MegaViz helps enterprises to assess their current IT Infrastructure
            and evaluates whether an upgrade is required to justify their
            business needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contactUs">
              <button className="cabin group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-4 sm:py-4 rounded-full transition-colors duration-300">
                Get in Touch now
                <img
                  src={arrowIcon}
                  alt="Arrow"
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </Link>

            <button className="cabin border border-gray-400 hover:border-gray-600 text-sm px-6 py-3 sm:py-4 rounded-full text-black transition duration-300">
              Any Query?
            </button>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* Top Clients Section */}
    <section className="bg-white py-20 px-4 lg:px-24">
        {/* Heading Section */}
        <div className="text-center mb-12 px-4">
          <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2B59]">
            Meet Our <span className="text-red-600 ">Strategic Partner</span>
          </h2>

          {/* <p className="font-cabin text-[#696969] mt-4 text-base sm:text-lg font-normal">
            We have earned the trust of 100's of customers,
            <span className="block">including these fine companies</span>
          </p> */}

        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0">

{/* client logos */}
      {/* 1 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b border-r border-gray-300">
        <img loading="lazy" src={dellEmc} alt="dellEmc" className="h-16 sm:h-16 md:h-20 max-w-[180px] w-full object-contain" />
      </div>

      {/* 2 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b sm:border-r">
        <img loading="lazy" src={epson} alt="epson" className="h-12 sm:h-16 md:h-20 max-w-[130px] w-full object-contain" />
      </div>

      {/* 3 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b border-r border-gray-300 sm:border-r-0">
        <img loading="lazy" src={apc} alt="apc" className="h-12 sm:h-12 md:h-20 max-w-[120px] w-full object-contain" />
      </div>

      {/* 4 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b lg:border-l lg:border-r-0 border-gray-300 sm:border-r">
        <img loading="lazy" src={acronis} alt="acronis" className="h-12 sm:h-16 md:h-24 max-w-[170px] w-full object-contain" />
      </div>

      {/* 5 */}
      <div className="flex items-center justify-center p-10 sm:p-8 lg:p-10 border-b border-r border-gray-300">
        <img loading="lazy" src={fujitsu} alt="fujitsu" className="h-10 sm:h-12 md:h-20 max-w-[140px] w-full object-contain" />
      </div>

      {/* 6 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b lg:border-r border-gray-300">
        <img loading="lazy" src={avaya} alt="avaya" className="h-10 sm:h-12 md:h-20 max-w-[140px] w-full object-contain" />
      </div>

      {/* 7 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b border-gray-300 sm:border-r-0">
        <img loading="lazy" src={yealink} alt="yealink" className="h-12 sm:h-16 md:h-20 max-w-[140px] w-full object-contain" />
      </div>

      {/* 8 */}
      <div className="flex items-center justify-center p-8 border-b sm:border-r border-l sm:p-8 lg:p-10 md:border-b border-gray-300 lg:border-r-0">
        <img loading="lazy" src={yeastar} alt="yeastar" className="h-14 sm:h-16 md:h-20 max-w-[140px] w-full object-contain" />
      </div>

      {/* 9 */}
      <div className="flex items-center justify-center p-8 sm:border-r-0 sm:p-8 lg:p-10 border-r md:border-l border-b md:border-b sm:border-l-0 sm:border-b lg:border-r md:border-r-0 lg:border-b lg:border-l-0 ">
        <img loading="lazy" src={suprema} alt="suprema" className="h-12 sm:h-16 md:h-20 max-w-[150px] w-full object-contain" />
      </div>

      {/* 10 */}
      <div className="flex items-center justify-center p-8 lg:border-b border-b sm:border-r sm:p-8 lg:p-10">
        <img loading="lazy" src={dlink} alt="dlink" className="h-12 sm:h-16 md:h-20 max-w-[130px] w-full object-contain" />
      </div>

      {/* 11 */}
      <div className="flex items-center justify-center p-8 sm:p-8  lg:p-10 border-b  border-gray-300 sm:border-r-0">
        <img loading="lazy" src={origin} alt="origin" className="h-16 sm:h-16 md:h-20 max-w-[180px] w-full object-contain" />
      </div>

      {/* 12 */}
      <div className="flex items-center justify-center lg:border-b p-8 border-l sm:p-8 lg:p-10 border-b">
        <img loading="lazy" src={samsung} alt="samsung" className="h-14 sm:h-16 md:h-20 max-w-[140px] w-full object-contain" />
      </div>

     {/* 13 */}
    <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 lg:border-b-0  border-r border-b  border-gray-300">
      <img loading="lazy" src={cisco} alt="cisco" className="h-12 sm:h-16 md:h-20 max-w-[120px] w-full object-contain" />
    </div>

    {/* 14 */}
    <div className="flex items-center justify-center p-8 lg:border-b-0 border-b sm:p-8 lg:p-10  sm:border-r">
      <img loading="lazy" src={sonicwall} alt="sonicwall" className="h-14 sm:h-16 md:h-28 max-w-[150px] w-full object-contain" />
    </div>

    {/* 15 */}
    <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10  border-r border-gray-300 sm:border-r-0 md:border-b lg:border-b-0">
      <img loading="lazy" src={fortinet} alt="fortinet" className="h-14 sm:h-16 md:h-20 max-w-[170px] w-full object-contain" />
    </div>

    {/* 16 */}
    <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10  lg:border-l lg:border-r-0 border-gray-300 sm:border-r">
      <img loading="lazy" src={vembu} alt="vembu" className="h-14 sm:h-16 md:h-20 max-w-[180px] w-full object-contain" />
    </div>

    </div>
</section>
       {/* top clients end */}


      {/* Company Facts Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center text-center md:text-left gap-12">
          {/* Heading (Vertically centered on desktop) */}
          <div className="md:w-1/2 md:pl-8 flex h-full items-center">
            <h2 className="font-cabin text-4xl sm:text-5xl font-bold text-[#0F2B59] leading-tight">
              <span className="text-[#B41F1F]">Facts</span> about our{" "}
              <span className="block">company</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={growthIcon}
                alt="Growth Icon"
                className="w-6 h-6 mb-2"
                loading="lazy"
              />
              <h3 className="font-cabin text-4xl sm:text-5xl font-bold text-black">
                35%+
              </h3>
              <p className="font-cabin text-[#C72C28] text-base sm:text-lg font-semibold mt-1">
                Performance & Productivity Improvement
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={ideaIcon}
                alt="Bulb Icon"
                className="w-6 h-6 mb-2"
                loading="lazy"
              />
              <h3 className="font-cabin text-4xl sm:text-5xl font-bold text-black">
                60%+
              </h3>
              <p className="font-cabin text-[#C72C28] text-base sm:text-lg font-semibold mt-1">
                Increase in Digital Adoption
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={syncIcon}
                alt="Sync Icon"
                className="w-6 h-6 mb-2"
                loading="lazy"
              />
              <h3 className="font-cabin text-4xl sm:text-5xl font-bold text-black">
                2x
              </h3>
              <p className="font-cabin text-[#C72C28] text-base sm:text-lg font-semibold mt-1">
                Speed to Market
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="font-cabin text-sm font-semibold mt-6 text-[#696969] text-center md:text-end md:mr-10">
          *Stats based on the growth delivered to our clients
        </p>
      </section>

      {/* About Company Section start */}
      <section className="bg-white py-16 px-4 relative lg:ml-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">
          {/* Image */}
          <div className="w-full md:w-1/2 relative z-0 ml-0">
            <img
              src={meetingImg}
              alt="Team Meeting"
              className="rounded-[30px] w-full h-full max-h-[600px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0 relative z-10">
            <p className="font-cabin text-red-600 font-semibold lg:text-xl md:text-lg sm:text-base mb-2 text-center md:text-left">
              About our company
            </p>
            <h2 className="font-cabin font-bold text-4xl sm:text-5xl text-[#0F2B59] leading-tight mb-4 text-center md:text-left">
              We're the world's best
              <span className="block">
                <span className="text-red-600">IT solutions</span> company
              </span>
            </h2>

            {/* Overlapping Box */}
            <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-6 lg:absolute lg:left-[-110px] lg:w-[550px] z-20">
              <p className="font-cabin text-base font-normal text-[#696969] mb-4">
                At Megaviz, we believe in fostering a work environment that
                feels more like family. A Culture of Belonging means that every
                member of our team feels valued, respected, and supported. We
                have been helping businesses with their IT needs since 2010. We
                provide fast, reliable, outsourced onsite and remote IT support
                services.
              </p>
              <p className="font-cabin text-base font-normal text-[#696969] mb-4">
                We celebrate our differences through our Employee Resource
                Groups and learn from each other through mentorship programs. We
                also enjoy regular team-building activities and social events to
                build strong bonds.
              </p>

              <Link to="/aboutUs">
                <button className="font-cabin group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-4 rounded-full transition-colors duration-300">
                  Learn More
                  <img
                    src={arrowIcon}
                    alt="Arrow"
                    className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Company Section end */}

      {/* service serction start */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-cabin text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#0F2B59]">Our</span>{" "}
            <span className="text-red-600">Services</span>
          </h2>
          <p className="font-cabin text-[#000000BF] font-normal mb-12 max-w-lg mx-auto text-center leading-[1.6]">
            Start your amazing IT experience with us.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              className=" relative group bg-[#FEE6DC] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer"
            >
              <div className="z-10 text-left pr-20">
                <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                  IT <span className="block">Consultancy</span>
                </h3>
                <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                  Automate the entire cycle of build, provisioning, and
                  deployment process with our DevOps experts & agile processes.
                </p>
              </div>
              <img
                src={card01}
                alt="IT Consultancy"
                className=" absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]"
                loading="lazy"
              />
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              className="group relative bg-[#DFF7EA] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer"
            >
              <div className="z-10 text-left pr-36">
                <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                  Infrastructure <span className="block">& Cloud</span>
                </h3>
                <p className="font-cabin text-sm text-[#696969] font-normal leading-snug">
                  Secure And Managed Solutions To Streamline Cloud Adoption,
                  Development, And Migrat ion For Businesses.
                </p>
              </div>
              <img
                src={card02}
                alt="Infrastructure & Cloud"
                className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]"
                loading="lazy"
              />
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              className="group relative bg-[#FEEFC1] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer"
            >
              <div className="z-10 text-left pr-24">
                <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                  Cyber Security <span className="block">Solutions</span>
                </h3>
                <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                  Integrating AI To Solve The Toughest Business Problems Through
                  The Next-Generation Artificial Intelligence.
                </p>
              </div>
              <img
                src={card03}
                alt="Cyber Security Solutions"
                className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]"
                loading="lazy"
              />
            </div>

            {/* Card 4 */}
            <div
              data-aos="fade-up"
              className="group relative bg-[#EBE2F2] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer"
            >
              <div className="z-10 text-left pr-20">
                <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                  System <span className="block">Monitoring</span>
                </h3>
                <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                  Tap Into New Tech Expertise, And Build Your Technology Teams
                  With A Dedicated, Self Sufficient Engineering Team Integrated
                  With Your Organization.
                </p>
              </div>
              <img
                src={card04}
                alt="System Monitoring"
                className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]"
                loading="lazy"
              />
            </div>

            {/* Card 5 */}
            <div
              data-aos="fade-up"
              className="group relative bg-[#FEEFC1] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer"
            >
              <div className="z-10 text-left pr-24">
                <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2 whitespace-nowrap">
                  Backup Solutions
                </h3>
                <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                  Developing IoT Solutions & Accelerators, That Include
                  End-To-End Digital Execution Capabilities Enabling Clients To
                  Build And Launch New Digital Products.
                </p>
              </div>
              <img
                src={card05}
                alt="Backup Solutions"
                className="absolute bottom-0 right-[-20px] w-[170px] h-[170px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]"
                loading="lazy"
              />
            </div>

            {/* Card 6 */}
            <div
              data-aos="fade-up"
              className="group relative bg-[#EBE2F2] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer"
            >
              <div className="z-10 text-left pr-24">
                <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                  E-Commerce
                </h3>
                <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                  Building Smart Solutions For Leading E-Commerce Brands With A
                  Single View Of Their Business And Customers Across Channels
                  Leveraging Real-Time Analytics And Reporting.
                </p>
              </div>
              <img
                src={card06}
                alt="E-Commerce"
                className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]"
                loading="lazy"
              />
            </div>

            {/* Card 7 */}
            <div
              data-aos="fade-up"
              className="group relative bg-[#DFF7EA] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer"
            >
              <div className="z-10 text-left pr-28">
                <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                  IT Support
                </h3>
                <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                  Automate The Entire Cycle Of Build, Provisioning, And
                  Deployment Process With Our DevOps Experts & Agile Processes.
                </p>
              </div>
              <img
                src={card07}
                alt="IT Support"
                className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]"
                loading="lazy"
              />
            </div>

            {/* Card 8 */}
            <div
              data-aos="fade-up"
              className="group relative bg-[#FEE6DC] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer"
            >
              <div className="z-10 text-left pr-24">
                <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                  Telephony
                </h3>
                <p className="font-cabin text-sm text-[#696969] font-normal">
                  Building Bespoke Software Applications Using Cutting-Edge
                  Tools That Are Scalable, Flexible, And Easy To Manage.
                </p>
              </div>
              <img
                src={card08}
                alt="Telephony"
                className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]"
                loading="lazy"
              />  
            </div>
          </div>
        </div>
      </section>
      {/* service serction end */}


      {/* Why choose us start */}

      <section className="bg-white py-16 px-4 relative lg:ml-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">
          {/* Left Image */}
          <div className="w-full md:w-1/2 relative z-0 ml-0">
            <img
              src={meetingImg2}
              alt="Team Working"
              className="rounded-[30px] w-full h-full max-h-[600px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0 relative z-10">
            <p className="font-cabin text-red-600 font-semibold lg:text-xl md:text-lg sm:text-base mb-2 text-center md:text-left">
              Why choose us
            </p>
            <h2 className="font-cabin font-bold text-4xl sm:text-5xl text-[#0F2B59] leading-tight text-center md:text-left">
              We promise high
              <span className="block mt-1 lg:mt-3">
                quality <span className="text-red-600">IT services</span>
              </span>
            </h2>

            {/* Overlapping Box */}
            <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-10 lg:absolute lg:left-[-110px] lg:w-[550px] z-20">
              <h3 className="font-cabin text-2xl font-semibold mb-4 text-[#000000]">
                Why Choose us?
              </h3>
              <p className="font-cabin text-base font-normal text-[#696969] mb-4">
                At Megaviz, we believe in fostering a work environment that
                feels more like family. A Culture of Belonging means that every
                member of our team feels valued, respected, and supported.
              </p>
              <p className="font-cabin text-base font-normal text-[#696969] mb-4">
                We celebrate our differences through our Employee Resource
                Groups and learn from each other through mentorship programs. We
                also enjoy regular team-building activities and social events to
                build strong bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us end */}
      

      {/* Meet Our Client Start */}

      <section className="bg-white py-20 px-4 lg:px-24">
        {/* Heading Section */}
        <div className="text-center mb-12 px-4">
          <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2B59]">
            Meet Our<span className="text-red-600"> Clients</span>
          </h2>
          <p className="font-cabin text-[#696969] mt-4 text-base sm:text-lg font-normal">
            We have earned the trust of 100's of customers,
            <span className="block">including these fine companies</span>
          </p>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0">

{/* client logos */}
      {/* 1 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b border-r border-gray-300">
        <img loading="lazy" src={govOfDubai} alt="govOfDubai" className="h-20  sm:h-16 md:h-24 max-w-[240px] w-full object-contain" />
      </div>

      {/* 2 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b sm:border-r">
        <img loading="lazy" src={dubaiMuniciplity} alt="dubaiMuniciplity" className="h-20 sm:h-16 md:h-28 max-w-[240px] w-full object-contain" />
      </div>

      {/* 3 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b border-r border-gray-300 sm:border-r-0">
        <img loading="lazy" src={dubaiCustoms} alt="dubaiCustoms" className="h-20 sm:h-12 md:h-24 max-w-[240px] w-full object-contain" />
      </div>

      {/* 4 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b lg:border-l lg:border-r-0 border-gray-300 sm:border-r">
        <img loading="lazy" src={dubaiPolice} alt="dubaiPolice" className="h-20 sm:h-16 md:h-24 max-w-[240px] w-full object-contain" />
      </div>

      {/* 5 */}
      <div className="flex items-center justify-center p-10 sm:p-8 lg:p-10 border-b border-r border-gray-300">
        <img loading="lazy" src={emarine} alt="emarine" className="h-20 sm:h-12 md:h-24 max-w-[240px] w-full object-contain" />
      </div>

      {/* 6 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b lg:border-r border-gray-300">
        <img loading="lazy" src={brightLerners} alt="brightLerners" className="h-20 sm:h-12 md:h-28 max-w-[240px] w-full object-contain" />
      </div>

      {/* 7 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 border-b border-gray-300 sm:border-r-0">
        <img loading="lazy" src={dubaiEconomy} alt="dubaiEconomy" className="h-20 sm:h-16 md:h-24 max-w-[240px] w-full object-contain" />
      </div>

      {/* 8 */}
      <div className="flex items-center justify-center p-8 border-b sm:border-r border-l sm:p-8 lg:p-10 md:border-b border-gray-300 lg:border-r-0">
        <img loading="lazy" src={dubaiSme} alt="dubaiSme" className="h-20 sm:h-16 md:h-28 max-w-[240px] w-full object-contain" />
      </div>

      {/* 9 */}
      <div className="flex items-center justify-center p-8 sm:border-r-0 sm:p-8 lg:p-10 border-r md:border-l border-b md:border-b sm:border-l-0 sm:border-b lg:border-r md:border-r-0 lg:border-b lg:border-l-0">
        <img loading="lazy" src={ega} alt="ega" className="h-16 sm:h-16 md:h-20 max-w-[150px] w-full object-contain" />
      </div>

      {/* 10 */}
      <div className="flex items-center justify-center p-8 border-b sm:border-b-0 sm:border-r lg:border-b sm:p-8 lg:p-10 md:border-b ">
        <img loading="lazy" src={emiratesInsurance} alt="emiratesInsurance" className="h-20 sm:h-16 md:h-24 max-w-[240px] w-full object-contain" />
      </div>

      {/* 11 */}
      <div className="flex items-center justify-center p-8 sm:p-8  lg:p-10  lg:border-b border-gray-300 border-b">
        <img loading="lazy" src={electronicGovAuthority} alt="Electronic Goverment Authority" className="h-20 sm:h-16 md:h-24 max-w-[240px] w-full object-contain" />
      </div>

      {/* 12 */}
      <div className="flex items-center justify-center p-8 border-l sm:p-8 lg:p-10 border-b">
        <img loading="lazy" src={dubaiWomenEstablish} alt="dubaiWomenEstablish" className="h-20 sm:h-16 md:h-24 max-w-[240px] w-full object-contain" />
      </div>

      {/* 13 */}
      <div className="flex items-center justify-center p-8 sm:p-8 lg:p-10 lg:border-b-0 border-b">
        <img loading="lazy" src={zulekhaHospital} alt="zulekhaHospital" className="h-20 sm:h-16 md:h-24 max-w-[240px] w-full object-contain" />
      </div>
      
      {/* 14 */}
      <div className="flex items-center justify-center p-8 border-l lg:border-r border-r-0 sm:p-8 lg:p-10 lg:border-b-0 border-b md:border-r">
        <img loading="lazy" src={dtc} alt="DTC" className="h-14 sm:h-16 md:h-20 max-w-[140px] w-full object-contain" />
      </div>

      {/* 15 */}
      <div className="flex items-center justify-center p-8  sm:p-8 lg:p-10 md:border-b lg:border-b-0 lg:border-r border-r md:border-r-0">
        <img loading="lazy" src={dubaiSouth} alt="Dubai South" className="h-20 sm:h-16 md:h-20 max-w-[240px] w-full object-contain" />
      </div>

      {/* 16 */}
      <div className="flex items-center justify-center p-8 md:border-r sm:p-8 lg:p-10 lg:border-r-0">
        <img loading="lazy" src={luxuryCarts} alt="Luxury Carts" className="h-20 sm:h-16 md:h-24 max-w-[240px] w-full object-contain" />
      </div>  

    </div>
      </section>

     {/* Meet Our client end */}



{/* Testimonial Section start */}

  <Testimonials/>

{/* Testimonial Section end */}

    </>
  );
}

export default Homepage;
