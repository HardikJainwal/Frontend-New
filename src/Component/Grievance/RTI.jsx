import React, { useState } from "react";
import GrievanceForm from "./Redressal";
import { rtiData } from "./rtiData";
import { UserCircle } from "lucide-react"; 

const RTI = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [showGrievanceForm, setShowGrievanceForm] = useState(false);
  const [showNamesPage, setShowNamesPage] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (section === "rules") {
      setShowGrievanceForm(true);
      setShowNamesPage(false);
    } else if (section === "names") {
      setShowNamesPage(true);
      setShowGrievanceForm(false);
    } else {
      setShowGrievanceForm(false);
      setShowNamesPage(false);
    }
  };

  const RTIDataTable = () => (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 mt-[-25px]">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">
        {sidebarItems.find((item) => item.id === activeSection)?.label}
      </h2>

      <div className="overflow-x-auto">
        <div className="max-h-[400px] overflow-y-auto border rounded custom-scrollbar">
          <table className="w-full text-sm text-left text-blue-900 border-collapse ">
            <thead className="sticky top-0 bg-blue-600 text-white z-10">
              <tr>
                <th className="py-3 px-5 border-b">Title</th>
                {activeSection === "introduction" && (
                  <th className="py-3 px-5 border-b">Published Date</th>
                )}
                {activeSection === "introduction" ? (
                  <th className="py-3 px-5 border-b">Document</th>
                ) : (
                  <th className="py-3 px-5 border-b">Link</th>
                )}
              </tr>
            </thead>
            <tbody>
              {rtiData[activeSection]?.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="py-3 px-5">{item.title}</td>
                  {activeSection === "introduction" && (
                    <td className="py-3 px-5">{item.date}</td>
                  )}
                  <td className="py-3 px-5">
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.document}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const NamesPage = () => (
    <div className="max-w-5xl mx-auto bg-white rounded-xl mt-[-25px] shadow-md p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 border-b pb-2 text-left">
        Names of Authorities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rtiData.names.map((person, index) => (
          <div
            key={index}
            className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center mb-4">
              <UserCircle className="h-16 w-16 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-center text-blue-700 mb-1">
              {person.title}
            </h3>
            <p className="text-center text-orange-400 font-medium text-base mb-1">
              {person.designation}
            </p>
            {person.mail && (
              <p className="text-center text-blue-700 text-sm">
                {person.mail}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  
  

  const sidebarItems = [
    { id: "introduction", label: "RTI Disclosure" },
    { id: "names", label: "Names of authorities" },
    {
      id: "organization",
      label: "Appointment Letter of PIO, APIO and First Appellate Authority",
    },
    { id: "powers", label: "RTI Act, 2005" },
    { id: "norms", label: "Link to State RTI Portal" },
    { id: "rules", label: "Grievance Redressal Form" },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Side Navbar */}
      <div className="w-96 md:w-72 h-[60%] bg-blue-50 md:p-5 rounded-xl shadow-md p-0 sm:p-1 mx-auto">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full text-left py-2.5 px-5 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === item.id &&
                  (item.id !== "rules" || showGrievanceForm)
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-blue-800 hover:bg-blue-100 hover:text-blue-900"
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="ml-2 md:p-6 flex-1 mt-10 md:mt-0">
        {showGrievanceForm ? (
          <GrievanceForm />
        ) : showNamesPage ? (
          <NamesPage />
        ) : (
          <RTIDataTable />
        )}
      </div>
    </div>
  );
};

export default RTI;
