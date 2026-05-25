import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ================= FEES MASTER DATA ================= */

const FEES_DATA = [
  { category: "A", component: "General Fee", amount: "₹87,000" },
  { category: "B", component: "General Fee", amount: "₹50,000" },
  { category: "C", component: "General Fee", amount: "₹35,000" },
  { category: "D", component: "General Fee", amount: "₹25,000" },
  { category: "E", component: "General Fee", amount: "₹10,000" },
  {
    category: "F",
    component: "General Fee (Partner Institute)",
    amount: "As per MOU signed",
  },
];

const ProgramPopup = ({ program, onClose }) => {
  const [showFees, setShowFees] = useState(false);

  if (!program) return null;

  const handleApply = () => {
    if (program.link && program.link.trim() !== "") {
      window.open(program.link, "_blank");
    } else {
      alert("Application link will be available soon.");
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      >
        {/* Main Popup */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="border-b px-6 py-5 flex justify-between bg-gradient-to-r from-blue-50 to-white">
            <div>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-700 text-white">
                {program.programLevel}
              </span>
              <h2 className="text-2xl font-bold text-blue-900 mt-2">
                {program.name}
              </h2>
              <p className="text-sm text-gray-600">{program.campus}</p>
            </div>

            <button
              onClick={onClose}
              className="text-3xl text-gray-500 hover:text-red-600"
            >
              &times;
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-8 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Info label="Program Level" value={program.programLevel} />
              <Info label="Duration" value={program.duration} />

              {/* Fees */}
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <p className="text-xs text-gray-500 uppercase">Fees</p>
                <button
                  onClick={() => setShowFees(true)}
                  className="mt-1 text-sm font-semibold text-blue-700 hover:underline"
                >
                  View Fees
                </button>
                <p className="text-xs text-gray-500 mt-1">
                <span className="font-semibold text-gray-900">Category: {program.fees}</span>
                </p>
              </div>

              <Info label="Campus" value={program.campus} />
            </div>

            <Section title="Program Overview">
              <p className="text-sm text-gray-700">{program.description}</p>
            </Section>

            <Section title="Eligibility Criteria">
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {program.eligibility}
              </p>
            </Section>
          </div>

          {/* Footer */}
          <div className="border-t px-6 py-4 bg-gray-50 flex justify-between items-center">
            <p className="text-xs text-gray-500">
              For complete details, proceed with application.
            </p>

            <div className="flex gap-3">
              <button onClick={onClose} className="px-4 py-2 border rounded-md">
                Close
              </button>
              <button
                onClick={handleApply}
                className="px-6 py-2 bg-green-600 text-white rounded-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fees Popup */}
      {showFees && (
        <FeesPopup
          selectedCategory={program.fees}
          onClose={() => setShowFees(false)}
        />
      )}
    </>
  );
};

/* ================= REUSABLE ================= */

const Info = ({ label, value }) => (
  <div className="bg-white border rounded-xl p-4 shadow-sm">
    <p className="text-xs text-gray-500 uppercase">{label}</p>
    <p className="font-semibold mt-1">{value}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3 border-l-4 border-blue-700 pl-3">
      {title}
    </h3>
    {children}
  </div>
);

/* ================= FEES POPUP ================= */

const FeesPopup = ({ selectedCategory, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-3xl w-full rounded-xl shadow-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4">Fee Structure</h3>

        {/* Fees Table */}
        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Category</th>
                <th className="border px-3 py-2">Components of Fees</th>
                <th className="border px-3 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {FEES_DATA.map((row) => {
                const isActive = row.category === selectedCategory;
                return (
                  <tr
                    key={row.category}
                    className={
                      isActive ? "bg-green-100 font-semibold" : "bg-white"
                    }
                  >
                    <td className="border px-3 py-2 text-center">
                      {row.category}
                    </td>
                    <td className="border px-3 py-2">{row.component}</td>
                    <td className="border px-3 py-2">{row.amount}</td>
                    {/* <td className="border px-3 py-2">
                      Category {row.category}
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          * Highlighted row shows applicable fee category.
        </p>
        <a
          href="https://drive.google.com/file/d/18XVLKnUmOiPDhUAHW1ntNhwqqSfYZ4Mh/view?usp=sharing" // path to your PDF
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full"
        >
          <button className="w-full bg-green-600 text-white py-2 rounded-md">
            View Fees
          </button>
        </a>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-blue-700 text-white py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProgramPopup;
