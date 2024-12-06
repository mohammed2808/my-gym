import React, { useState, useEffect } from "react";
import "./input.css";
import { Link, useLocation } from "react-router-dom";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const slides = ["src/aboutus.jpg", "src/aboutus2.jpg"];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll
    });
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

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the height of the entire page
        behavior: "smooth", // Smooth scroll
      });
    }, 100); // Add a slight delay to ensure the page is loaded
  };

  return (
    <>
      {/* Slider */}
   

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

      {/* Add the Contact Section at the bottom of your page */}
   
      <div className="bg-black flex flex-col pt-40   text-gray-300 min-h-screen">
      <div className='flex  justify-center items-center '>
      <button className=' fixed z-20 right-2 bottom-4 border-e-red-500 '
      onClick={scrollToTop}
      
      
      ><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#10B981"><path d="M440-320h80v-168l64 64 56-56-160-160-160 
      160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 
      0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></button>
    </div>
      {/* Hero Section */}
      <section className="relative bg-black text-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-green-500 uppercase">
            Welcome to Iron Pulse Center
          </h1>
          <p className="mt-6 text-lg">
            Your journey to strength, health, and confidence begins here.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/1500x500"
          alt="Hero Image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10"
        />
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-500 mb-6 text-center uppercase">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            At <span className="text-green-500 font-bold">Iron Pulse Center</span>, we strive to empower individuals to reach their full potential through fitness, discipline, and community. Our goal is to create a space where every member feels motivated and supported on their fitness journey.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-green-500 mb-6 uppercase">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our gym is equipped with cutting-edge machines, free weights, and functional training areas. Whether you’re into weightlifting, cardio, or HIIT, we have everything you need to succeed.
            </p>
          </div>
          <img
                src="src/abou1.jpg"
            alt="Facilities"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="src/about2.jpg"
            alt="Trainers"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold text-green-500 mb-6 uppercase">
              Meet Our Expert Trainers
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our certified trainers bring years of experience to help you reach your fitness goals. They’ll guide you with personalized plans, technique corrections, and unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-500 mb-6 uppercase">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Become part of a fitness family that thrives on motivation and camaraderie. From group classes to community challenges, we’re stronger together.
          </p>
          <img
             src="src/about3.jpg"
            alt="Community"
            className="rounded-lg shadow-lg mt-8"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-green-500 text-center text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold uppercase">Ready to Start?</h2>
          <p className="mt-4 text-lg">
            Your fitness journey awaits. Visit us at Iron Pulse Center and take the first step towards achieving your goals.
          </p>
          <button className="mt-6 px-8 py-3 bg-black text-green-500 font-bold rounded-lg shadow hover:bg-green-700 hover:text-white transition">
            Join Now
          </button>
        </div>
      </section>
    </div>
    </>
  );
}

export default About;
