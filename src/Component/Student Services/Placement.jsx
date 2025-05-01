import { FaPhoneAlt, FaEnvelope, } from "react-icons/fa";
import { ArrowRightCircle } from "lucide-react";
import PlacementCarousel from "./PlacementCarousel";
import HeadingText from "../Reusable/HeadingText";

import { placementStats, carouselImages, invitationData, contacts } from "../../constants/PLACEMENT.JS";

const Placement = () => {
  return (
    <div className="w-4/5 mx-auto my-10 text-gray-800">
      {/* Invitation Section */}
      <div className="mb-12">
        <HeadingText heading={"Invitation"} />
        <div className="mt-4 space-y-4">
          {invitationData.content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Placement Policy Section */}
      <div className="mb-12">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Placement Policy
          </h2>
          <div className="w-16 h-1 bg-orange-500 mt-2"></div> {/* Orange underline */}
        </div>
        <div className="mt-4">
          <p className="text-gray-600 leading-relaxed text-justify mb-4">
            Our placement policy outlines the guidelines and procedures for student placements, ensuring a transparent and fair process. Access the detailed policy document below.
          </p>
          <a
            href="/Placement%20Policy%20DSEU%202024.pdf" // Updated path to match the file in public folder
            download
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <ArrowRightCircle className="text-blue-600" />
            <span className="text-lg">Placement Policy Document</span>
          </a>
        </div>
      </div>

      {/* Contact Details Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Contact Details</h2>
        <div className="flex flex-wrap gap-6 md:mt-6 mt-4">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg w-full md:w-[45%] flex flex-col space-y-2 transition-transform hover:scale-105 hover:cursor-pointer hover:shadow-md hover:shadow-blue-200"
            >
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              {contact.contact && (
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt className="text-blue-500" />
                  <a
                    href={`tel:${contact.contact}`}
                    className="hover:text-blue-600 hover:underline pointer-events-auto md:pointer-events-none"
                  >
                    {contact.contact}
                  </a>
                </p>
              )}
              {contact.email && (
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-orange-500" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-orange-600 hover:underline pointer-events-auto md:pointer-events-none"
                  >
                    {contact.email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Placement Statistics Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Placement Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {placementStats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg transition-transform hover:scale-105 hover:shadow-md"
              >
                <p className={`text-xl lg:text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-base text-gray-600">{stat.title}</p>
              </div>
            ))}
          </div>

          <PlacementCarousel images={carouselImages} />
        </div>
      </div>
    </div>
  );
};

export default Placement;