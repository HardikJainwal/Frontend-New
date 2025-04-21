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
  faInstagram,
  faXTwitter,
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

        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pl-4">
          <h3 className="text-lg font-semibold border-b-2 border-orange-400 hover:border-blue-500 inline-block mb-4 transition-colors">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/Courses" className="hover:text-blue-600">
                Programs
              </a>
            </li>
            <li>
              <a href="/placement" className="hover:text-blue-600">
                Placement
              </a>
            </li>
            <li>
              <a href="/academics/faculty" className="hover:text-blue-600">
                Faculties & Departments
              </a>
            </li>
            <li>
              <a href="/recruitment" className="hover:text-blue-600">
                Recruitment
              </a>
            </li>
            <li>
              <a
                href="/administration/administrative"
                className="hover:text-blue-600"
              >
                Administrative
              </a>
            </li>
            <li>
              <a href="/academics/regulations" className="hover:text-blue-600">
                Academic Regulations
              </a>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold border-b-2 border-orange-400 inline-block mb-4 hover:border-blue-500">
            Explore
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about-us/About-the-University"
                className="hover:text-blue-600"
              >
                About University
              </a>
            </li>
            <li>
              <a href="/ncc" className="hover:text-blue-600">
                Student Life
              </a>
            </li>
            <li>
              <a href="/amenities/Library" className="hover:text-blue-600">
                Library
              </a>
            </li>
            <li>
              <a
                href="/about-us/Vision-and-Mission"
                className="hover:text-blue-600"
              >
                Vision & Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Fee Refund Policy
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-blue-600 mr-3">
                Connect with Us
              </a>
              <div className="flex space-x-3">
                <a
                  href="https://x.com/dseu_official?lang=en"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    style={{ color: "#000000", fontSize: "20px" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/school/delhi-skill-and-entrepreneurship-university/?originalSubdomain=in"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#0A66C2", fontSize: "20px" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/dseuofficial/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#1877F2", fontSize: "20px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/dseu_official"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#E1306C", fontSize: "20px" }}
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
