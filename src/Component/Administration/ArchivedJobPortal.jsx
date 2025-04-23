import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArchiveBanner from "../../assets/ArchiveBanner.jpg";
import { jobPortalTabs as categoryTabs } from "../../constants/JOBPORTAL.JS";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";
import { FileText } from "lucide-react";
import UploadModal from "../Admin/UploadModal";

const ArchivedJobPortal = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const { data: noticeData, isLoading } = useNoticesBySection(category, true);
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const currentRole = sessionStorage.getItem("currentRole");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const isValidCategory = categoryTabs.some(
      (tab) => tab.id.toLowerCase() === category.toLowerCase()
    );
    if (!isValidCategory) {
      navigate("/recruitment");
    }

    if (currentRole === "Admin" && token) {
      setIsAdmin(true);
    }
  }, [category, noticeData, currentRole, token, navigate]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative md:w-full max-h-[250px] overflow-hidden">
        <img
          src={ArchiveBanner}
          alt="Archive Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl md:text-[2.5rem] font-bold text-center drop-shadow-2xl px-2 uppercase">
            {category} - Archived
          </h1>
        </div>
      </div>

      <main className="w-full max-w-6xl p-4">
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          {isLoading ? (
            <div className="text-center p-4">Loading...</div>
          ) : noticeData && noticeData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-700 text-white text-sm md:text-md">
                    <th className="p-2 text-left border whitespace-nowrap">
                      S. No.
                    </th>
                    <th className="p-2 text-left border">Title</th>
                    <th className="p-2 text-left border">Notification</th>
                    <th className="p-2 text-left border">No of Vacancies</th>
                    <th className="p-2 text-left border">Last Date</th>
                    <th className="p-2 text-left border">Apply</th>
                  </tr>
                </thead>
                <tbody className="text-[0.8rem] md:text-sm">
                  {noticeData.map((item, index) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                      <td className="p-2 border">{index + 1}</td>
                      <td className="p-2 border">{item.fileName}</td>
                      <td className="p-2 border">
                        <a
                          href={item.fileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          Notice <FileText className="text-red-500" size={16} />
                        </a>
                      </td>
                      <td className="p-2 border">
                        {item.vacancies ? item.vacancies : "-"}
                      </td>
                      <td className="p-2 border">
                        {item.endDate
                          ? new Date(item.endDate).toLocaleDateString("en-GB")
                          : "-"}
                      </td>
                      <td className="p-2 border">
                        {item.apply ? (
                          <a
                            href={item.apply}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Apply
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center p-4">No archived notices found.</div>
          )}
        </div>
      </main>

      {isAdmin && (
        <div className="flex justify-end my-4">
          <button
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-full text-sm md:text-base hover:bg-blue-700 transition-colors duration-300 shadow-md"
            onClick={() => setShowModal(true)}
          >
            + Upload PDF
          </button>
        </div>
      )}

      {showModal && (
        <UploadModal
          onClose={() => setShowModal(false)}
          setShowModal={setShowModal}
          section={category}
          isEndDate
          isApplyLink
          title={category.toLocaleUpperCase()}
          mannualArchive={true}
          veryLargeModal={true}
          isVacancy
        />
      )}
    </div>
  );
};

export default ArchivedJobPortal;
