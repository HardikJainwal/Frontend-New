import { useState } from "react";

const demoPrograms = {
  UG: [
    { title: "B.Tech in Computer Science", code: "UG101" },
    { title: "BBA in Business Administration", code: "UG102" },
    { title: "B.Sc in Data Science", code: "UG103" },
  ],
  Diploma: [
    { title: "Diploma in Web Development", code: "D101" },
    { title: "Diploma in AI & ML", code: "D102" },
    { title: "Diploma in Cybersecurity", code: "D103" },
  ],
  PG: [
    { title: "M.Tech in Software Engineering", code: "PG101" },
    { title: "MBA in Finance", code: "PG102" },
    { title: "M.Sc in AI & Robotics", code: "PG103" },
  ],
};

const ProgramsByDepartment = () => {
  const [activeCategory, setActiveCategory] = useState("UG");

  const categories = ["UG", "Diploma", "PG"];

  return (
    <div className="md:px-6 py-4 w-full flex flex-col">
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-1 rounded-full flex space-x-2 shadow-md">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-500 text-white shadow-md scale-105"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 flex flex-col gap-2">
        {demoPrograms[activeCategory]?.length ? (
          demoPrograms[activeCategory].map((program, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300"
            >
              <p className="text-lg font-semibold text-gray-800">
                {program.title}
              </p>
              <p className="text-sm text-gray-500">
                Program Code: {program.code}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-6">
            No programs as of now
          </p>
        )}
      </div>
    </div>
  );
};

export default ProgramsByDepartment;
