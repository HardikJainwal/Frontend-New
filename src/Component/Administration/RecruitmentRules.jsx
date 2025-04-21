import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";
import HeadingText from "../Reusable/HeadingText";

const RecruitmentRules = () => {
  const [archived, setArchived] = useState(false);
  const { data: rules, isLoading, error } = useNoticesBySection("recruitment rules", archived);

  const handleArchivedButton = (e) => {
    e.preventDefault();
    setArchived((prev) => !prev);
  };

  const sectionTitle = archived ? "Archived Recruitment Rules" : "Recruitment Rules";

  if (isLoading) {
    return (
      <div className="text-center py-6 text-gray-500 text-base">
        <div className="animate-spin w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full mx-auto mb-2"></div>
        Loading recruitment rules...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-6 text-red-500 text-base">
        Something went wrong. Please try again later.
      </div>
    );
  }

  return (
    <div className="mb-10 px-4 md:px-0">
       <HeadingText
            heading= {sectionTitle}
            headingCN="text-3xl md:text-5xl font-bold mt-5 mb-1 text-center"
          />
     

      {(!rules || rules.length === 0) ? (
        <>
          <div className="mt-8 text-center text-slate-600">No rules available.</div>
          <ArchiveButton handleArchivedButton={handleArchivedButton} archived={archived} />
        </>
      ) : (
        <>
        <div className="flex items-center justify-center">
          <ul className="w-[70%] space-y-4 max-h-[60vh] mt-7 overflow-y-auto custom-scroll pr-1">
            {rules.map((rule, index) => (
              <li
              key={index}
              className="bg-white border border-gray-200 rounded-md shadow-sm p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-lg">»</span>
                  <a
                    href={rule.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 underline hover:text-blue-700 text-sm break-words max-w-full"
                    >
                    {rule.fileName}
                  </a>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-4 flex justify-end">
                  <FaFilePdf className="text-red-600 text-[18px] sm:text-xl ml-1 sm:ml-2" />
                </div>
              </li>
            ))}
          </ul>
            </div>
          <ArchiveButton handleArchivedButton={handleArchivedButton} archived={archived} />
        </>
      )}
    </div>
  );
};

const ArchiveButton = ({ handleArchivedButton, archived }) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <button
        onClick={handleArchivedButton}
        className="relative px-6 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group transition-colors duration-300 ease-in-out"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-600 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          {archived ? "See Latest Rules" : "See Archived Rules"}
        </span>
      </button>
    </div>
  );
};

export default RecruitmentRules;
