import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";
import UploadModal from "../Admin/UploadModal";
import ToggleButton from "../Reusable/ArchiveButton";

const OfficeOrders = () => {
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

  const { data: orders, isLoading } = useNoticesBySection(
    "ad office orders",
    archived
  );
  const sectionTitle = archived ? "Archived Office Orders" : "Latest Office Orders";

  if (isLoading) {
    return (
      <div className="text-center py-6 text-gray-500 text-base">
        Loading office orders...
      </div>
    );
  }

  return (
    <div className="mb-10 mt-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left text-[#333]">
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

      {orders && orders.length > 0 ? (
        <div className="max-h-80 overflow-y-auto custom-scroll space-y-3">
          <ul className="mb-6 flex flex-col gap-5">
            {orders.map((order, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-3 shadow-md hover:bg-gray-100 transition-all duration-200"
              >
                <div className="flex items-center space-x-2">
                  <FaDownload className="text-blue-600 text-xl min-h-3 max-h-4 min-w-3 max-w-4" />
                  <a
                    href={order.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline text-sm hover:text-blue-700"
                  >
                    {order.fileName}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-8 text-center text-slate-600">
          No office orders available.
        </div>
      )}

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
          section={"ad office orders"}
          title={"Office Orders PDF"}
          mannualArchive={archived}
        />
      )}
    </div>
  );
};

export default OfficeOrders;
