import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFacultyOverview } from "../../../utils/facultyApi";
import toast from "react-hot-toast";

const BioTab = ({ faculty, loggedEmail, token }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBio, setNewBio] = useState(faculty?.overview || "");
  const [newPhoto, setNewPhoto] = useState(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData) => updateFacultyOverview(formData, faculty._id, token),
    onSuccess: () => {
      toast.success("Bio updated successfully!");
      setIsModalOpen(false);
      setNewPhoto(null);
      queryClient.invalidateQueries(["faculty", faculty._id]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Update failed.");
    },
  });

  const handleSave = () => {
    if (!newBio) {
      toast.error("Please provide a bio.");
      return;
    }

    const formData = new FormData();
    formData.append("overview", newBio);
    if (newPhoto) {
        formData.append("image", newPhoto); 
    }

    console.log(formData);
    mutation.mutate(formData);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setNewPhoto(file);
  };

  return (
    <>
      <p className="text-gray-700">{faculty.overview || "Bio not available"}</p>
      {loggedEmail === faculty.email && token && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors"
        >
          Edit Bio
        </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Edit Bio & Photo</h3>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Overview
            </label>
            <textarea
              value={newBio}
              onChange={(e) => setNewBio(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              rows={4}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload New Photo (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setNewPhoto(null);
                  setNewBio(faculty.overview || "");
                }}
                className="px-4 py-2 border border-gray-500 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BioTab;
