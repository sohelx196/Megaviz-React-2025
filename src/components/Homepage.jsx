import React from 'react'


import { Link } from 'react-router-dom';

import heroBgTop from '../assets/images/main_Img/heroBgTop.png';
import heroBgBottom from '../assets/images/main_Img/heroBgBottom.png';
import arrowIcon from '../assets/icons/arrorw.png';
import mace01 from '../assets/images/mace01.png';
import mace02 from '../assets/images/mace02.png';
import mace03 from '../assets/images/mace03.png';
import mace04 from '../assets/images/mace04.png';
import mace05 from '../assets/images/mace05.png';


import growthIcon from '../assets/icons/growth.png';
import ideaIcon from '../assets/icons/idea.png';
import syncIcon from '../assets/icons/sync.png';
import meetingImg from '../assets/images/main_Img/meeting01.png';



import card01 from "../assets/images/cards_img/homepageCards/card01.png";
import card02 from "../assets/images/cards_img/homepageCards/card02.png";
import card03 from "../assets/images/cards_img/homepageCards/card03.png";
import card04 from "../assets/images/cards_img/homepageCards/card04.png";
import card05 from "../assets/images/cards_img/homepageCards/card05.png";
import card06 from "../assets/images/cards_img/homepageCards/card06.png";
import card07 from "../assets/images/cards_img/homepageCards/card07.png";
import card08 from "../assets/images/cards_img/homepageCards/card08.png";



// Meet Our client images 
import maceImg from "../assets/images/OurClient/mace.png";
import mundiPharmaImg from "../assets/images/OurClient/mundi_pharma.png";
import cbreImg from "../assets/images/OurClient/cbre.png";
import astraZenecaImg from "../assets/images/OurClient/astra_zeneca.png";
import msAmlinImg from "../assets/images/OurClient/ms_amlin.png";
import ricsImg from "../assets/images/OurClient/rics.png";
import moneyPensionImg from "../assets/images/OurClient/money&pension.png";
import vivoEnergyImg from "../assets/images/OurClient/vivo_energy.png";
import impellamImg from "../assets/images/OurClient/impellam.png";
import costaCoffeeImg from "../assets/images/OurClient/costa_coffee.png";
import quilterInvesterImg from "../assets/images/OurClient/quilter_Invester.png";
import babcockImg from "../assets/images/OurClient/babcock.png";


import meetingImg2 from "../assets/images/main_Img/meeting02.png";


// Testimonial Section
import Testimonials from './Testimonials';





