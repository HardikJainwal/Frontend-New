import { useState } from "react";
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

  return (
    <footer
      className="bg-white text-black py-8 border-t-4 border-gray-300 shadow-md"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            src={dseulogo}
            alt="DSEU Logo"
            className="mx-auto md:mx-0 mb-4 w-50 h-20 cursor-pointer"
          />
          <p
            className="text-sm leading-5 my-1 hover:bg-gray-100 p-1 py-2 hover:cursor-pointer hover:rounded-lg transition"
            onClick={() => window.open(locationLink)}
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2"
              style={{ color: "#005CB9" }}
            />
            <span className="text-black">
              Delhi Skill and Entrepreneurship University,
              <br />
              Sector-9, Dwarka, New Delhi- 110077
            </span>
          </p>
          <p className="mt-4 text-sm">
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-2"
              style={{ color: "#005CB9" }}
            />
            011-2659-7135
            <br />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2"
              style={{ color: "#005CB9" }}
            />
            helpdesk@dseu.ac.in
            <br />
            <FontAwesomeIcon
              icon={faGlobe}
              className="mr-2"
              style={{ color: "#005CB9" }}
            />
            <a href="https://www.dseu.ac.in" className="text-blue-400">
              www.dseu.ac.in
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pl-4">
          <h3 className="text-lg font-semibold border-b-2 border-orange-400 hover:border-blue-500 inline-block mb-4 transition-colors">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-blue-600">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold border-b-2 border-orange-400 inline-block mb-4 hover:border-blue-500">
            Explore
          </h3>
          <ul className="space-y-2">
            {exploreLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-blue-600">
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex items-center">
              <span className="hover:text-blue-600 mr-3">Connect with Us</span>
              <div className="flex space-x-3">
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
                        style={{ color: item.color, fontSize: "20px" }}
                      />
                    </a>
                  ) : (
                    <div key={i} className="cursor-pointer">
                      <div onClick={() => setShowModal(true)}>
                        <FontAwesomeIcon
                          icon={item.icon}
                          style={{ color: item.color, fontSize: "20px" }}
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
