import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { ugDiplomaPrograms } from "../../constants/DIPLOMAPROGRAM.JS";
import { diplomaPrograms } from "../../constants/DIPLOMAPROGRAM.JS";

const DiplomaDetailsCard = ({ program, onClose }) => {
  const navigate = useNavigate();
  const pdfUrl = "/Admission-Brochure-Diploma-2024.pdf";

  const handleViewStructure = () => {
    onClose();
    navigate(`/course-structure/${program.code}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-blue-900 text-2xl font-bold mb-1">
            {program.title}
          </h1>
          <p className="text-blue-900 text-lg">Program Code: {program.code}</p>
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
          <div>
            <h2 className="text-black text-lg font-medium mb-2">
              Information Brochure
            </h2>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm cursor-pointer hover:underline"
            >
              📄 Click here to view the Admission Brochure
            </a>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">Duration</h2>
            <p>{program.duration}</p>
          </div>

          <div>
            <h2 className="text-black text-lg font-medium mb-2">Program Fee</h2>
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

const DiplomaPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Diploma Programs
        </h1>

        <div className="space-y-4 mb-6">
          {diplomaPrograms.map((program, index) => (
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

        <h2 className="text-3xl font-bold text-blue-900  mt-8 mb-8">
          UG Diploma Programs
        </h2>
        <div className="space-y-4">
          {ugDiplomaPrograms.map((program, index) => (
            <div
              key={index}
              className="border-l-4 border-green-500 bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300"
              onClick={() => setSelectedProgram(program)}
            >
              <p className="text-lg font-semibold text-gray-800">
                {program.title}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DiplomaPrograms;
