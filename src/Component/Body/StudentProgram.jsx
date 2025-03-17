import { useEffect, useState } from "react";
import study from "/src/assets/achievements/study.jpg";
import { carouselItems, programs } from "../../constants/STUDENTPROGRAM";

const StudyProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState("DIPLOMA");
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCarouselIndex((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-blue-50 p-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4">
              Recent Achievements
            </h2>
            <div className="h-[300px] sm:h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-md relative">
              <div className="absolute inset-0">
                <img
                  src={carouselItems[currentCarouselIndex].image}
                  alt="Achievement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarouselIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4">
                Study@DSEU
              </h2>
              <button className="mt-4 sm:mt-0 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                VIEW ALL PROGRAMMES
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                {Object.keys(programs).map((program) => (
                  <button
                    key={program}
                    onClick={() => setSelectedProgram(program)}
                    className={`pb-2 lg:px-4 text-xs inset-1 lg:text-sm font-medium transition-colors duration-300 ${
                      selectedProgram === program
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {program}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-700">
                Available {selectedProgram.toLowerCase()} courses:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {programs[selectedProgram].map((program) => (
                  <div
                    key={program.code}
                    className="relative bg-cover bg-center rounded-lg shadow-sm p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer h-28"
                    style={{
                      backgroundImage: `url(${study})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg "></div>

                    <div className="relative z-10 h-full flex flex-col justify-center items-center ">
                      <h3 className="text-lg font-bold text-white text-center">
                        {program.code}
                      </h3>
                      <p className="text-xs text-white text-center">
                        {program.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyProgramsSection;
