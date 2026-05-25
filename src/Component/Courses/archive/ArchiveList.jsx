// ArchiveList.jsx — shows all archived UG programs

import { useNavigate } from "react-router-dom";
import { ugArchiveCourses } from "./ugArchiveCourses";

const ArchiveList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 mb-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-xl shadow-sm">
              🗂
            </div>
            <h1 className="text-3xl font-bold text-blue-900">Old Archive</h1>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-blue-700 hover:text-blue-900 font-medium underline underline-offset-2 transition-colors"
          >
            ← Back to UG Programs
          </button>
        </div>

        <p className="text-gray-500 text-sm mb-6 ml-1">
          These are archived program records — not connected to live data.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-0.5 w-10 bg-yellow-400" />
          <div className="h-1 w-6 bg-yellow-400 rounded" />
          <div className="h-0.5 flex-1 bg-yellow-100" />
        </div>

        {/* Archive Program List */}
        <div className="space-y-4">
          {ugArchiveCourses.map((program) => (
            <div
              key={program._id}
              onClick={() => navigate(`/courses/ug/archive/${program._id}`)}
              className="border-l-4 border-yellow-400 bg-white p-4 shadow-md rounded-md cursor-pointer
                hover:shadow-lg hover:scale-105 hover:bg-yellow-50 transition-all duration-300"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-lg font-semibold text-gray-800">
                  {program.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-300 px-2.5 py-0.5 rounded-full">
                    {program.programLevel}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {program.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {ugArchiveCourses.length === 0 && (
          <div className="text-center text-gray-500 mt-20 text-lg">
            No archived programs found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchiveList;