import { regulations } from "../../constants/ACADEMICREGULATIONS.JS"; // Assuming regulations are stored here

const AcademicRegulations = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:pb-16 md:pt-10 pt-12 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Academic Regulations
        </h1>

        {/* Regulations List */}
        <div className="space-y-4">
          {regulations.map((reg) => (
            <div
              key={reg.id}
              className="border-l-4 border-blue-700 bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300 flex justify-between items-center"
            >
              {/* Regulation Title & Description */}
              <div>
                <p className="text-lg font-semibold text-gray-800">{reg.name}</p>
                <p className="text-sm text-gray-600">{reg.desc}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={reg.link}
                  target="_blank"
                  className="px-3 py-1.5 bg-orange-600 text-white text-sm rounded-lg transition-colors hover:bg-orange-500"
                >
                  View
                </a>
                <a
                  href={reg.link}
                  download
                  className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg transition-colors hover:bg-blue-500"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicRegulations;
