import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import OrangeLoader from "../PageLoader/OrangeLoader";
import { getAcademicCouncilNotices } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";

const StatutoryBodiesComponent = () => {
  const [activeTab, setActiveTab] = useState("STATUTORY BODIES");
  const [activeSection, setActiveSection] = useState("members");
  const [activeMinutesTab, setActiveMinutesTab] = useState("court");

  const { data, isLoading } = useQuery({
    queryFn: getAcademicCouncilNotices,
    queryKey: [QUERY_KEYS.GET_ALL_PDF],
  });

  const navItems = [
    "NOTICES",
    "ACT",
    "STATUTES",
    "ORDINANCES",
    "REGULATIONS",
    "STATUTORY BODIES",
  ];

  const boardMembers = [
    { title: "University Court", id: "court" },
    { title: "Board of Management", file: "/BOM.pdf" },
    { title: "Academic Council", id: "academic" },
    { title: "Finance Committee", id: "finance" },
  ];

  const minutes = {
    court: {
      title: "University Court",
      date: "23-Apr-2024",
      id: "min-court",
    },
    management: {
      title: "Board of Management",
      date: "15-Mar-2024",
      id: "min-management",
    },
    academic: {
      title: "Academic Council",
      date: "10-Feb-2024",
      id: "min-academic",
    },
    finance: {
      title: "Finance Committee",
      date: "05-Jan-2024",
      id: "min-finance",
    },
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <OrangeLoader />;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        STATUTORY BODIES
      </h1>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap mb-6 border-b">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-3 font-medium transition-all duration-200 rounded-t-lg ${
              activeTab === item
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Section Tabs */}
      <div className="flex mb-6 border-b text-lg">
        <button
          className={`px-6 py-3 font-medium ${
            activeSection === "members"
              ? "border-b-2 border-blue-700 text-blue-900"
              : "text-gray-500"
          }`}
          onClick={() => setActiveSection("members")}
        >
          Members
        </button>
        <button
          className={`px-6 py-3 font-medium ${
            activeSection === "minutes"
              ? "border-b-2 border-blue-700 text-blue-900"
              : "text-gray-500"
          }`}
          onClick={() => setActiveSection("minutes")}
        >
          Minutes of Meeting
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="mb-4 text-gray-700 italic border-l-4 border-blue-700 pl-3">
          *Click on the title to download the PDF
        </div>

        {activeSection === "members" ? (
          <div className="space-y-3">
            {boardMembers.map((board, idx) => (
              <div
                key={board.id || idx}
                className="p-4 border rounded-lg hover:bg-blue-50 transition duration-200"
              >
                <a
                  href={board.file || `#${board.id}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">📄</span>
                  {board.title}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Minutes Tabs - Horizontal Scrollable */}
            <div className="overflow-x-auto">
              <div className="flex flex-col md:flex-row flex-nowrap bg-gray-100 p-2 rounded-lg mb-4 gap-2 min-w-max">
                {Object.keys(minutes).map((key) => (
                  <button
                    key={key}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap text-lg transition-all duration-200 ${
                      activeMinutesTab === key
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveMinutesTab(key)}
                  >
                    {minutes[key].title}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Minutes Section */}
            {activeMinutesTab === "academic" ? (
              <div className="space-y-4">
                {data
                  ?.filter(
                    (item) =>
                      item.fileName
                        .toLowerCase()
                        .includes("academic council") ||
                      item.fileName.toLowerCase().includes("ac")
                  )
                  .map((file) => (
                    <div
                      key={file._id}
                      className="p-4 border rounded-lg hover:bg-blue-50 transition duration-200"
                    >
                      <a
                        href={file.fileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-medium hover:underline flex items-center"
                      >
                        <span className="mr-2">📄</span>
                        {file.fileName}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Uploaded on{" "}
                        {new Date(file.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="p-6 border rounded-lg shadow-md bg-white">
                <h3 className="text-xl font-bold text-blue-700">
                  {minutes[activeMinutesTab].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  Date: {minutes[activeMinutesTab].date}
                </p>
                <a
                  href={`#${minutes[activeMinutesTab].id}`}
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-2">📝</span>
                  Download Minutes (PDF)
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StatutoryBodiesComponent;
