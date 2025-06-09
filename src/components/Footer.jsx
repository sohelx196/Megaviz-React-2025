import React from "react";
import { Link } from "react-router-dom";

import megavizLogo from "../assets/images/megavizLogo.png";
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";
import instagramIcon from "../assets/icons/instagram.png";

function Footer() {
  return (
    <footer className="bg-white px-6 lg:px-24 py-14 pt-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
        {/* Logo + Description */}
        <div className="w-full lg:max-w-sm text-center lg:text-left">
          <Link to="/">
            <img
              src={megavizLogo}
              alt="Megaviz Logo"
              className="mb-4 mx-auto lg:mx-0 w-32 h-auto md:w-36 lg:w-40 lg:h-10"
              loading="lazy"
            />
          </Link>
          <p className="font-poppins  text-gray-600 text-xs sm:text-sm  max-w-xs mx-auto lg:mx-0  ">
            MegaViz helps enterprises to assess their current IT Infrastructure
            and evaluates whether an upgrade is required to justify their
            business needs.
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full lg:max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-16 text-sm text-gray-800 text-center lg:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="font-inter text-[#979FB4] font-semibold text-base mb-4 lg:mb-7">
              Stellar Page
            </h3>
            <ul className="font-inter flex flex-col gap-4 lg:gap-7">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutUs">About</Link>
              </li>
              <li>
                <Link to="">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-inter text-[#979FB4] font-semibold text-base mb-4 lg:mb-7">
              Product
            </h3>
            <ul className="font-inter flex flex-col gap-4 lg:gap-7">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="">Industries</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-inter text-[#979FB4] font-semibold text-base mb-4 lg:mb-7">
              Resources
            </h3>
            <ul className="font-inter flex flex-col gap-4 lg:gap-7">
              <li>
                <Link to="">Integration</Link>
              </li>
              <li>
                <Link to="">Integration Detail</Link>
              </li>
              <li>
                <Link to="">Sign Up</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-inter text-[#979FB4] font-semibold text-base mb-4 lg:mb-7">
              Company
            </h3>
            <ul className="font-inter flex flex-col gap-4 lg:gap-7">
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="">Let’s Create</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-12"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm text-[#505A71] gap-4 text-center lg:text-left">
        <p className="font-inter max-w-md lg:max-w-none">
          Copyright &copy;2025{" "}
          <span className="text-[#363D4F]">
            Megaviz. Designed by <span className="text-red-600">MegaViz</span>
          </span>
        </p>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/megavizco/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border hover:border-[#002699] w-10 transition-all duration-300 h-10 rounded-full border border-gray-200 flex items-center justify-center"
          >
            <img
              src={facebookIcon}
              alt="facebook-icon"
              className="w-6 h-6"
              loading="lazy"
            />
          </a>
          <a
            href="https://x.com/megavizco"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border hover:border-[#002699] w-10 transition-all duration-300 h-10 rounded-full border border-gray-200 flex items-center justify-center"
          >
            <img
              src={twitterIcon}
              alt="twitter-icon"
              className="w-6 h-6"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.instagram.com/megavizco/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border hover:border-[#002699] w-10 transition-all duration-300 h-10 rounded-full border border-gray-200 flex items-center justify-center"
          >
            <img
              src={instagramIcon}
              alt="instagram-icon"
              className="w-6 h-6"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
