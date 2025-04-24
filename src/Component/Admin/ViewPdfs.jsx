import React, { useState } from "react";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePdf, getAllPdfs } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { getSectionName } from "./adminConstant";
import { Trash } from "lucide-react";

const ViewPdfs = () => {
  const [selectedTab, setSelectedTab] = useState("non-archived");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const limit = 10;
  const isArchived = selectedTab === "archived";
  const queryClient = useQueryClient();

  // fetching pdfs
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_NOTICES, isArchived, currentPage],
    queryFn: () => getAllPdfs(isArchived, limit, currentPage),
    keepPreviousData: true,
  });

  // deleteing pdfs
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

      {/* <input 
        
      /> */}

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
                {notices.map((notice, index) => (
                  <tr
                    key={notice._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                    onClick={() => console.log("PDF clicked:", notice._id)}
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
                      {new Date(notice.uploadedAt).toLocaleDateString()}
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(notice._id);
                        }}
                        className="text-red-600 hover:text-red-800 text-lg transition-colors pl-2"
                        title="Delete"
                      >
                        <Trash className="min-h-4 min-w-4 hover:scale-105 text-red-400 hover:text-red-500" />
                      </button>
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
            activeClassName="bg-blue-800 text-white"
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
