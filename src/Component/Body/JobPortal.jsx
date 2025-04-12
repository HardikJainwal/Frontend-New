import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";

import { jobPortalTabs as tabs } from "../../constants/JOBPORTAL.JS";

const JobListings = () => {
  const [activeTab, setActiveTab] = useState("non academic positions");
  const [entriesCount, setEntriesCount] = useState(10);

  const { data: noticeData, isLoading } = useNoticesBySection(activeTab);

  const getActiveData = () => {
    return noticeData || [];
  };

  // useEffect(() => {
  //   console.log(noticeData);
  // }, [noticeData]);

  return (
    <div className="flex pb bg-gray-50 rounded-md flex-col md:flex-row">
      {/* Side Panel */}
      <div className="xl:w-64 w-48 bg-white shadow-lg mt-6 rounded-3xl hidden lg:block text-sm xl:text-[1rem] whitespace-nowrap max-h-fit pb-10">
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
                  ? "bg-blue-100 text-black"
                  : "hover:bg-blue-100 text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <MobileBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-3 md:p-4 lg:p-6 overflow-scroll md:overflow-hidden">
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
          </div>

          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="text-center p-4">Loading...</div>
            ) : getActiveData().length > 0 ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-700 text-white text-sm md:text-md">
                    <th className="p-2 text-left border whitespace-nowrap">
                      S. No.
                    </th>
                    <th className="p-2 text-left border">Title</th>
                    <th className="p-2 text-left border">Notification</th>
                    <th className="p-2 text-left border">No of Vacancies</th>
                    <th className="p-2 text-left border whitespace-nowrap">
                      Starting Date
                    </th>
                    <th className="p-2 text-left border">Last Date</th>
                    <th className="p-2 text-left border">Apply</th>
                  </tr>
                </thead>
                <tbody className="text-[0.8rem] md:text-sm">
                  {getActiveData().map((item, index) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                      <td className="p-2 border">{index + 1}</td>
                      <td className="p-2 border">{item.fileName}</td>
                      <td className="p-2 border">
                        <a
                          href={item.fileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          Notice <FileText className="text-red-500" size={16} />
                        </a>
                      </td>
                      <td className="p-2 border">-</td>
                      <td className="p-2 border">-</td>
                      <td className="p-2 border">-</td>
                      <td className="p-2 border">
                        <a
                          href={item.apply}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Apply
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center p-4">
                {tabs.find((tab) => tab.id === activeTab)?.empty ||
                  "No data available."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-2 overflow-x-auto my-4 mx-2 md:hidden py-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`p-1 flex-1 text-center text-sm font-medium transition-colors duration-200 rounded-lg shadow-sm ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default JobListings;
