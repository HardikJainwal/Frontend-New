import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResearch, updateResearch } from "../../../utils/facultyApi";
import AddResearchModal from "../Modals/AddResearchModal";

const ResearchTab = ({ researchList, faculty }) => {
  const queryClient = useQueryClient();
  const loggedEmail = sessionStorage.getItem("email");

  const [showResearchModal, setShowResearchModal] = useState(true);
  const [selectedResearch, setSelectedResearch] = useState(null);

  const updateMutation = useMutation({
    mutationFn: ({ researchId, data }) =>
      updateResearch(faculty._id, researchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["getFacultyById", faculty._id]);
      setShowResearchModal(false);
      setSelectedResearch(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (researchId) => deleteResearch(faculty._id, researchId),
    onSuccess: () => {
      queryClient.invalidateQueries(["getFacultyById", faculty._id]);
    },
    onError: (error) => {
      console.error("Error deleting research:", error);
    },
  });

  const handleDelete = (researchId) => {
    deleteMutation.mutate(researchId);
  };

  const onUpdate = (research) => {
    setSelectedResearch(research);
    setShowResearchModal(true);
  };

  if (!researchList?.length) {
    return <p className="text-gray-700">Research details not available</p>;
  }

  return (
    <>
      <ul className="list-decimal pl-5 space-y-4 text-gray-700">
        {researchList.map((research, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 hover:shadow-md hover:shadow-blue-300 hover:bg-gray-50 transition-all duration-100"
          >
            <div className="font-semibold text-lg text-blue-500 mb-2">
              Research Area:
            </div>
            <p className="text-gray-800 mb-2">
              {research.research_area ?? "No area specified"}
            </p>

            <div className="font-semibold text-lg text-blue-500 mb-2">
              Research Overview:
            </div>
            <p className="text-gray-700 mb-4">
              {research.research_overview ?? "Not provided"}
            </p>

            {loggedEmail === faculty.email && (
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => onUpdate(research, index)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(research._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                >
                  {deleteMutation.isPending ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4" />
                      Deleting
                    </>
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
      </ul>

      {showResearchModal && selectedResearch && (
        <AddResearchModal
          facultyId={faculty._id}
          onClose={() => {
            setShowResearchModal(false);
            setSelectedResearch(null);
          }}
          type="Update"
          mutation={{
            mutate: (data) =>
              updateMutation.mutate({ researchId: selectedResearch._id, data }),
            isPending: updateMutation.isPending,
          }}
          defaultValues={selectedResearch}
        />
      )}
    </>
  );
};

export default ResearchTab;
