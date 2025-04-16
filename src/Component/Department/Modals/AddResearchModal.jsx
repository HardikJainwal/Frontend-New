import { useState } from "react";
import { Loader2 } from "lucide-react";

const AddResearchModal = ({
  facultyId,
  onClose,
  type,
  mutation,
  defaultValues = {},
}) => {
  const [researchArea, setResearchArea] = useState(
    defaultValues.research_area || ""
  );
  const [researchOverview, setResearchOverview] = useState(
    defaultValues.research_overview || ""
  );
  const [publications, setPublications] = useState(
    defaultValues.publications || ""
  );

  const handleAddResearch = () => {
    const data = {
      research_area: researchArea,
      research_overview: researchOverview,
      publications: publications.trim(),
    };
    mutation.mutate(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h3 className="text-xl font-semibold mb-4">{type} Research</h3>
        <label htmlFor="researchArea" className="block mb-2">
          Research Area
        </label>
        <input
          type="text"
          id="researchArea"
          value={researchArea}
          onChange={(e) => setResearchArea(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <label htmlFor="researchOverview" className="block mb-2">
          Research Overview
        </label>
        <textarea
          id="researchOverview"
          value={researchOverview}
          onChange={(e) => setResearchOverview(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <label htmlFor="publications" className="block mb-2">
          Publications (Separate each with a comma or newline)
        </label>
        <textarea
          id="publications"
          value={publications}
          onChange={(e) => setPublications(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleAddResearch}
            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {mutation.isPending ? (
              <>
                <div className="flex flex-row gap-1 justify-center items-center">
                  <p>Saving</p>
                  <Loader2 className="animate-spin w-4 h-4" />
                </div>
              </>
            ) : (
              "Save Research"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddResearchModal;