function Homepage() {


  return (
    <>
 {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4">
        {/* Background Images */}
        <img src={heroBgTop} alt="Top Background" className="absolute top-0 left-0 w-full h-auto object-cover z-0 pointer-events-none" loading='lazy'/>
        <img src={heroBgBottom} alt="Bottom Background" className="absolute bottom-0 left-0 w-full h-auto object-cover z-0 pointer-events-none" loading='lazy'/>

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
           MegaViz helps enterprises to assess their current IT Infrastructure and evaluates whether an upgrade is required to justify their business needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contactUs">
              <button className="cabin group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-3 sm:py-4 rounded-full transition-colors duration-300">
                Get in Touch now
                <img src={arrowIcon} alt="Arrow" className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45" />
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
      <section className="bg-white py-20 overflow-x-hidden">
        <div className="container mx-auto text-center px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex justify-center items-center order-1">
              <img src={mace01} alt="Client 1" className="max-w-full h-auto w-20 sm:w-24 md:w-28"  loading="lazy"/>
            </div>
            <div className="flex justify-center items-center order-2">
              <img src={mace02} alt="Client 2" className="max-w-full h-auto w-24 sm:w-28 md:w-36"  loading="lazy"/>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center items-center order-3">
              <img src={mace03} alt="RICS Logo" className="max-w-full h-auto w-24 sm:w-28 md:w-32"  loading="lazy"/>
            </div>
            <div className="flex justify-center items-center order-4 md:order-3">
              <img src={mace04} alt="Client 4" className="max-w-full h-auto w-24 sm:w-28 md:w-32"  loading="lazy"/>
            </div>
            <div className="flex justify-center items-center order-5 md:order-4">
              <img src={mace05} alt="Client 5" className="max-w-full h-auto w-24 sm:w-28 md:w-32"  loading="lazy"/>
            </div>
          </div>
        </div>
      </section>


       {/* Company Facts Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-12">
          
          {/* Heading */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="font-cabin text-4xl sm:text-5xl font-bold text-[#0F2B59] leading-tight">
              <span className="text-[#B41F1F]">Facts</span> about our<br /> company
            </h2>
          </div>

          {/* Stats */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src={growthIcon} alt="Graph Icon" className="w-6 h-6 mb-2"  loading="lazy"/>
              <h3 className="font-cabin text-4xl sm:text-5xl font-bold text-black">35%+</h3>
              <p className="font-cabin text-[#C72C28] text-base sm:text-lg font-semibold mt-1">
                Performance & Productivity Improvement
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={ideaIcon} alt="Bulb Icon" className="w-6 h-6 mb-2"  loading="lazy"/>
              <h3 className="font-cabin text-4xl sm:text-5xl font-bold text-black">60%+</h3>
              <p className="font-cabin text-[#C72C28] text-base sm:text-lg font-semibold mt-1">
                Increase in Digital Adoption
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={syncIcon} alt="Sync Icon" className="w-6 h-6 mb-2"  loading="lazy"/>
              <h3 className="font-cabin text-4xl sm:text-5xl font-bold text-black">2x</h3>
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

      {/* About Company Section */}
      <section className="bg-white py-16 px-4 relative lg:ml-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">

          {/* Image */}
          <div className="w-full md:w-1/2 relative z-0 ml-0">
            <img 
              src={meetingImg} 
              alt="Team Image" 
              className="rounded-[30px] w-full h-full max-h-[600px] object-cover"  loading="lazy"/>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0 relative z-10">
            <p className="font-cabin text-red-600 font-semibold lg:text-xl md:text-lg sm:text-base mb-2 text-center md:text-left">
              About our company
            </p>
            <h2 className="font-cabin font-bold text-4xl sm:text-5xl text-[#0F2B59] leading-tight mb-4 text-center md:text-left">
              We're the world's best <br />
              <span className="text-red-600">IT solutions</span> company
            </h2>

            {/* Overlapping Box */}
            <div className="bg-white shadow-xl rounded-2xl p-10 text-gray-700 mt-6 lg:absolute lg:left-[-110px] lg:w-[550px] z-20">
              <p className="font-cabin text-base font-normal text-[#696969] mb-4">
                At Megaviz, we believe in fostering a work environment that feels more like family. A Culture of Belonging means that every member of our team feels valued, respected, and supported. We have been helping businesses with their IT needs since 2010. We provide fast, reliable, outsourced onsite and remote IT support services.
              </p>
              <p className="font-cabin text-base font-normal text-[#696969] mb-4">
                We celebrate our differences through our Employee Resource Groups and learn from each other through mentorship programs. We also enjoy regular team-building activities and social events to build strong bonds.
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




{/* service serction start */}
 <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-cabin text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-[#0F2B59]">Our</span> <span className="text-red-600">Services</span>
        </h2>
        <p className="font-cabin text-[#000000BF] font-normal mb-12 max-w-lg mx-auto text-center leading-[1.6]">
          Start your amazing IT experience with us.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="relative bg-[#FEE6DC] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
            <div className="z-10 text-left pr-20">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                IT<br />Consultancy
              </h3>
              <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                Automate the entire cycle of build, provisioning, and deployment process with our DevOps experts & agile processes.
              </p>
            </div>
            <img src={card01} alt="IT Consultancy" className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0"  loading="lazy"/>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#DFF7EA] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
            <div className="z-10 text-left pr-36">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                Infrastructure<br />& Cloud
              </h3>
              <p className="font-cabin text-sm text-[#696969] font-normal leading-snug">
                Secure And Managed Solutions To Streamline Cloud Adoption, Development, And Migration For Businesses.
              </p>
            </div>
            <img src={card02} alt="Infrastructure & Cloud" className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0"  loading="lazy"/>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#FEEFC1] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
            <div className="z-10 text-left pr-24">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                Cyber Security<br />Solutions
              </h3>
              <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                Integrating AI To Solve The Toughest Business Problems Through The Next-Generation Artificial Intelligence.
              </p>
            </div>
            <img src={card03} alt="Cyber Security Solutions" className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0"  loading="lazy"/>
          </div>

          {/* Card 4 */}
          <div className="relative bg-[#EBE2F2] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
            <div className="z-10 text-left pr-20">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                System<br />Monitoring
              </h3>
              <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                Tap Into New Tech Expertise, And Build Your Technology Teams With A Dedicated, Self Sufficient Engineering Team Integrated With Your Organization.
              </p>
            </div>
            <img src={card04} alt="System Monitoring" className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0"  loading="lazy"/>
          </div>

          {/* Card 5 */}
          <div className="relative bg-[#FEEFC1] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
            <div className="z-10 text-left pr-24">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2 whitespace-nowrap">
                Backup Solutions
              </h3>
              <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                Developing IoT Solutions & Accelerators, That Include End-To-End Digital Execution Capabilities Enabling Clients To Build And Launch New Digital Products.
              </p>
            </div>
            <img src={card05} alt="Backup Solutions" className="absolute bottom-0 right-[-20px] w-[170px] h-[170px] object-contain z-0"  loading="lazy"/>
          </div>

          {/* Card 6 */}
          <div className="relative bg-[#EBE2F2] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
            <div className="z-10 text-left pr-24">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                E-Commerce
              </h3>
              <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                Building Smart Solutions For Leading E-Commerce Brands With A Single View Of Their Business And Customers Across Channels Leveraging Real-Time Analytics And Reporting.
              </p>
            </div>
            <img src={card06} alt="E-Commerce" className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0"  loading="lazy"/>
          </div>

          {/* Card 7 */}
          <div className="relative bg-[#DFF7EA] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
            <div className="z-10 text-left pr-28">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                IT Support
              </h3>
              <p className="font-cabin text-[14px] text-[#696969] font-normal leading-snug">
                Automate The Entire Cycle Of Build, Provisioning, And Deployment Process With Our DevOps Experts & Agile Processes.
              </p>
            </div>
            <img src={card07} alt="IT Support" className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0"  loading="lazy"/>
          </div>

          {/* Card 8 */}
          <div className="relative bg-[#FEE6DC] rounded-2xl p-5 w-full h-[240px] flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer">
            <div className="z-10 text-left pr-24">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#1E1E1E] mb-2">
                Telephony
              </h3>
              <p className="font-cabin text-sm text-[#696969] font-normal">
                Building Bespoke Software Applications Using Cutting-Edge Tools That Are Scalable, Flexible, And Easy To Manage.
              </p>
            </div>
            <img src={card08} alt="Telephony" className="absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0"  loading="lazy"/>
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
            className="rounded-[30px] w-full h-full max-h-[600px] object-cover"  loading="lazy"    />
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
            <h3 className="font-cabin text-2xl font-semibold mb-4 text-[#000000]">Why Choose us?</h3>
            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              At Megaviz, we believe in fostering a work environment that feels more like family.
              A Culture of Belonging means that every member of our team feels valued, respected, and supported.
            </p>
            <p className="font-cabin text-base font-normal text-[#696969] mb-4">
              We celebrate our differences through our Employee Resource Groups and learn from each other through mentorship programs.
              We also enjoy regular team-building activities and social events to build strong bonds.
            </p>
          </div>
        </div>

      </div>
    </section>

{/* Why choose us end */}



{/* Meet Our client start */}
    <section className="bg-white py-20 px-4 lg:px-24">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2B59]">
          Meet Our<span className="text-red-600"> Clients</span>
        </h2>
        <p className="font-cabin text-[#696969] mt-4 text-base sm:text-lg font-normal">
        We have earned the trust of 100's of customers, 
          <span className="block">
            including these fine companies
          </span>
        </p>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-b border-gray-300">
          <img
            src={maceImg}
            alt="Mace"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-b border-gray-300">
          <img
            src={mundiPharmaImg}
            alt="Mundi Pharma"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-b border-gray-300">
          <img
            src={cbreImg}
            alt="CBRE"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-b border-gray-300">
          <img
            src={astraZenecaImg}
            alt="AstraZeneca"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-b border-gray-300">
          <img
            src={msAmlinImg}
            alt="MS Amlin"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-b border-gray-300">
          <img
            src={ricsImg}
            alt="RICS"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-b border-gray-300">
          <img
            src={moneyPensionImg}
            alt="Money Service"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-b border-gray-300">
          <img
            src={vivoEnergyImg}
            alt="Vivo Energy"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-gray-300">
          <img
            src={impellamImg}
            alt="Impellam"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-gray-300">
          <img
            src={costaCoffeeImg}
            alt="Costa"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-r border-gray-300">
          <img
            src={quilterInvesterImg}
            alt="Quilter"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16 border-gray-300">
          <img
            src={babcockImg}
            alt="Babcock"
            className="h-16 sm:h-20 max-w-[140px] object-contain"  loading="lazy"   />
        </div>
      </div>
    </section>
{/* Meet Our client end */}



{/* Testimonial Section start */}

  <Testimonials/>

{/* Testimonial Section end */}


    </>
  )
}

export default Homepage