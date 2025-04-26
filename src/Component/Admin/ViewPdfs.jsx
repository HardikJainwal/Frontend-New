import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePdf, getAllPdfs } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { getSectionName } from "./adminConstant";
import { Trash, X } from "lucide-react";
import { Pagination } from "../Reusable/Pagination";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ViewPdfs = () => {
  const [selectedTab, setSelectedTab] = useState("non-archived");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const limit = 10;
  const isArchived = selectedTab === "archived";
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      QUERY_KEYS.GET_NOTICES,
      isArchived,
      currentPage,
      searchInput,
      startDate,
      endDate,
    ],
    queryFn: () =>
      getAllPdfs(
        isArchived,
        limit,
        currentPage,
        searchInput,
        startDate,
        endDate
      ),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePdf,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_NOTICES, isArchived, currentPage],
      });
      toast.success("PDF deleted successfully!");
    },
  });

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const handleClearFilters = () => {
    setEndDate("");
    setStartDate("");
    setSearchInput("");
  };

  const notices = data?.data?.notices || [];
  const totalPages = data?.metadata?.totalPages || 1;

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

      {/* Filter things */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-6 items-start md:items-center">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search by file name..."
          className="flex-1 px-4 py-2 rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 shadow-sm w-full"
        />

        <div className="flex flex-row gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="start-date" className="text-sm text-gray-600">
              Start Date:
            </label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setCurrentPage(1);
              }}
              className="border px-3 py-2 rounded-md text-sm shadow-sm"
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="end-date" className="text-sm text-gray-600">
              End Date:
            </label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setCurrentPage(1);
              }}
              className="border px-3 py-2 rounded-md text-sm shadow-sm"
              min={startDate}
            />
          </div>
        </div>

        <button
          onClick={handleClearFilters}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 w-full justify-center md:w-fit"
        >
          <X size={16} /> Clear Filters
        </button>
      </div>

      {isLoading ? (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-500 text-lg">
          Failed to load notices.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full text-sm border border-gray-300 bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-3 px-4 border border-gray-300 text-left">
                    S.No
                  </th>
                  <th className="py-3 px-4 border border-gray-300 text-left">
                    File Name
                  </th>
                  <th className="py-3 px-4 border border-gray-300 text-left">
                    Section
                  </th>
                  <th>Uploaded By</th>
                  <th className="py-3 px-4 border border-gray-300 text-left">
                    Uploaded At
                  </th>
                  <th className="py-3 px-4 border border-gray-300 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {notices.length > 0 ? (
                  notices.map((notice, index) => (
                    <tr
                      key={notice._id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        {(currentPage - 1) * limit + index + 1}
                      </td>
                      <td className="py-3 px-4">{notice.fileName}</td>
                      <td className="py-3 px-4 capitalize">
                        {getSectionName(notice.section)}
                      </td>
                      <td className="text-blue-500 hover:text-blue-600 hover:underline">
                        {notice.uploadedBy}
                      </td>
                      <td className="py-3 px-4">
                        {new Date(notice.uploadedAt).toLocaleDateString(
                          "en-GB"
                        )}
                      </td>
                      <td className="py-3 px-4 flex items-center gap-4">
                        <a
                          href={notice.fileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View PDF
                        </a>
                        {notice.driveFileId && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteId(notice._id);
                              setShowModal(true);
                            }}
                            className="text-red-600 hover:text-red-800 text-lg transition-colors pl-2"
                            title="Delete"
                          >
                            <Trash className="min-h-4 min-w-4 hover:scale-105 text-red-400 hover:text-red-500" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="my-10">
                    <td
                      colSpan="6"
                      className="md:py-8 sm:py-6 py-5 px-4 text-center "
                    >
                      {(startDate || endDate) &&
                        !searchInput &&
                        "No PDFs found for the asked dates."}
                      {searchInput && "Couldn't find PDFs for required text"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageClick}
          />

          {showModal && (
            <DeleteConfirmModal
              onClose={() => setShowModal(false)}
              onConfirm={() => {
                handleDelete(deleteId);
                setShowModal(false);
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ViewPdfs;
