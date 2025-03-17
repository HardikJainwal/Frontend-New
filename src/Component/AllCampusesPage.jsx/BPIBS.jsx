import React, { useState } from 'react';
import Shakarpur from "../../assets/Shakarpur.jpg";
import FacultyProfile from "./FacultyProfile";
import CoursesOffered from "./CoursesOffered";
import Highlights from './Highlights';

const BPIBS = () => {
  const [activeTab, setActiveTab] = useState('about');

  const content = {
    about: {
      title: "About Us",
      content:
        "Our newly established DSEU Mayur Vihar Campus is a highly updated and modern version of all DSEU campuses. The world-class infrastructure at this campus provides an excellent environment for students to grow, develop and receive a quality education. In the eastern heart of Delhi, Mayur Vihar opens rooms to new opportunities in varied, exciting, and unique career prospects. Having colleges like Maharaja Agrasen College dedicated to Arts, the area builds a sense of community and knowledge sharing for students pursuing this program. Students from programs like Applied Arts can reap the full benefit while ensuring smooth and convenient connectivity across Delhi, Noida, and Gurugram via Pink line Metro and DTC Delhi City Buses. Moreover, this campus is well-connected to office hubs of Noida and major job hubs in central Delhi and Gurugram, giving a variety of career options to the students. Apart from that, the fantastic connectivity of this campus invites students from different cultures, making this campus a confluence of cultures and giving distinctive exposure to the students. Located near Akshardham temple, an eternal place known for its classic art and architecture, provides the right inspiration to creative students at the campus. Our Mayur Vihar campus connects to both New Delhi and Noida. That way, this campus gives an excellent chance for students to explore their talents and access diverse career options from Delhi and Uttar Pradesh."
    },
    head: {
    title: "Campus Head",
    content: <FacultyProfile />
    },
    programs: {
      title: "Programs Offered",
      content:
        <CoursesOffered />
    },
    highlights: {
      title: "Campus Highlights",
      content:
        <Highlights />
    },
    location: {
      title: "Location",
      content:
        "Located near Akshardham temple, an eternal place known for its classic art and architecture, provides the right inspiration to creative students at the campus. Our Mayur Vihar campus connects to both New Delhi and Noida. That way, the campus gives an excellent chance for students to explore their talents and access diverse career options from Delhi and Uttar Pradesh."
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div
        className="w-full h-48 rounded-lg mb-6 flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${Shakarpur})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>


        <h1 className="text-3xl font-bold text-white text-center z-10">
          BPIBS DSEU SHAKARPUR CAMPUS - 2
        </h1>
      </div>

      <div className="flex gap-6">
        <div className="w-64 shrink-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {Object.entries(content).map(([key, { title }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                  activeTab === key
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
              {content[activeTab].title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {content[activeTab].content}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BPIBS;