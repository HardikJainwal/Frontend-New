import { useState } from "react";
import HeadingText from "../Reusable/HeadingText";
import ArchiveButton from "../Reusable/ArchiveButton";

const Tenders = () => {
  const [archived, setArchived] = useState(false);

  const handleArchivedButton = (e) => {
    e.preventDefault();
    setArchived((prev) => !prev);
  };

  const sectionTitle = archived ? "Archived Tenders" : "Tenders";

  return (
    <div className="p-6">
      <HeadingText
        heading={sectionTitle}
        headingCN="text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
      />

      <div className="overflow-x-auto shadow-lg rounded-2xl mt-10">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b whitespace-nowrap">
                S. No.
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Tender No.
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Title
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Department
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Category
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Submission Date
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Tender Document
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Pre-bid Minutes
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-semibold text-blue-700 uppercase tracking-wider border-b">
                Corrigendum/ Addendum
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="10"
                className="text-center py-10 text-gray-500 text-md"
              >
                {archived
                  ? "No archived tenders available."
                  : "Data will be uploaded soon."}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end myx-6">
        <ArchiveButton
          handleArchivedButton={handleArchivedButton}
          archived={archived}
          archivedText="See Tenders"
          text="See Archived Tenders"
        />
      </div>
    </div>
  );
};

export default Tenders;
