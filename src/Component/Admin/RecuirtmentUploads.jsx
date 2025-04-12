// this is a test page.

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import withAuthProtection from "./withAuthProtection";
import { uploadPdf } from "../../utils/apiservice";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [applyLink, setApplyLink] = useState("");
  const [file, setFile] = useState(null);

  const mutation = useMutation({
    mutationFn: (formData) => {
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      return uploadPdf(formData);
    },
    onSuccess: ({ data }) => {
      toast.success("Upload successful!");
      console.log(data);
      setName("");
      setSection("");
      setApplyLink("");
      setFile(null);
    },
    onError: (error) => {
      console.error("Upload failed:", error?.response?.data || error.message);
      toast.error(error?.response?.data?.message || "Upload failed.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !section || !file || !applyLink) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("fileName", name);
    formData.append("section", section);
    formData.append("apply", applyLink);
    formData.append("pdf", file);

    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screem md:min-h-[70vh] flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4 border"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Upload PDF</h2>

        <input
          type="text"
          placeholder="Name"
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
          <option value="academic positions">Academic Positions</option>
          <option value="non academic positions">Non Academic Positions</option>
          <option value="short term positions">Short Term Positions</option>
          <option value="results">Results</option>
          <option value="recruitments and notice">Recruitments and Notice</option>
        </select>

        <input
          type="url"
          placeholder="Apply Link"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={applyLink}
          onChange={(e) => setApplyLink(e.target.value)}
          required
        />

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
          {mutation.isPending ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default withAuthProtection(Dashboard);
