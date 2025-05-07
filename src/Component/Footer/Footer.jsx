import { useState, useEffect } from "react";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopUpModal from "./PopUpModal";
import dseulogo from "../../assets/dseulogofullnew.svg";
import {
  locationLink,
  socialLinks,
  exploreLinks,
  quickLinks,
} from "./constant.js";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  // Simulate fetching or incrementing visitor count with animation
  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount") || 0;
    const newCount = parseInt(storedCount) + 1;
    localStorage.setItem("visitorCount", newCount);

    // Animate counter
    let start = 0;
    const end = newCount;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setVisitorCount(end);
        clearInterval(timer);
      } else {
        setVisitorCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer
      className="bg-blue-50 text-black py-12 border-t-2 border-blue-300 shadow-lg"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            src={dseulogo}
            alt="DSEU Logo"
            className="mx-auto md:mx-0 mb-6 w-60 h-24 cursor-pointer"
          />
          <p
            className="text-base leading-6 my-2 hover:bg-blue-100 p-2 py-3 hover:cursor-pointer hover:rounded-lg transition"
            onClick={() => window.open(locationLink)}
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-3"
              style={{ color: "#1E40AF", fontSize: "1.25rem" }}
            />
            <span className="text-black">
              Delhi Skill and Entrepreneurship University,
              <br />
              Sector-9, Dwarka, New Delhi- 110077
            </span>
          </p>
          <p className="mt-6 text-base">
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-3"
              style={{ color: "#1E40AF", fontSize: "1.25rem" }}
            />
            011-2659-7135
            <br />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-3"
              style={{ color: "#1E40AF", fontSize: "1.25rem" }}
            />
            helpdesk@dseu.ac.in
            <br />
            <FontAwesomeIcon
              icon={faGlobe}
              className="mr-3"
              style={{ color: "#1E40AF", fontSize: "1.25rem" }}
            />
            <a href="https://www.dseu.ac.in" className="text-blue-600">
              www.dseu.ac.in
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pl-6">
          <h3 className="text-xl font-bold border-b-2 border-blue-400 inline-block mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-base hover:text-blue-600">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold border-b-2 border-blue-400 inline-block">
              Explore
            </h3>
            <div className="bg-blue-200 text-black px-6 py-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                <span className="font-bold text-lg">
                  {visitorCount.toLocaleString()} Visitors
                </span>
              </div>
            </div>
          </div>
          <ul className="space-y-3">
            {exploreLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-base hover:text-blue-600">
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex items-center">
              <span className="text-base hover:text-blue-600 mr-4">Connect with Us</span>
              <div className="flex space-x-4">
                {socialLinks.map((item, i) =>
                  !item.modal ? (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="social"
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        style={{ color: item.color, fontSize: "24px" }}
                      />
                    </a>
                  ) : (
                    <div key={i} className="cursor-pointer">
                      <div onClick={() => setShowModal(true)}>
                        <FontAwesomeIcon
                          icon={item.icon}
                          style={{ color: item.color, fontSize: "24px" }}
                        />
                      </div>
                      {showModal && (
                        <PopUpModal
                          title="Youtube Links"
                          onClose={() => setShowModal(false)}
                          links={item.sources}
                        />
                      )}
                    </div>
                  )
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;