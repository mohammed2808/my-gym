import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-12 px-6">
        
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-between items-start gap-12">
      
          {/* About Us Section */}
          <div className="footer-section w-full lg:w-1/3">
            <h2 className="text-2xl mb-4 text-center lg:text-left font-semibold text-green-500">About Us</h2>
            <p className="text-sm text-gray-400 text-center lg:text-left">
              Iron Pulse Center Gym, we are dedicated to providing top-quality fitness services, offering personalized training and fitness programs for all levels. Our mission is to help you achieve your health and wellness goals. Learn more about our team and services on our{" "}
              <Link to="/about" className="underline text-green-400 hover:text-green-300">
                About Us page
              </Link>.
            </p>
            <h3 className="text-xl mt-7 mb-4 text-center lg:text-left text-green-500">Our Hours</h3>
            <p className="text-gray-400 text-sm text-center lg:text-left">Monday to Friday: 6:00 AM - 10:00 PM</p>
            <p className="text-gray-400 text-sm text-center lg:text-left">Saturday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-400 text-sm text-center lg:text-left">Sunday: Closed</p>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section w-full lg:w-1/3">
            <h2 className="text-2xl mb-4 text-center lg:text-left font-semibold text-green-500">Contact Us</h2>
            <p className="text-sm text-gray-400 text-center lg:text-left">📧 Email: ironpulsecenter@gmail.com</p>
            <p className="text-sm text-gray-400 text-center lg:text-left">📞 Phone: +123 456 7890</p>
            <p className="text-sm text-gray-400 text-center lg:text-left">📱 Mobile: +123 555 9876</p>
            <h3 className="text-xl mt-7 mb-4 text-center lg:text-left text-green-500">Follow Us</h3>
            <div className="flex justify-center lg:justify-start gap-6 mb-6">
              <a href="#" className="text-xl hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-xl hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-xl hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <h3 className="text-xl mb-4 text-center lg:text-left text-green-500">Stay Updated</h3>
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full sm:w-2/3 lg:w-4/5">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 rounded-sm text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute top-0 right-0 w-1/5 h-full bg-green-700 text-sm rounded-sm text-white hover:bg-green-600 focus:ring-2 focus:ring-green-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="footer-section w-full lg:w-1/3">
            <h2 className="text-2xl mt-2 mb-3 text-center lg:text-left font-semibold text-green-500">Our Location</h2>
            <div className="relative w-full h-56 sm:h-64 lg:h-72 mb-10">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.google.com/maps/embed?pb=...your-embedded-map-link..."
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Gym Location"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Copyright Section */}
        <div className="flex justify-center w-full">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Iron Pulse Center. Designed for your health. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
