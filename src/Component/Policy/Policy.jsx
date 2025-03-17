import React from 'react';
import { FaGraduationCap, FaCogs, FaUsers, FaUniversity, FaLightbulb, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 


function Policy() {
  const items = [
    { icon: <FaGraduationCap className="w-16 h-16 text-white" />, label: 'Academics Policy', to: '/about-us/policy/academic-policy' },
    { icon: <FaCogs className="w-16 h-16 text-white" />, label: 'Anti Ragging Policy', to: '/about-us/policy/anti-ragging-policy' },
    { icon: <FaUsers className="w-16 h-16 text-white" />, label: 'Admission Policy', to: '/about-us/policy/admission-policy' },
    { icon: <FaUniversity className="w-16 h-16 text-white" />, label: 'University Facilities', to: '/about-us/policy/facilities' },
    { icon: <FaLightbulb className="w-16 h-16 text-white" />, label: 'Support Services', to: '/about-us/policy/support-services' },
    { icon: <FaCalendarAlt className="w-16 h-16 text-white" />, label: 'Code of Conduct', to: '/about-us/policy/code-of-conduct' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-24">
      {items.map((item, index) => (
        <Link to={item.to} key={index} className="bg-blue-600 flex items-center justify-center flex-col py-16 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          {item.icon}
          <span className="mt-4 text-white text-xl font-semibold">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Policy;
