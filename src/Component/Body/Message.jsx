import React from "react";
import { ArrowRight } from "lucide-react";
import DG from "../../assets/DG.jpg";
import VCsir from "../../assets/VCsir.jpg";

const leaders = [
  {
    title: "Hon'ble Chancellor's Desk",
    name: "Shri Vinay Kumar Saxena",
    image: DG,
    message:
      "Make DSEU a nationally competitive university known for its accomplishments and contributions to society, by creating a community of learners that celebrates diversity, promotes excellence, and makes a transformative impact on society and in the technology-driven world.",
    link: "https://lg.delhi.gov.in/",
  },
  {
    title: "Vice Chancellor's Desk",
    name: "Prof Ashok Kumar Nagawat",
    image: VCsir,
    message:
      "Making DSEU a nationally competitive university known for its accomplishments and contributions to society, by creating a community of learners that celebrates diversity, promotes excellence, and makes a transformative impact on society and in the technology-driven world.",
    link: "/vice-chancellor",
  },
];

const Message = () => {
  return (
    <div className="w-full bg-blue-600 bg-opacity-30 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-blue-600 bg-opacity-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="flex-grow md:ml-6 md:mt-0 text-center md:text-left">
                <h2 className="text-xl font-extrabold text-center text-white mb-4  font-sans">
                  {leader.title}
                  <div className="mt-1 mx-auto w-[125px] h-1 bg-orange-400 rounded"></div>
                </h2>
                <p className="text-white text-sm leading-relaxed mb-4">
                  {leader.message}
                </p>
                <div className="text-white font-semibold mb-4">
                  ~{leader.name}
                </div>
                <a
                  href={leader.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded-md inline-flex items-center space-x-2 hover:bg-blue-800 transition-colors"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;
