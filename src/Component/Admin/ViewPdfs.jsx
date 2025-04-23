import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Axios instance — replace baseURL if needed
const api = axios.create({
  baseURL: 'https://dseu-backend.onrender.com/api/v1/', // <-- UPDATE this!
});

// Get PDFs by section
const getPdfBySections = async (section, archived = false) => {
  const url = archived ? `/notice/archived?section=${section}` : `/notice?section=${section}`;
  const res = await api.get(url);
  return res.data.data.notices;
};

// All sections to fetch from
const allSections = [
  'admission',
  'students',
  'important links',
  'alerts and circulars',
  'members',
  'university court',
  'board of management',
  'academic council',
  'finance comittee',
  'academic positions',
  'non academic positions',
  'short term positions',
  'results',
  'recruitments and notice',
  'announcements',
  'recruitment rules',
  'ad office orders',
  'ad circulars',
  'ad important forms',
];

// Fetch all PDFs with section info
const fetchAllPdfsWithSections = async () => {
  const results = await Promise.all(
    allSections.map(async (section) => {
      try {
        const notices = await getPdfBySections(section);
        return notices.map((notice) => ({ ...notice, section }));
      } catch (err) {
        console.error(`Error fetching section: ${section}`, err);
        return [];
      }
    })
  );
  return results.flat();
};

const ITEMS_PER_PAGE = 10;

const ViewPdfs = () => {
  const [pdfs, setPdfs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(pdfs.length / ITEMS_PER_PAGE);

  const paginatedPdfs = pdfs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAllPdfsWithSections();
      setPdfs(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">All Uploaded PDFs</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <>
          <div className="overflow-x-auto bg-white shadow rounded-lg mb-4">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border-b text-left">Title</th>
                  <th className="px-4 py-2 border-b text-left">Section</th>
                  <th className="px-4 py-2 border-b text-left">Uploaded At</th>
                  <th className="px-4 py-2 border-b text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPdfs.map((pdf, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-2 border-b">{pdf.title || 'Untitled'}</td>
                    <td className="px-4 py-2 border-b capitalize">{pdf.section}</td>
                    <td className="px-4 py-2 border-b">
                      {pdf.uploadedAt ? new Date(pdf.uploadedAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-4 py-2 border-b">
                      <a
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Prev
            </button>
            <span className="font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewPdfs;


