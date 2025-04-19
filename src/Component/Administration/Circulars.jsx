import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const Circulars = () => {
  const [archived, setArchived] = useState(true);

  const handleArchivedButton = (e) => {
    e.preventDefault();
    setArchived((prev) => !prev);
  };

  const circulars = archived
    ? Array.from({ length: 15 }, (_, i) => ({
        title: `Archived Circular ${i + 1}`,
        link: "#",
      }))
    : Array.from({ length: 10 }, (_, i) => ({
        title: `Latest Circular ${i + 1}`,
        link: "#",
      }));

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-2 whitespace-nowrap text-center md:text-left text-[#333]">
        {archived ? "Archived Circulars" : "Latest Circulars"}
      </h2>
      <hr className="mb-6 border-gray-300" />

      <div className="max-h-80 overflow-y-auto custom-scroll px-2 space-y-3">
        <ul className="mb-6">
          {circulars.map((circular, index) => (
            <li
              key={index}
              className="flex items-center justify-between space-x-3 bg-gray-50 rounded-lg px-4 py-3 shadow-md hover:bg-blue-300 transition-all hover:text-[#333] duration-200"
            >
              <div className="flex items-center space-x-2 text-blue-900">
                <a
                  href={circular.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline text-sm hover:text-blue-700"
                >
                  {circular.title}
                </a>
              </div>
              <a
                href={circular.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-xl hover:text-blue-700"
              >
                <FaDownload />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleArchivedButton}
        className="px-5 py-3 font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-white hover:text-blue-600 hover:shadow-md hover:shadow-blue-300 transition-colors duration-300 md:mt-14 mt-10"
      >
        {archived ? "See Latest Circulars" : "See Archived Circulars"}
      </button>
    </div>
  );
};

export default Circulars;
