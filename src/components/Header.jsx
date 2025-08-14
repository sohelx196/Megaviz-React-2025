import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/megavizLogo.png";
import hamburger from "../assets/icons/hamburger.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Left Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="megaviz logo"
            className="w-28 h-auto sm:w-20 sm:h-6 md:w-28 md:h-8 lg:w-40 lg:h-10"
            loading="lazy"
          />
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center pt-2">
          <ul className="flex space-x-8 text-base items-center">
            <li>
              <Link to="/" className=" font-poppins nav-link">
                <span className="top">Home</span>
                <span className="bottom">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className=" font-poppins nav-link">
                <span className="top">Capabilities</span>
                <span className="bottom">Capabilities</span>
              </Link>
            </li>
            <li>
              <Link to="/industries" className=" font-poppins nav-link">
                <span className="top">Industries</span>
                <span className="bottom">Industries</span>
              </Link>
            </li>
            <li>
              <Link to="aboutUs" className="font-poppins nav-link">
                <span className="top">About Us</span>
                <span className="bottom">About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/blogs" className=" font-poppins nav-link">
                <span className="top">Blogs</span>
                <span className="bottom">Blogs</span>
              </Link>
            </li>
            <li>
              <Link to="/caseStudies" className=" font-poppins nav-link">
                <span className="top">Case Studies</span>
                <span className="bottom">Case Studies</span>
              </Link>
            </li>
            <li>
              <Link to="/career" className=" font-poppins nav-link">
                <span className="top">Career</span>
                <span className="bottom">Career</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden lg:block">
          <button className="font-poppins font-medium text-base bg-red-600 text-white px-6 py-2 rounded-full border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-all duration-300">
            Let’s Talk
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-black focus:outline-none"
        >
          <img src={hamburger} alt="Menu" className="w-6 h-4 object-contain" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-base items-center">
            <li>
              <Link
                to="/"
                className="font-poppins nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="top">Home</span>
                <span className="bottom">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="font-poppins nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="top">Capabilities</span>
                <span className="bottom">Capabilities</span>
              </Link>
            </li>
            <li>
              <Link
                to="/industries"
                className="font-poppins nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="top">Industries</span>
                <span className="bottom">Industries</span>
              </Link>
            </li>
            <li>
              <Link
                to="/aboutUs"
                className="font-poppins nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="top">About Us</span>
                <span className="bottom">About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="font-poppins nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="top">Blogs</span>
                <span className="bottom">Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                to="/caseStudies"
                className="font-poppins nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="top">Case Studies</span>
                <span className="bottom">Case Studies</span>
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="font-poppins nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="top">Career</span>
                <span className="bottom">Career</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setMenuOpen(false)}
                className="font-poppins font-medium text-base bg-red-600 text-white px-6 py-2 rounded-full border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-all duration-300 w-full"
              >
                Let’s Talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
