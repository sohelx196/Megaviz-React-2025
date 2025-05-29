import React from 'react'
import starIcon from "../assets/icons/star.png";
import person01 from "../assets/icons/person01.png";

function Testimonials() {
  return (

    <section className="px-4 sm:px-6 lg:px-16 py-10">
      <div className="text-center mb-12">
        <p className="font-bold text-xl text-[#002699]">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F2B59] mt-2">
          See what people are
          <br />
          <span>saying</span>{" "}
          <span className="text-red-600">about us</span>
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="w-full sm:w-[300px] h-full rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between transition hover:shadow-black hover:shadow-md">
          <div>
            <div className="flex justify-start mb-4">
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
            </div>
            <p className="text-base text-gray-600 font-medium mb-6">
              From day one, Megaviz has exceeded our expectations. Their tailored solutions perfectly align with our needs, helping us achieve our goals faster.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-auto">
            <img
              src={person01}
              alt="David Brown"
              className="w-10 h-10 rounded-full border-2 border-blue-600"
            />
            <p className="font-semibold text-black">- David Brown, CFO</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[300px] h-full rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between transition hover:shadow-black hover:shadow-md">
          <div>
            <div className="flex justify-start mb-4">
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
            </div>
            <p className="text-base text-gray-600 font-medium mb-6">
              From day one, Megaviz has exceeded our expectations. Their tailored solutions perfectly align with our needs, helping us achieve our goals faster.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-auto">
            <img
              src={person01}
              alt="David Brown"
              className="w-10 h-10 rounded-full border-2 border-blue-600"
            />
            <p className="font-semibold text-black">- David Brown, CFO</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[300px] h-full rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between transition hover:shadow-black hover:shadow-md">
          <div>
            <div className="flex justify-start mb-4">
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
              <img src={starIcon} alt="star icon" className="w-6 h-6 mx-0.5" />
            </div>
            <p className="text-base text-gray-600 font-medium mb-6">
              From day one, Megaviz has exceeded our expectations. Their tailored solutions perfectly align with our needs, helping us achieve our goals faster.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-auto">
            <img
              src={person01}
              alt="David Brown"
              className="w-10 h-10 rounded-full border-2 border-blue-600"
            />
            <p className="font-semibold text-black">- David Brown, CFO</p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        <span className="w-3 h-3 bg-red-600 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
    
  )
}

export default Testimonials