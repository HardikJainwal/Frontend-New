import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "@tanstack/react-query";
import { getAllPdfs } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";

const ViewPdfs = () => {
  const [selectedTab, setSelectedTab] = useState("non-archived");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const isArchived = selectedTab === "archived";

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_NOTICES, isArchived, currentPage],
    queryFn: () => getAllPdfs(isArchived, limit, currentPage),
    keepPreviousData: true,
  });

  const notices = data?.data?.notices || [];
  const totalPages = data?.metadata?.totalPages || 1;

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  return (
    <div className="bg-white min-h-screen py-6 px-4 sm:px-8 lg:px-20">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => handleTabChange("non-archived")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-colors duration-300 shadow ${
            selectedTab === "non-archived"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-blue-100"
          }`}
        >
          Non-Archived
        </button>
        <button
          onClick={() => handleTabChange("archived")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-colors duration-300 shadow ${
            selectedTab === "archived"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-blue-100"
          }`}
        >
          Archived
        </button>
      </div>

      {isLoading ? (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-500 text-lg">Failed to load notices.</p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full text-sm border border-gray-300 bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-3 px-4 border border-gray-300 text-left">S.No</th>
                  <th className="py-3 px-4 border border-gray-300 text-left">File Name</th>
                  <th className="py-3 px-4 border border-gray-300 text-left">Section</th>
                  <th className="py-3 px-4 border border-gray-300 text-left">Uploaded At</th>
                  <th className="py-3 px-4 border border-gray-300 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, index) => (
                  <tr key={notice._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{notice.fileName}</td>
                    <td className="py-3 px-4 capitalize">{notice.section}</td>
                    <td className="py-3 px-4">
                      {new Date(notice.uploadedAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
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
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel="👉 Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            forcePage={currentPage - 1}
            previousLabel="👈 Prev"
            containerClassName="flex justify-center gap-2 my-8"
            pageClassName="px-3 py-1 rounded-full cursor-pointer bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white transition"
            activeClassName="bg-blue-500 text-white"
            previousClassName="px-3 py-1 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white"
            nextClassName="px-3 py-1 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white"
            breakClassName="px-3 py-1 text-gray-600"
          />
        </>
      )}
    </div>
  );
};

export default ViewPdfs;
