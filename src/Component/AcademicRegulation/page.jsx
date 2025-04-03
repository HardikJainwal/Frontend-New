import { useState } from "react";
import { regulations } from "../../constants/ACADEMICREGULATIONS.JS";

const colors = [
  "border-green-900",
  "border-blue-500",
  "border-red-500",
  "border-yellow-400",
  "border-purple-500",
  "border-pink-400",
  "border-indigo-500",
  "border-teal-400",
  "border-cyan-500",
  "border-orange-500",
  "border-lime-400",
  "border-amber-500",
  "border-fuchsia-500",
  "border-violet-400",
  "border-rose-500",
  "border-emerald-500",
  "border-sky-400",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const AcademicRegulations = () => {
  const [randomColors] = useState(regulations.map(() => getRandomColor()));

  return (
    <main className="flex flex-col mt-8 md:mt-12 md:mb-10 mb-16 justify-center items-center w-full max-w-3xl gap-4 sm:gap-6 md:gap-8 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-[2.4rem] font-bold text-[#222] tracking-wide">
          Academic Regulations
        </h2>
        <div className="flex items-center justify-center mt-4 w-[150px] mx-auto">
          <div className="h-[3px] bg-blue-700 md:flex-1 w-[20px]"></div>
          <div className="h-[6px] w-[40px] md:w-[60px] bg-blue-900 rounded-full mx-2"></div>
          <div className="h-[3px] bg-blue-700 md:flex-1 w-[20px]"></div>
        </div>
      </div>

      <div className="w-full p-5 space-y-4">
        {regulations.map((reg, index) => (
          <div
            key={reg.id}
            className={`border-l-4 ${randomColors[index]} bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-lg hover:scale-[1.04] transition-all duration-300 flex justify-between items-center gap-10`}
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{reg.name}</p>
              <p className="text-sm text-gray-600">{reg.desc}</p>
            </div>

            <div className="flex md:gap-3 gap-2">
              <a
                href={reg.link}
                target="_blank"
                className="px-3 py-2 bg-orange-600 text-white text-sm rounded-lg transition-colors hover:bg-orange-500"
              >
                View
              </a>
              <a
                href={reg.link}
                download
                className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg transition-colors hover:bg-blue-500"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AcademicRegulations;
