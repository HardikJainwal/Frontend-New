import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";
import UploadModal from "../Admin/UploadModal";
import ToggleButton from "../Reusable/ArchiveButton";

const Circulars = () => {
  const [archived, setArchived] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const token = sessionStorage.getItem("token");
  const currentRole = sessionStorage.getItem("currentRole");

  useEffect(() => {
    if (currentRole === "Admin" && token) {
      setIsAdmin(true);
    }
  }, [currentRole, token]);

  const handleArchivedButton = (e) => {
    e.preventDefault();
    setArchived((prev) => !prev);
  };

  const { data: circulars, isLoading } = useNoticesBySection(
    "ad circulars",
    archived
  );
  const sectionTitle = archived ? "Archived Circulars" : "Latest Circulars";

  if (isLoading) {
    return (
      <div className="text-center py-6 text-gray-500 text-base">
        Loading circulars...
      </div>
    );
  }

  if (!circulars || circulars.length === 0) {
    return (
      <div className="mb-10 px-4 md:px-0">
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left text-[#333]">
          {sectionTitle}
        </h2>

        <hr className="mb-6 border-gray-300" />

        <div className="mt-8 text-center text-slate-600">
          No circulars available.
        </div>

        <div className="flex justify-center md:justify-start mt-10">
          <ToggleButton
            handleArchivedButton={handleArchivedButton}
            archived={archived}
          />
        </div>

        {showModal && (
          <UploadModal
            onClose={() => setShowModal(false)}
            setShowModal={setShowModal}
            section={"ad circulars"}
          />
        )}
      </div>
    );
  }

  return (
    <div className="mb-10">
      <div className="flex flex-row items-center justify-between">
      <h2 className="text-xl font-semibold mb-4 text-center md:text-left text-[#333]">
        {sectionTitle}
      </h2>

      <div className="flex justify-end mb-4 md:mr-5 sm:mr-3">
        {isAdmin && (
          <button
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-full text-sm md:text-base hover:bg-blue-700 transition-colors duration-300 shadow-md"
            onClick={() => setShowModal(true)}
          >
            + Upload PDF
          </button>
        )}
      </div>
      </div>
      <hr className="mb-6 border-gray-300" />

      <ul className="space-y-4 max-h-[60vh] overflow-y-auto custom-scroll pr-1">
        {circulars.map((circular, index) => (
          <li
            key={index}
            className="bg-white border border-gray-200 rounded-md shadow-sm p-3 flex sm:items-center justify-between flex-row"
          >
            <div className="flex items-center gap-2">
              <a
                href={circular.fileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 underline hover:text-blue-700 text-sm break-words max-w-full"
              >
                {circular.fileName}
              </a>
            </div>
            <div className="mt-2 sm:mt-0 sm:ml-4 flex justify-end">
              <FaDownload className="text-blue-600 text-[18px] sm:text-xl ml-1 sm:ml-2" />
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center md:justify-start mt-10">
        <ToggleButton
          handleArchivedButton={handleArchivedButton}
          archived={archived}
        />
      </div>

      {showModal && (
        <UploadModal
          onClose={() => setShowModal(false)}
          setShowModal={setShowModal}
          section={"ad circulars"}
        />
      )}
    </div>
  );
};

export default Circulars;
