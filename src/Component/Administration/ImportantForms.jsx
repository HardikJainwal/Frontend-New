import { useState } from "react";

const circulars = [
  {
    id: 1,
    name: "Circular - Regarding Missing Files",
    link: "/circulars/demo_circular.pdf",
  },
  {
    id: 2,
    name: "Guidelines for Engagement of Guest Faculty",
    link: "/circulars/demo_circular.pdf",
  },
  {
    id: 3,
    name: "VC Madam Extension - 12/6/2023",
    link: "/circulars/demo_circular.pdf",
  },
  {
    id: 4,
    name: "Circular – Regarding Non-Government Fund",
    link: "/circulars/demo_circular.pdf",
  },
];

const ImportantForms = () => {
  const [forms, setForms] = useState(false);

  if (!forms) {
    return (
      <div className="md:p-6 p-2 sm:p-3 mb-10 text-center">
        <h2 className="text-2xl font-bold">Circulars</h2>
        <hr className="mb-4 mx-auto w-1/5 border-blue-500" />
        <div className="p-6 border border-gray-300">
          <p className="text-lg font-medium">
            🚫 No circulars or forms available at the moment.
          </p>
          <p className="text-sm text-gray-500 mt-1">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:p-6 p-1 sm:p-2 mb-10">
      <h2 className="text-2xl font-bold mb-4">Circulars</h2>
      <hr className="mb-4" />
      <div className="space-y-3">
        {circulars.map((circular) => (
          <div
            key={circular.id}
            className="flex justify-between items-center p-3 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-md md:text-lg font-medium">
              {circular.name}
            </span>
            <a
              href={circular.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg transition-colors hover:bg-blue-500"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantForms;
