import { useState } from "react";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";
import OrangeLoader from "../PageLoader/OrangeLoader";

const StatutoryBodiesComponent = () => {
  const [activeTab, setActiveTab] = useState("STATUTORY BODIES");
  const [activeSection, setActiveSection] = useState("members");
  const [activeMinutesTab, setActiveMinutesTab] = useState("university court");

  const { data, isLoading, error } = useNoticesBySection(activeMinutesTab);


  console.log("Active Minutes Tab:", activeMinutesTab);
  console.log("Fetched Data:", data);
  if (error) console.error("Fetch Error:", error);

  const navItems = [
    "NOTICES",
    "ACT",
    "STATUTES",
    "ORDINANCES",
    "REGULATIONS",
    "STATUTORY BODIES",
  ];

  const boardMembers = [
    { title: "University Court", id: "university court" },
    { title: "Board of Management", id: "board of management" },
    { title: "Academic Council", id: "academic council" },
    { title: "Finance Committee", id: "finance comittee" },
  ];

  const minutes = {
    "university court": {
      title: "University Court",
      date: "23-Apr-2024",
      id: "min-court",
    },
    "board of management": {
      title: "Board of Management",
      date: "15-Mar-2024",
      id: "min-management",
    },
    "academic council": {
      title: "Academic Council",
      date: "10-Feb-2024",
      id: "min-academic",
    },
    "finance comittee": {
      title: "Finance Committee",
      date: "05-Jan-2024",
      id: "min-finance",
    },
  };

  if (isLoading) return <OrangeLoader />;
  if (error)
    return (
      <div className="p-6 text-red-600">
        Error loading notices: {error.message}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        STATUTORY BODIES
      </h1>

  
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

      <div className="bg-white rounded-lg p-6 shadow-sm mt-2">

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
                    {minutes[key]?.title || "Untitled"}
                  </button>
                ))}
              </div>
            </div>

            {data?.length > 0 ? (
              <div className="space-y-4">
                {data.map((file) => (
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
              <div className="p-6 border rounded-lg shadow-md bg-white text-gray-600">
                <h3 className="text-xl font-semibold mb-2">
                  {minutes[activeMinutesTab]?.title || "Not Found"}
                </h3>
                <p className="mb-4">
                  Date: {minutes[activeMinutesTab]?.date || "N/A"}
                </p>
                <p className="text-red-600">
                  No PDFs available for this section.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StatutoryBodiesComponent;