import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { SESSION_EXPIRE } from "../../../constants/LOCALES.JS";
import { updatePdf } from "../../../utils/apiservice";
import { X } from "lucide-react";
import { getSectionOptions } from "../adminConstant";

const EditModal = ({ onClose, setShowModal, data }) => {
  const [fileName, setFileName] = useState(data.fileName || "");
  const [section, setSection] = useState(data.section || "");
  const [endDate, setEndDate] = useState(data.endDate?.split("T")[0] || "");
  const [vacancies, setVacancies] = useState(data.vacancies || "");
  const [apply, setApply] = useState(data.apply || "");

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ id, formData }) => updatePdf(id, formData),
    onSuccess: () => {
      toast.success("PDF updated successfully");
      queryClient.invalidateQueries({ queryKey: ["notices"] });
      setShowModal(false);
    },
    onError: (error) => {
      if (error?.response?.data?.error) {
        toast.error(error?.response?.data?.error);
      } else {
        toast.error(SESSION_EXPIRE || error?.message);
        sessionStorage.clear();
        navigate("/admin-login");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileName || !section) {
      toast.error("Required fields are missing!");
      return;
    }

    const formData = new FormData();
    formData.append("fileName", fileName);
    formData.append("section", section);

    if (endDate) formData.append("endDate", new Date(endDate).toISOString());
    if (apply) formData.append("apply", apply);
    if (vacancies) formData.append("vacancies", vacancies);

    mutation.mutate({ id: data._id, formData });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="min-h-[50vh] w-[90%] max-w-2xl bg-gray-100 p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          <X className="min-h-5 min-w-5" />
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Edit PDF Details
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              File Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Section <span className="text-red-500">*</span>
            </label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
            >
              {getSectionOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
              //   min={}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Apply Link
            </label>
            <input
              type="url"
              value={apply}
              onChange={(e) => setApply(e.target.value)}
              placeholder="https://example.com/apply"
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Vacancies
            </label>
            <input
              type="number"
              value={vacancies}
              onChange={(e) => setVacancies(e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
            />
          </div>

          <button
            type="submit"
            disabled={mutation.status === "pending"}
            className="w-full py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-orange-400 transition disabled:cursor-not-allowed"
          >
            {mutation.isPending ? "Updating..." : "Update PDF"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
