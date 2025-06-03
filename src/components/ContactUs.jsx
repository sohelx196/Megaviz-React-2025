import { useState } from "react";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import twitterIcon from "../assets/icons/twitter.png";
import arrowIcon from "../assets/icons/arrorw.png";
import contactBackground from "../assets/images/Contact/contactDesign.png";

function ContactUs() {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/cb3bf75b64f7548d27f81a3dcdbc3ee0",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccessMessage("Your message has been successfully sent to MegaViz. We’ll get back to you shortly.");
        form.reset();
      } else {
        setSuccessMessage(" Submission failed. Please try again later.");
      }
    } catch {
      setSuccessMessage("Error occurred. Please check your internet connection.");
    } finally {
      setIsSending(false);
      setTimeout(() => setSuccessMessage(""), 4000);
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="px-4 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="mb-12 text-center lg:text-left lg:flex lg:justify-between lg:items-start">
          <div className="max-w-4xl">
            <p className="font-cabin text-[#C72C28] text-base font-semibold mb-3">
              Get Started
            </p>
            <h2 className="font-cabin font-bold text-[#102E52] text-[28px] sm:text-[36px] lg:text-[48px] leading-tight">
              <span className="text-[#C72C28]">Get in touch</span> with us. We’re here to
            </h2>
            <h2 className="font-cabin font-bold text-[#102E52] text-[28px] sm:text-[36px] lg:text-[48px] leading-tight">
              assist you.
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex lg:flex-col flex-row items-center lg:items-start gap-3 mt-6 lg:mt-0 justify-center">
            <a href="#" className="border border-[#102E52] rounded-full flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10">
              <img src={facebookIcon} alt="Facebook" className="w-4 lg:w-5" />
            </a>
            <a href="#" className="border border-[#102E52] rounded-full flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10">
              <img src={instagramIcon} alt="Instagram" className="w-4 lg:w-5" />
            </a>
            <a href="#" className="border border-[#102E52] rounded-full flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10">
              <img src={twitterIcon} alt="Twitter" className="w-4 lg:w-5" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="font-cabin block text-sm font-normal mb-1">Your Name</label>
              <input
                name="name"
                required
                type="text"
                className="font-cabin w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-2"
              />
            </div>
            <div>
              <label className="font-cabin block text-sm font-normal mb-1">Email Address</label>
              <input
                name="email"
                required
                type="email"
                className="font-cabin w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-2"
              />
            </div>
            <div>
              <label className="font-cabin block text-sm font-normal mb-1">
                Phone Number (optional)
              </label>
              <input
                name="mobile"
                type="text"
                className="font-cabin w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-2"
              />
            </div>
          </div>

          <div>
            <label className="font-cabin block text-sm font-normal mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="3"
              className="font-cabin w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-2 resize-none"
            ></textarea>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="font-cabin text-[#0F2B59] px-4 py-3 text-base mb-6 text-center">
              {successMessage}
            </div>
          )}

          {/* Submit Button */}
          {!successMessage && (
            <button
              type="submit"
              disabled={isSending}
              className={`font-cabin group flex items-center gap-2
              ${isSending ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"}
              text-white text-sm font-medium
              px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-4
              rounded-full transition-colors duration-300
              sm:text-sm lg:text-base`}
            >
              {isSending ? "Sending..." : "Leave us a message"}
              <img
                src={arrowIcon}
                alt="Arrow"
                className={`w-3 h-3 transition-transform duration-300 ${
                  isSending ? "" : "group-hover:rotate-45"
                }`}
              />
            </button>
          )}
        </form>
      </section>

      {/* Contact Info Section */}
      <section
        className="bg-no-repeat bg-cover bg-center px-4 py-16 sm:px-6 lg:px-12"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <div className="text-center lg:text-left lg:w-1/3 -mt-4">
            <p className="text-[#C72C28] text-sm sm:text-base font-medium mb-5 font-cabin">
              Our contact details
            </p>
            <h2 className="font-cabin text-[#102E52] text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-wide">
              <span className="block mb-2">We’d Love to Hear</span>
              <span className="block">From You.</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left lg:w-2/3">
            <div>
              <h4 className="font-cabin text-sm sm:text-base text-black font-bold mb-3 sm:mb-5">
                Email Address
              </h4>
              <div className="h-[3px] w-5 bg-black mb-3 mx-auto sm:mx-0"></div>
              <p className="font-inter text-sm sm:text-base font-bold">info@megaviz.co</p>
              <p className="font-inter text-xs sm:text-sm mt-1">
                <span className="block font-normal">Assistance hours:</span>
                <span className="block font-normal">Monday - Friday 6 am to 8 pm EST</span>
              </p>
            </div>
            <div>
              <h4 className="font-cabin text-sm sm:text-base text-black font-bold mb-3 sm:mb-5">
                Number
              </h4>
              <div className="h-[3px] w-5 bg-black mb-3 mx-auto sm:mx-0"></div>
              <p className="font-inter text-sm sm:text-base font-bold">+971 (04) 294-0653</p>
              <p className="font-inter text-sm sm:text-base font-bold">+971 (04) 294-0652</p>
            </div>
            <div>
              <h4 className="font-cabin text-sm sm:text-base text-black font-bold mb-3 sm:mb-5">
                Address
              </h4>
              <div className="h-[3px] w-5 bg-black mb-3 mx-auto sm:mx-0"></div>
              <p className="font-inter text-sm sm:text-base font-bold">
                <span className="block">Office#207, Dubai Tower,</span>
                <span className="block">Baniyas Square,</span>
                <span className="block">Dubai, UAE</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.206379021464!2d55.30488877455338!3d25.267786328839456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e798a5737f%3A0xc9745423c81ccd2d!2sDubai%20Tower!5e0!3m2!1sen!2sin!4v1747977945239!5m2!1sen!2sin"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dubai Tower Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
