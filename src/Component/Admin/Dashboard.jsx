import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import withAuthProtection from "./withAuthProtection";
import { uploadPdf } from "../../utils/apiservice";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState(null);

  const mutation = useMutation({
    mutationFn: (formData)=>{
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      return uploadPdf(formData)
    },
    onSuccess: ({data}) => {
      toast.success("Upload successful!");
      console.log(data);
      setName("");
      setSection("");
      setFile(null);
    },
    onError: (error) => {
      console.error("Upload failed:", error?.response?.data || error.message);
      toast.error(error?.response?.data?.message || "Upload failed.");
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

    
    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
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
          <option value="admission">Admission</option>
          <option value="students">Students</option>
          <option value="important links">Important Links</option>
          <option value="alerts">Alerts</option>
          <option value="circulars etc">Circulars etc</option>
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
          {mutation.isPending ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default withAuthProtection(Dashboard);
