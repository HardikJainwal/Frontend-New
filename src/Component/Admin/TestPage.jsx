import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import withAuthProtection from "./withAuthProtection";
import { uploadPdf } from "../../utils/apiservice";
import toast from "react-hot-toast";
import {
  FileText,
  Megaphone,
  Users,
  Briefcase,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("information-bulletin");
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState(null);
  const [autoArchive, setAutoArchive] = useState(false);
  const [validUntil, setValidUntil] = useState("");
  const [endDate, setEndDate] = useState("");

  const queryClient = useQueryClient();

  const getSectionOptions = () => {
    switch (activeTab) {
      case "information-bulletin":
        return [
          { value: "admission", label: "Admission" },
          { value: "students", label: "Students" },
          { value: "important links", label: "Important Links" },
          { value: "alerts and circulars", label: "Alerts and Circulars" },
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSection("");
    setName("");
    setFile(null);
    setAutoArchive(false);
    setValidUntil("");
    setEndDate("");
  };

  const mutation = useMutation({
    mutationFn: (formData) => uploadPdf(formData),
    onSuccess: (response) => {
      const data = response?.data || response;
      if (!data?.fileName || !data?.section) {
        toast.error("Upload succeeded but response is incomplete. PDF may not appear.");
        queryClient.invalidateQueries({ queryKey: ["notices", section] });
        return;
      }
      toast.success(`Uploaded ${data.fileName} to ${data.section}`);
      queryClient.invalidateQueries({ queryKey: ["notices", data.section] });
      queryClient.invalidateQueries({ queryKey: ["notices", section] });
      setName("");
      setSection("");
      setFile(null);
      setAutoArchive(false);
      setValidUntil("");
      setEndDate("");
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

    if (!name || !section || !file) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("fileName", name);
    formData.append("section", section);
    formData.append("pdf", file);
    formData.append("category", activeTab);

    if (autoArchive && validUntil) {
      formData.append("validUntil", new Date(validUntil).toISOString());
      formData.append("autoArchive", "true");
    }

    if (endDate) {
      formData.append("endDate", new Date(endDate).toISOString());
    }

    mutation.mutate(formData);
  };

  const tabs = [
    {
      key: "information-bulletin",
      label: "Information Bulletin",
      icon: FileText,
    },
    {
      key: "announcement",
      label: "Announcement",
      icon: Megaphone,
    },
    {
      key: "statutory-body",
      label: "Statutory Body",
      icon: Users,
    },
    {
      key: "work-with-us",
      label: "Work With Us",
      icon: Briefcase,
    },
  ];

  const activeTabLabel = tabs.find((tab) => tab.key === activeTab)?.label || "";


  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10 flex gap-6">

      <aside className="w-72 bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>
        <ul className="space-y-2">
          {tabs.map(({ key, label, icon: Icon }) => (
            <li key={key}>
              <button
                onClick={() => handleTabChange(key)}
                className={`w-full text-left px-4 py-2 rounded-full flex items-center gap-2 transition ${
                  activeTab === key ? "bg-blue-400 text-white" : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload PDF  : {activeTabLabel.toUpperCase()}</h1>

        <form onSubmit={handleSubmit} className="space-y-9">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Section</label>
            <select
              className="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">PDF File</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-blue-400 file:hover:bg-orange-400 file:text-white rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-gray-100  px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="autoArchive"
              checked={autoArchive}
              onChange={(e) => setAutoArchive(e.target.checked)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="autoArchive" className="text-sm text-gray-700">
              Auto Archive
            </label>
          </div>

          {autoArchive && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Archive Date</label>
              <input
                type="date"
                value={validUntil}
                onChange={(e) => setValidUntil(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-orange-400 transition"
          >
            {mutation.isPending ? "Uploading..." : "Upload PDF"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default withAuthProtection(AdminDashboard);
