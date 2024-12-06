import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const navigate = useNavigate();

  const slides = ["src/firstback.jpg", "src/secondback.jpg.jpg", "src/thirdback.jpg"];

  const show = () => {
    setIsVisible(true); // Always set visibility to true
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the bottom of the page after the page is fully loaded
  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the height of the entire page
        behavior: "smooth", // Smooth scroll
      });
    }, 100); // Add a slight delay to ensure the page is loaded
  };
  const scrollToMembership = () => {
    setTimeout(() => {
      const membershipSection = document.querySelector("#membership");
      if (membershipSection) {
        membershipSection.scrollIntoView({
          behavior: "smooth", // Smooth scroll
        });
      }
    }, 100); // Slight delay to ensure the page is ready
  };
 
  // Function to handle the menu toggle for smaller screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Slider */}
      <div  className="slider-container z-30   ">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
        ></div>
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-0  w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-70" : "bg-transparent"
        }`}
        style={{ backdropFilter: isScrolled ? "blur(10px)" : "none" }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="px-10 flex-col text-white">
              <h2 className="text-5xl text-green-500 font-title mt-4">Iron</h2>
              <h2 className="text-2xl font-title ml-10">Pulse Center</h2>
            </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden z-30  ">
            <button
              className="text-white text-3xl absolute right-14 top-10"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center gap-16">
            <ul className="text-white flex items-center justify-between h-24 px-16 gap-14">
            
              <li>
                <Link to="/" className="hover:underline font-title text-2xl">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menue" className="hover:underline font-title text-2xl">
                Programs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline font-title text-2xl">
                  About Us
                </Link>
              </li>
              <li>
  <a
    href="#membership"
    onClick={(e) => {
      e.preventDefault(); // Prevent default anchor behavior
      scrollToMembership();
    }}
    className="hover:underline font-title text-2xl"
  >
    Membership
  </a>
</li>

              <li>
                <a
                  href="#contact"
                  onClick={scrollToBottom}
                  className="hover:underline font-title text-2xl"
                >
                  Contact
                </a>
              </li>
            </ul>
           
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu} // Close menu when clicking outside
      >
        <div
          className=" p-5 bg-black bg-opacity-70 mt-2 text-white  absolute top-28 right-0 w-1/3 h-full "
          onClick={(e) => e.stopPropagation()} // Prevent closing menu when clicking inside
        >
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <Link to="/" onClick={toggleMenu} className="font-title text-2xl hover:underline ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menue" onClick={toggleMenu} className="font-title text-2xl hover:underline ">
              Programs
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="font-title text-2xl hover:underline ">
                About Us
              </Link>
            </li>
            <li>
            <a
    href="#membership"
    onClick={(e) => {
      e.preventDefault(); // Prevent default anchor behavior
      scrollToMembership();
    }}
    className="hover:underline font-title text-2xl"
  >
    Membership
  </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  scrollToBottom();
                  toggleMenu();
                }}
                className="font-title text-2xl hover:underline "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Centered Text */}
      <div className="absolute top-1/3 px-20 text-white flex-col  justify-center items-center text-center w-screen z-30 ">
      <div className="text-center">
  <h2 className="text-4xl sm:text-4xl md:text-7xl font-title font-bold text-white uppercase tracking-wide">
    Unleash Your Potential
  </h2>
  <h2 className="text-4xl sm:text-4xl md:text-7xl font-title font-bold text-green-500 uppercase tracking-wider">
    At Iron
    Pulse Center
  </h2>
  <h3 className="text-xl sm:text-xl md:text-2xl font-title font-medium text-gray-300 mt-4">
    Where Strength Meets Excellence
  </h3>
</div>


  <button
    className="bone mt-16 border-2 border-white font-title text-xl sm:text-xl px-4 py-2 rounded-lg hover:bg-white hover:text-green-500"
    onClick={() => navigate("/menue")}
  >
    Join us now

  </button>
</div>

    </>
  );
}

export default Header;
