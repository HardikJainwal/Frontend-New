import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";

const ImportantForms = () => {
  const [archived, setArchived] = useState(false);

  const handleArchivedButton = (e) => {
    e.preventDefault();
    setArchived((prev) => !prev);
  };

  const { data: forms, isLoading } = useNoticesBySection("ad important forms", archived);

  const sectionTitle = archived ? "Archived Important Forms" : "Important Forms for Employees";

  if (isLoading) {
    return <div className="text-center py-6 text-gray-500 text-base">Loading important forms...</div>;
  }

  return (
    <div className="mb-10 px-4 md:px-0">
      <h2 className="text-xl font-semibold mb-4 text-center md:text-left text-[#333]">
        {sectionTitle}
      </h2>
      <hr className="mb-6 border-gray-300" />

      {(!forms || forms.length === 0) ? (
        <>
          <div className="mt-8 text-center text-slate-600">No forms available.</div>
          <ArchiveButton handleArchivedButton={handleArchivedButton} archived={archived} />
        </>
      ) : (
        <>
          <ul className="space-y-4 max-h-[60vh] overflow-y-auto custom-scroll pr-1">
            {forms.map((form, index) => (
              <li
                key={index}
                className="bg-white border border-gray-200 rounded-md shadow-sm p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-lg">»</span>
                  <a
                    href={form.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 underline hover:text-blue-700 text-sm break-words max-w-full"
                  >
                    {form.fileName}
                  </a>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-4 flex justify-end">
                  <FaFilePdf className="text-red-600 text-[18px] sm:text-xl ml-1 sm:ml-2" />
                </div>
              </li>
            ))}
          </ul>
          <ArchiveButton handleArchivedButton={handleArchivedButton} archived={archived} />
        </>
      )}
    </div>
  );
};

const ArchiveButton = ({ handleArchivedButton, archived }) => {
  return (
    <div className="flex justify-center md:justify-start mt-10">
      <button
        onClick={handleArchivedButton}
        className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-600 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          {archived ? "See Latest Forms" : "See Archived Forms"}
        </span>
      </button>
    </div>
  );
};

export default ImportantForms;
