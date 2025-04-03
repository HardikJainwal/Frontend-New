import { useState } from "react";
import { ugPrograms as programs } from "../../constants/UGPROGRAM.JS";
import { useNavigate } from "react-router-dom";

const UGPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:pb-16 md:pt-10 pt-12 pb-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">UG Programs</h1>

        <div className="space-y-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border-l-4 border-yellow-500 bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300"
              onClick={() => navigate(`${program.code}`)}
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

export default UGPrograms;
