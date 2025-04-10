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
      "It is with immense pleasure that I extend my heartfelt greetings to both our new and returning students. As the gates of DSEU swing open to usher you into our halls of knowledge, innovation, and growth, I am filled with excitement for the journey that lies ahead.",
    link: "/chancellor",
  },
  {
    title: "Vice Chancellor's Desk",
    name: "Prof Ashok Kumar Nagawat",
    image: VCsir,
    message:
      "It gives me immense pleasure to extend my heartfelt greetings to all our new and returning students. As you step into our vibrant ecosystem of learning, I am excited for the transformative journey that lies ahead of you.",
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
              className="flex flex-col md:flex-row items-center md:items-start bg-blue-600 bg-opacity-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
            >
              <div className="flex-shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow md:ml-6 mt-6 md:mt-0 text-center md:text-left h-full">
                <div>
                  <div className="flex flex-col items-center mb-4">
                    <h2 className="text-xl font-extrabold text-white font-sans">
                      {leader.title}
                    </h2>
                    <div className="mt-1 w-[125px] h-1 bg-orange-400 rounded"></div>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-4 min-h-[96px]">
                    {leader.message}
                  </p>
                  <div className="text-white font-semibold mb-4">
                    ~{leader.name}
                  </div>
                </div>
                <div>
                  <a
                    href={leader.link}
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-700 text-white rounded-md inline-flex items-center space-x-2 hover:bg-blue-800 transition-colors"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;
