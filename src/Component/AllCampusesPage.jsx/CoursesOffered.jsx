import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { courseData } from "../../constants/COURSEDATA.JS";

const CourseDetailsCard = ({ program, onClose }) => {
  const navigate = useNavigate();

  const handleViewStructure = () => {
    onClose();
    navigate(`/pg-course-structure/${program.code}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-blue-900 text-2xl font-bold mb-1">
            {program.title}
          </h1>
          <p className="text-blue-900 text-lg">
            Program Code {program.code || "N/A"}
          </p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">Campuses</h2>
            <p>{program.campus}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">Institute</h2>
            <p>{program.institute}</p>
            <p className="text-blue-600 text-sm cursor-pointer hover:underline">
              [Click Here] to visit this institute's website
            </p>
          </div>

          <div>
            <h2 className="text-black text-lg font-medium mb-2">Eligibility</h2>
            <p>{program.eligibility}</p>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">University</h2>
            <p>{program.university}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">Duration</h2>
            <p>{program.duration}</p>
          </div>

          <div>
            <h2 className="text-black text-lg font-medium mb-2">
              Program Fee (Rs. in Lacs)
            </h2>
            <p className="text-sm">1st Year Non Sponsored Semester Fee:</p>
            <p>{program.fee}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <button
          onClick={handleViewStructure}
          className="bg-orange-300 text-blue-900 py-2 px-4 rounded-md font-medium hover:bg-orange-400 transition-colors duration-200"
        >
          View Course Structure
        </button>
        <button className="bg-blue-900 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200">
          Admission Not Open
        </button>
      </div>
    </div>
  );
};

const CoursesOffered = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const location = useLocation(); // Get current route

  const programs = courseData[location.pathname] || [];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          {location.pathname === "/pg-courses"
            ? "Postgraduate Programs"
            : location.pathname === "/ug-courses"
            ? "Undergraduate Programs"
            : location.pathname === "/diploma-courses"
            ? "Diploma Programs"
            : "Courses Offered"}
        </h1>

        <div className="space-y-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border-l-4 border-yellow-500 bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300"
              onClick={() => setSelectedProgram(program)}
            >
              <p className="text-lg font-semibold text-gray-800">
                {program.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <CourseDetailsCard
            program={selectedProgram}
            onClose={() => setSelectedProgram(null)}
          />
        </div>
      )}
    </div>
  );
};

export default CoursesOffered;
