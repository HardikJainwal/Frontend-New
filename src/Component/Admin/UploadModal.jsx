import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { uploadPdf } from "../../utils/apiservice";
import toast from "react-hot-toast";

const UploadModal = ({
  title,
  onClose,
  setShowModal,
  section,
  isEndDate,
  isApplyLink,
  mannualArchive = false,
  veryLargeModal = false,
  isVacancy = false,
}) => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [autoArchive, setAutoArchive] = useState(false);
  const [validUntil, setValidUntil] = useState("");
  const [endDate, setEndDate] = useState("");
  const [applyLink, setApplyLink] = useState("");
  const [vacancy, setVacancy] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData) => uploadPdf(formData),
    onSuccess: (response) => {
      toast.success("Uploaded File");
      queryClient.invalidateQueries({ queryKey: ["notices", section] });
      setName("");
      setFile(null);
      setAutoArchive(false);
      setValidUntil("");
      setEndDate("");
      setApplyLink("");
      setShowModal(false);
    },
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "Upload failed. Please try again.";
      toast.error(errorMessage);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !file) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("fileName", name);
    formData.append("pdf", file);
    formData.append("section", section);

    if (autoArchive && validUntil) {
      formData.append("validUntil", new Date(validUntil).toISOString());
      formData.append("autoArchive", "true");
    }

    if (mannualArchive) {
      formData.append("archive", "true");
    }

    if (isEndDate && endDate) {
      formData.append("endDate", new Date(endDate).toISOString());
    }

    if (isApplyLink && applyLink) {
      formData.append("apply", applyLink);
    }

    if (isVacancy && vacancy) {
      formData.append("vacancies", vacancy);
    }

    mutation.mutate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="min-h-[50vh] w-[90%] max-w-2xl bg-gray-100 p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {title ? title : "Upload PDF"}
        </h1>
        {mannualArchive && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md mb-6">
            <h2 className="text-lg font-semibold">Manual Archive Enabled</h2>
            <p className="text-sm mt-1">
              Files uploaded here will be directly placed into the archive
              section.
            </p>
          </div>
        )}

        <form
          className={`${veryLargeModal ? "space-y-4" : "space-y-9"}`}
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter the file name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              PDF File <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-blue-400 file:hover:bg-orange-400 file:text-white rounded"
            />
          </div>

          {isEndDate && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
              />
            </div>
          )}

          {isApplyLink && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Apply Link
              </label>
              <input
                type="url"
                value={applyLink}
                onChange={(e) => setApplyLink(e.target.value)}
                placeholder="https://example.com/apply"
                className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
              />
            </div>
          )}

          {isVacancy && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vacancy (If any)
              </label>
              <input
                type="number"
                value={vacancy}
                onChange={(e) => setVacancy(e.target.value)}
                placeholder="e.g., Assistant Professor, Clerk"
                className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
              />
            </div>
          )}

          {!mannualArchive && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={autoArchive}
                  onChange={() => setAutoArchive(!autoArchive)}
                  className="w-4 h-4"
                  id="auto-archive"
                />
                <label
                  htmlFor="auto-archive"
                  className="text-sm font-medium text-gray-700"
                >
                  Auto Archive
                </label>
              </div>

              {autoArchive && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Valid Until <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    value={validUntil}
                    onChange={(e) => setValidUntil(e.target.value)}
                    className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-200"
                  />
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={mutation.status === "pending"}
            className="w-full py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-orange-400 transition disabled:cursor-not-allowed"
          >
            {mutation.isPending ? "Uploading..." : "Upload PDF"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
