import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import PlacementCarousel from "./PlacementCarousel";
import HeadingText from "../Reusable/HeadingText";

import { placementStats } from "../../constants/PLACEMENT.JS";
import { carouselImages } from "../../constants/PLACEMENT.JS";
import { invitationData, contacts } from "../../constants/PLACEMENT.JS";

const Placement = () => {
  return (
    <div className="w-4/5 mx-auto my-10 text-gray-800">
      <div className="mb-12">
        <HeadingText heading={"Invitation"} />

        <div className="mt-4 space-y-4">
          {invitationData.content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

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

          <PlacementCarousel
            images={carouselImages}
            // heading="Company Highlights"
          />
        </div>
      </div>
    </div>
  );
};

export default Placement;
