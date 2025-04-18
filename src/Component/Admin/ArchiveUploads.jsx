import { useState } from "react";
import { useNavigate } from "react-router-dom";
import withAuthProtection from "./withAuthProtection";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { uploadPdf } from "../../utils/apiservice";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const getSectionOptions = () => [
  { value: "admission", label: "Admission" },
  { value: "students", label: "Students" },
  { value: "important links", label: "Important Links" },
  { value: "alerts and circulars", label: "Alerts & Circulars" },
  { value: "members", label: "Members" },
  { value: "university court", label: "University Court" },
  { value: "board of management", label: "Board of management" },
  { value: "academic council", label: "Academic Council" },
  { value: "finance comittee", label: "Finance Committee" },
  { value: "academic positions", label: "Academic Positions" },
  { value: "non academic positions", label: "Non Academic Positions" },
  { value: "short term positions", label: "Short Term Positions" },
  { value: "results", label: "Results" },
  { value: "recruitments and notice", label: "Recruitments and Notices" },
  { value: "announcements", label: "Announcements" },
];

const ArchiveUploads = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [apply, setApply] = useState("");
  const [applyError, setApplyError] = useState("");
  const [errors, setErrors] = useState({});

  const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/i;
  const queryClient = new QueryClient();

  const validateField = (field, value) => {
    switch (field) {
      case "name":
        if (!value.trim()) return "File name is required.";
        break;
      case "section":
        if (!value.trim()) return "Section is required.";
        break;
      case "file":
        if (!value) return "PDF file is required.";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "section":
        setSection(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "file":
        setFile(value);
        break;
      case "apply":
        setApply(value);
        if (value && !urlPattern.test(value)) {
          setApplyError("Invalid URL format");
        } else {
          setApplyError("");
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const mutation = useMutation({
    mutationFn: (formData) => uploadPdf(formData),
    onSuccess: (response) => {
      const data = response?.data || response;
      if(file) {
        toast.success(`Uploaded file`);
      }
      queryClient.invalidateQueries({ queryKey: ["notices", data.section] });
      queryClient.invalidateQueries({ queryKey: ["notices", section] });
      setName("");
      setSection("");
      setFile(null);
      setEndDate("");
      setApply("");
      setApplyError("");
      setErrors({});
    },
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "Upload failed. Please try again.";
      toast.error("Upload failed, try again.");
      console.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const validations = {
      name: validateField("name", name),
      section: validateField("section", section),
      file: validateField("file", file),
    };

    setErrors(validations);

    if (apply && !urlPattern.test(apply)) {
      setApplyError("Invalid URL format");
      return;
    }

    const formData = new FormData();
    formData.append("fileName", name);
    formData.append("section", section);
    formData.append("pdf", file);
    formData.append("archive", "true");

    if (endDate) {
      formData.append("endDate", new Date(endDate).toISOString());
    }

    if (apply) {
      formData.append("apply", apply);
    }

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:px-28 md:pb-20 pb-10">
      <TopHeading />

      <main className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Upload PDF to Archive
        </h1>

        <form onSubmit={handleSubmit} className="space-y-9">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter the file name
            </label>
            <input
              type="text"
              value={name}
              placeholder="Eg: Example order for office"
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Section
            </label>
            <select
              value={section}
              onChange={(e) => handleChange("section", e.target.value)}
              className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Section</option>
              {getSectionOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.section && (
              <p className="text-red-500 text-sm mt-1">{errors.section}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              PDF File
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => handleChange("file", e.target.files[0])}
              className="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-blue-400 file:hover:bg-orange-400 file:text-white rounded"
            />
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">{errors.file}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter the apply (only links)
            </label>
            <input
              type="text"
              value={apply}
              onChange={(e) => handleChange("apply", e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {applyError && (
              <p className="text-red-500 text-sm mt-1">{applyError}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-orange-400 transition-colors"
          >
            {mutation.isPending ? (
              <div className="flex flex-row gap-1 items-center justify-center">
                <p>Uploading</p>
                <Loader2 className="animate-spin w-4 h-4" />
              </div>
            ) : (
              "Upload PDF"
            )}
          </button>
        </form>
      </main>
    </div>
  );
};

//? TOP HEADINNG OF THE PAGE
const TopHeading = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-l-4 border-blue-500 shadow-md rounded-xl p-6 mb-8 md:mx-20 mx-2 hover:scale-[1.01] hover:shadow-sm hover:shadow-blue-200 hover:cursor-pointer">
      <div className="flex justify-between items-center flex-col md:flex-row gap-4 mb-4">
        <div className="flex flex-row gap-3">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Manual Archive Upload
          </h2>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="block text-white bg-blue-400 hover:bg-orange-400 transition-colors font-semibold  text-sm rounded-lg px-2"
          >
            Dashboard
          </button>
        </div>

        <button
          onClick={() => navigate("/admin/dashboard")}
          className="hidden md:block text-white bg-blue-400 hover:bg-orange-400 transition-colors font-semibold px-4 py-1.5 text-sm rounded-lg"
        >
          Go to Dashboard
        </button>
      </div>
      <p className="text-gray-600 text-sm">
        You can manually upload PDF files directly into the archive section from
        here. Make sure to fill in all the required fields before submission.
      </p>
    </div>
  );
};

export default withAuthProtection(ArchiveUploads);
