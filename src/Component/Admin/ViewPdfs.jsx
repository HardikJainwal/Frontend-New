import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewPdfs = () => {
  const [nonArchivedData, setNonArchivedData] = useState([]);
  const [archivedData, setArchivedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTab, setSelectedTab] = useState("non-archived");
  const [selectedSection, setSelectedSection] = useState("all");

  useEffect(() => {
    // Fetch Non-Archived PDFs
    axios.get(`https://dseu-backend.onrender.com/api/v1/notice/non-archived?page=${currentPage}`)
      .then((response) => {
        setNonArchivedData(response.data.data.notices);
        setTotalPages(response.data.metadata.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching non-archived PDFs", error);
      });

    // Fetch Archived PDFs
    axios.get(`https://dseu-backend.onrender.com/api/v1/notice/archived?page=${currentPage}`)
      .then((response) => {
        setArchivedData(response.data.data.notices);
        setTotalPages(response.data.metadata.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching archived PDFs", error);
      });
  }, [currentPage]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1); // Reset page to 1 when switching tabs
  };

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  const filterNoticesBySection = (notices) => {
    if (selectedSection === "all") return notices;
    return notices.filter(notice => notice.section === selectedSection);
  };

  const getNotices = () => {
    if (selectedTab === "non-archived") {
      return filterNoticesBySection(nonArchivedData);
    }
    return filterNoticesBySection(archivedData);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleTabChange("non-archived")}
          className={`px-6 py-3 rounded-lg ${selectedTab === "non-archived" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Show Non-Archived
        </button>
        <button
          onClick={() => handleTabChange("archived")}
          className={`px-6 py-3 rounded-lg ${selectedTab === "archived" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Show Archived
        </button>
      </div>

      <div className="mb-6 flex justify-center items-center">
        <label htmlFor="section" className="mr-4">Filter by Section:</label>
        <select
          id="section"
          onChange={handleSectionChange}
          value={selectedSection}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Sections</option>
          <option value="academic council">Academic Council</option>
          <option value="students">Students</option>
          <option value="admission">Admission</option>
          <option value="non academic positions">Non Academic Positions</option>
          <option value="important links">Important Links</option>
        </select>
      </div>

      <table className="min-w-full border-collapse border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">File Name</th>
            <th className="py-2 px-4 border">Section</th>
            <th className="py-2 px-4 border">Uploaded At</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {getNotices().map((notice) => (
            <tr key={notice._id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{notice.fileName}</td>
              <td className="py-2 px-4">{notice.section}</td>
              <td className="py-2 px-4">{new Date(notice.uploadedAt).toLocaleDateString()}</td>
              <td className="py-2 px-4">
                <a
                  href={notice.fileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewPdfs;
