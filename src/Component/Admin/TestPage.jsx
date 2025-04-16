import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import withAuthProtection from "./withAuthProtection";
import { uploadPdf } from "../../utils/apiservice";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("information-bulletin");
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState(null);

  const queryClient = useQueryClient();

  // Define dropdown options based on active tab
  const getSectionOptions = () => {
    switch (activeTab) {
      case "information-bulletin":
        return [
          { value: "admission", label: "Admission" },
          { value: "students", label: "Students" },
          { value: "important links", label: "Important Links" },
          { value: "alerts and circulars", label: "Alerts and circulars" },
        ];
      case "announcement":
        return [{ value: "announcement", label: "Announcement" }];
      case "statutory-body":
        return [
          { value: "members", label: "Members" },
          { value: "university court", label: "University Court" },
          { value: "board of management", label: "Board of Management" },
          { value: "academic council", label: "Academic Council" },
          { value: "finance comittee", label: "Finance Committee" },
        ];
      case "work-with-us":
        return [
          { value: "academic positions", label: "Academic Positions" },
          { value: "non academic positions", label: "Non Academic Positions" },
          { value: "short term positions", label: "Short Term Positions" },
          { value: "results", label: "Results" },
          { value: "recruitments and notice", label: "Recruitments and Notice" },
        ];
      default:
        return [];
    }
  };

  // Reset form when changing tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSection("");
    setName("");
    setFile(null);
  };

  const mutation = useMutation({
    mutationFn: (formData) => {
      console.log("FormData being sent:");
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      return uploadPdf(formData);
    },
    onSuccess: (response) => {
      console.log("Raw upload response:", response);
      // Handle nested response (e.g., axios wraps in response.data)
      const data = response?.data || response;
      if (!data?.fileName || !data?.section) {
        console.warn("Incomplete response:", data);
        toast.error(
          "Upload succeeded but response is incomplete. PDF may not appear."
        );
        // Invalidate anyway to attempt refetch
        queryClient.invalidateQueries({ queryKey: ["notices", section] });
        return;
      }
      toast.success(`Uploaded ${data.fileName} to ${data.section}`);
      queryClient.invalidateQueries({ queryKey: ["notices", data.section] });
      queryClient.invalidateQueries({ queryKey: ["notices", section] }); // Fallback
      setName("");
      setSection("");
      setFile(null);
    },
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "Upload failed. Please try again.";
      console.error("Upload failed:", errorMessage, error);
      toast.error(errorMessage);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !section || !file) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("fileName", name);
    formData.append("section", section);
    formData.append("pdf", file);
    formData.append("category", activeTab);

    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md min-h-screen">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="py-4">
          <ul>
            <li>
              <button
                onClick={() => handleTabChange("information-bulletin")}
                className={`w-full text-left px-6 py-3 flex items-center ${
                  activeTab === "information-bulletin"
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Information Bulletin
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange("announcement")}
                className={`w-full text-left px-6 py-3 flex items-center ${
                  activeTab === "announcement"
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Announcement
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange("statutory-body")}
                className={`w-full text-left px-6 py-3 flex items-center ${
                  activeTab === "statutory-body"
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Statutory Body
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange("work-with-us")}
                className={`w-full text-left px-6 py-3 flex items-center ${
                  activeTab === "work-with-us"
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Work With Us
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Upload PDF -{" "}
          {activeTab
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h2>

        {/* Upload Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
          <input
            type="text"
            placeholder="Document Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          >
            <option value="">Select Section</option>
            {getSectionOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <input
            type="file"
            accept="application/pdf"
            className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
          >
            {mutation.isPending ? "Uploading..." : "Upload PDF"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default withAuthProtection(AdminDashboard);