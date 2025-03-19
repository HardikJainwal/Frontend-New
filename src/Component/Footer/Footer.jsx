import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import dseulogo from "../../assets/dseulogofullnew.svg";

const locationLink =
  "https://www.google.com/maps/place/Delhi+Skill+and+Entrepreneurship+University/@28.5824457,77.0600919,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1b1939555555:0x5cb3da8201a9355b!8m2!3d28.5824457!4d77.0626668!16s%2Fg%2F11jyk9d7qs?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";

const Footer = () => {
  return (
    <footer
      className="bg-white text-black py-8 border-t-4 border-gray-300 shadow-md"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Created by Hardik Jainwal */}
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            src={dseulogo}
            alt="DSEU Logo"
            className="mx-auto md:mx-0 mb-4 w-50 h-20 cursor-pointer"
          />
          {/* College location  */}
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
              G/Floor, Delhi Skill and Entrepreneurship University,
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
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#1DA1F2", fontSize: "20px" }}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#0077B5", fontSize: "20px" }}
              />
            </a>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#4267B2", fontSize: "20px" }}
              />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pl-4">
          <h3 className="text-lg font-semibold border-b-2 border-orange-400 hover:border-blue-500 inline-block mb-4 transition-colors">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/departments" className="hover:text-blue-600">
                Departments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Centres & CoEs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Schools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Anti-Sexual Harassment Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Right to Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Office of Career Services
              </a>
            </li>
            <li>
              {/* <a href="#" className="hover:text-blue-800">
                Switch to Dark Mode
              </a> */}
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold border-b-2 border-orange-400 inline-block mb-4 hover:border-blue-500">
            Explore
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Rules
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Campus Life
              </a>
            </li>
            <li>
              {/* <a href="#" className="hover:text-blue-600">
                Institute Newsletter
              </a> */}
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Educational Programmes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                PhD Seminar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Climate Action Plan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
