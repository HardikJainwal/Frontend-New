import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const ImportantForms = () => {
  const [archived, setArchived] = useState(true);

  const handleArchivedButton = (e) => {
    e.preventDefault();
    setArchived((prev) => !prev);
  };

  const forms = archived
    ? Array.from({ length: 25 }, (_, i) => ({
        name: `Archived Form ${i + 1}`,
        link: "#",
      }))
    : Array.from({ length: 10 }, (_, i) => ({
        name: `Latest Form ${i + 1}`,
        link: "#",
      }));

  return (
    <div className=" mb-10">
      <h2 className="text-2xl font-semibold mb-2 whitespace-nowrap text-center md:text-left text-[#333]">
        {archived
          ? "Archived Important Forms"
          : "Important Forms for Employees"}
      </h2>
      <hr className="mb-6 border-gray-300" />

      <div className="max-h-80 overflow-y-auto custom-scroll px-2 space-y-3">
        <ul className="mb-6">
          {forms.map((form, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-blue-900 text-sm"
            >
              <span className="text-blue-600 text-xl">»</span>
              <a
                href={form.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700"
              >
                {form.name}
              </a>
              <FaFilePdf className="text-red-600 text-xl" />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleArchivedButton}
        className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group mt-20 md:mt-10"
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
