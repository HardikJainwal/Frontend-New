import React, { useState } from "react";
import { FileText } from "lucide-react";

const JobListings = () => {
  const [activeTab, setActiveTab] = useState("academic");
  const [entriesCount, setEntriesCount] = useState(10);

  const tabs = [
    { id: "academic", label: "Academic Positions" },
    { id: "nonAcademic", label: "Non Academic Positions" },
    { id: "shortTerm", label: "Short-Term Positions" },
    { id: "results", label: "Results" },
    { id: "notice", label: "Notice" },
  ];

  const mockData = {
    academic: [
      {
        id: 2,
        title: "Advertisement For Engagement Of Emeritus Professor",
        notification: "Notice",
        startDate: "15/03/2024",
        lastDate: "30/04/2024",
        hasPdf: true,
      },
      {
        id: 3,
        title: "Advertisement For The Post Of Distinguished Professor",
        notification: "Notice",
        startDate: "15/03/2024",
        lastDate: "30/04/2024",
        hasPdf: true,
      },
      {
        id: 4,
        title:
          "Practice/Associate Professor of Practice/Assistant Professor of Practice",
        notification: "Notice",
        startDate: "15/03/2024",
        lastDate: "30/04/2024",
        hasPdf: true,
      },
      {
        id: 5,
        title: "	Advertisement For Teaching Posts on Deputation",
        notification: "Notice",
        startDate: "15/03/2024",
        lastDate: "30/04/2024",
        hasPdf: true,
      },
    ],
    nonAcademic: [
      {
        id: 1,
        title: "Advertisement For Engagement Of Non-Teaching on Deputation",
        notification: "Notice",
        startDate: "10/02/2025",
        lastDate: "10/03/2025",
        hasPdf: true,
      },
      {
        id: 1,
        title: "Advertisement For Non-Teaching Posts Advt. No.-01/2025",
        notification: "Notice",
        startDate: "06/01/2025",
        lastDate: "17/02/2025",
        hasPdf: true,
      },
    ],
    shortTerm: [],
    results: [],
    notice: [],
  };

  const getActiveData = () => {
    return mockData[activeTab] || [];
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Panel */}
      <div className="w-64 bg-white shadow-lg mt-6 ">
        <div className="p-4 bg-blue-700 text-white font-bold text-lg">
          Job Categories
        </div>
        <div className="flex flex-col">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 text-left transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100 text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select
                value={entriesCount}
                onChange={(e) => setEntriesCount(Number(e.target.value))}
                className="border rounded p-1"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <input type="text" className="border rounded p-1" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="p-2 text-left border">S. No.</th>
                  <th className="p-2 text-left border">Title</th>
                  <th className="p-2 text-left border">Notification</th>
                  <th className="p-2 text-left border">No of Vacancies</th>
                  <th className="p-2 text-left border">
                    Starting Date of Application
                  </th>
                  <th className="p-2 text-left border">
                    Last Date of Application
                  </th>
                  <th className="p-2 text-left border">Apply Now</th>
                </tr>
              </thead>
              <tbody>
                {getActiveData().map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{item.title}</td>
                    <td className="p-2 border">
                      <div className="flex items-center gap-1">
                        {item.notification}
                        {item.hasPdf && (
                          <FileText className="text-red-500" size={16} />
                        )}
                      </div>
                    </td>
                    <td className="p-2 border"></td>
                    <td className="p-2 border">{item.startDate}</td>
                    <td className="p-2 border">{item.lastDate}</td>
                    <td className="p-2 border">
                      <button className="text-blue-600 hover:text-blue-800">
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
