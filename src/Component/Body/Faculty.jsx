import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb"; 
import FacultyPP from "../../assets/FacultyPP.jpeg";

const Faculty = ({ activeDepartmentName }) => {
  const facultyMembers = [
    {
      id: "faculty-1",
      name: "Dr. Sarah Johnson",
      image: FacultyPP,
      designation: "Professor of Computer Science",
    },
    {
      id: "faculty-2",
      name: "Dr. Michael Chen",
      image: FacultyPP,
      designation: "Associate Professor of Mathematics",
    },
    {
      id: "faculty-3",
      name: "Dr. Emily Rodriguez",
      image: FacultyPP,
      designation: "Assistant Professor of Physics",
    },
    {
      id: "faculty-4",
      name: "Dr. James Wilson",
      image: FacultyPP,
      designation: "Professor of Engineering",
    },
    {
      id: "faculty-5",
      name: "Dr. Lisa Brown",
      image: FacultyPP,
      designation: "Associate Professor of Chemistry",
    },
    {
      id: "faculty-6",
      name: "Dr. Robert Kim",
      image: FacultyPP,
      designation: "Professor of Data Science",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb currentPage={activeDepartmentName} />

      {/* Centered Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">{activeDepartmentName}</h2>

      {/* Grid layout for faculty cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {facultyMembers.map((faculty) => (
          <div
            key={faculty.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{faculty.name}</h3>
            <p className="text-gray-600 text-center mb-4">{faculty.designation}</p>
            {/* Use Link to navigate to FacultyDesc */}
            <Link to={`/faculty/${faculty.id}`}>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
