// ArchiveProgram.jsx
// Shows individual archived program — same UI as Program.jsx, offline data only

import { useParams } from "react-router-dom";
import { ugArchiveCourses } from "./ugArchiveCourses";

const ArchiveProgram = () => {
  const { id } = useParams();

  const data = ugArchiveCourses.find((p) => p._id === id);
  const years = data?.years ? Object.values(data.years) : [];

  if (!data) {
    return (
      <main className="flex flex-col items-center justify-center h-[70vh] md:h-[50vh] px-1 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Program Not Found
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-md">
          The archived program doesn't exist or the ID you entered is wrong.
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-col mx-auto px-4 sm:px-6 mt-10 mb-20 justify-center items-center gap-8 sm:gap-10 w-full max-w-4xl">

      {/* Archive Badge */}
      <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-400 text-yellow-800 text-sm font-semibold px-4 py-1.5 rounded-full">
        <span>🗂</span>
        <span>Old Archive — Offline Record</span>
      </div>

      {/* Program Title */}
      <section className="text-center w-full">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 max-w-3xl mx-auto break-words">
          {data.name}
        </h2>
        <div className="mt-3 sm:mt-4 flex justify-center items-center">
          <div className="h-1 w-12 sm:w-16 bg-blue-700 rounded-full"></div>
          <div className="h-2 w-8 sm:w-10 bg-blue-900 mx-2 rounded-full"></div>
          <div className="h-1 w-12 sm:w-16 bg-blue-700 rounded-full"></div>
        </div>
      </section>

      {/* Duration & Mode — same card as Program.jsx */}
      <section className="w-full bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md">
        <div className="flex flex-col sm:flex-row justify-between py-3 sm:py-4 border-b">
          <span className="text-base sm:text-lg font-semibold text-blue-600">
            Duration
          </span>
          <span className="text-gray-700 text-base sm:text-lg">
            {data.name.toLowerCase().includes("pg diploma")
              ? "1 Year"
              : data.duration || "-"}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between py-3 sm:py-4 border-b">
          <span className="text-base sm:text-lg font-semibold text-blue-600">
            Mode
          </span>
          <span className="text-gray-700 text-base sm:text-lg">
            {data.mode || "-"}
          </span>
        </div>
        {data.exit_options?.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between py-3 sm:py-4">
            <span className="text-base sm:text-lg font-semibold text-blue-600">
              Exit Options
            </span>
            <ul className="text-gray-700 text-base sm:text-lg text-right list-none">
              {data.exit_options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* NEP Table — exact same as Program.jsx */}
      {data.years && typeof data.years === "object" && (
        <section className="w-full flex flex-col items-center text-center">
          <h3 className="text-xl sm:text-3xl md:text-[2rem] font-bold text-gray-800">
            NEP Based Structure
          </h3>
          <div className="mt-3 sm:mt-4 flex justify-center items-center w-full max-w-xs">
            <div className="h-1 flex-1 bg-blue-700 rounded-full"></div>
            <div className="h-2 w-10 sm:w-12 bg-blue-900 mx-2 rounded-full"></div>
            <div className="h-1 flex-1 bg-blue-700 rounded-full"></div>
          </div>

          <div className="mt-6 sm:mt-8 overflow-x-auto w-full">
            <table className="w-full border-collapse shadow-md text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-100">
                  {years.map((_, idx) => (
                    <th
                      key={idx}
                      className={`px-4 sm:px-6 py-3 sm:py-4 text-blue-600 font-semibold ${
                        idx !== years.length - 1 ? "border-r" : ""
                      }`}
                    >
                      Year {idx + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Credit Row */}
                {/* <tr className="border-b">
                  {years.map((year, idx) => (
                    <td
                      key={idx}
                      className={`px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700 ${
                        idx !== years.length - 1 ? "border-r" : ""
                      }`}
                    >
                      {year.year_credit_text || "-"}
                    </td>
                  ))}
                </tr> */}
                {/* Exit Row */}
                {/* <tr className="border-b">
                  {years.map((year, idx) => (
                    <td
                      key={idx}
                      className={`px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700 ${
                        idx !== years.length - 1 ? "border-r" : ""
                      }`}
                    >
                      {year.year_exit_text || "-"}
                    </td>
                  ))}
                </tr> */}
                {/* Syllabus Row */}
                <tr>
                  {years.map((year, idx) => (
                    <td
                      key={idx}
                      className={`px-4 sm:px-6 py-3 sm:py-4 text-center text-blue-500 cursor-pointer hover:text-blue-400 hover:underline ${
                        idx !== years.length - 1 ? "border-r" : ""
                      }`}
                    >
                      {year.year_syllabus_link ? (
                        <a
                          href={year.year_syllabus_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Curriculum link
                        </a>
                      ) : (
                        <div className="relative group inline-block text-gray-400 cursor-not-allowed">
                          Curriculum link
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-orange-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            Curriculum not available
                          </div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
};

export default ArchiveProgram;