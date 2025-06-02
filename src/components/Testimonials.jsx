import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import starIcon from "../assets/icons/star.png";
import person01 from "../assets/icons/person01.png";

const testimonials = [
  {
    id: 1,
    name: "Mr. Ali Asgar",
    text: "As a business with complex IT requirements we find Mega Vision Computers Trading LLC helpful and on call 24/7. They have often fixed problems late at night as we cannot close our systems until late because of our home workers. Offering great value and advice with many money saving applications, so important in this day and age.",
    avatar: person01,
  },
  {
    id: 2,
    name: "Mr. Ali Asgar",
    text: "As a business with complex IT requirements we find Mega Vision Computers Trading LLC helpful and on call 24/7. They have often fixed problems late at night as we cannot close our systems until late because of our home workers. Offering great value and advice with many money saving applications, so important in this day and age.",
    avatar: person01,
  },
  {
    id: 3,
    name: "Mr. Ali Asgar",
    text: "As a business with complex IT requirements we find Mega Vision Computers Trading LLC helpful and on call 24/7. They have often fixed problems late at night as we cannot close our systems until late because of our home workers. Offering great value and advice with many money saving applications, so important in this day and age.",
    avatar: person01,
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  
  // Swipe Handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
    onSwipedRight: () =>
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      ),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-10 ">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-bold text-xl text-[#002699]">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F2B59] mt-2">
          See what people are
          <span className="block">
            saying <span className="text-red-600">about us</span>
          </span>
        </h2>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden" {...swipeHandlers}>
        <div className="w-full max-w-[90%] mx-auto rounded-xl border border-gray-200 shadow-sm p-6 transition hover:shadow-black hover:shadow-md">
          <div className="flex justify-start mb-4">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={starIcon}
                alt="star icon"
                className="w-5 h-5 mx-0.5"
                loading="lazy"
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 font-medium mb-6">
            “{testimonials[activeIndex].text}”
          </p>
          <div className="flex items-center gap-3 mt-auto">
            <img
              src={testimonials[activeIndex].avatar}
              alt={testimonials[activeIndex].name}
              className="w-10 h-10 rounded-full border-2 border-blue-600"
              loading="lazy"
            />
            <p className="font-semibold text-black">
              - {testimonials[activeIndex].name}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-red-600 scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between transition hover:shadow-black hover:shadow-md"
          >
            <div>
              <div className="flex justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={starIcon}
                    alt="star icon"
                    className="w-5 h-5 mx-0.5"
                    loading="lazy"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 font-medium mb-6">
                “{testimonial.text}”
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full border-2 border-blue-600"
                loading="lazy"
              />
              <p className="font-semibold text-black">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
