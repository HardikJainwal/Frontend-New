import React, { useEffect, useState } from "react";
import { getResultApi } from "../../../utils/registrarApi";

const ARdashboard = () => {
  const [activePart, setActivePart] = useState("A");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewerUrl, setViewerUrl] = useState(null);

  // Fetch Result
  useEffect(() => {
    const loadResult = async () => {
      try {
        const res = await getResultApi();
        setResult(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadResult();
  }, []);

  // partA is an object { omrSheet, answerKey, maxMarks, marksObtained }
  // partB is an array  [{ category, maxMarks, obtainedMarks }]

  const partAMax      = result?.partA?.maxMarks      || 0;
  const partAObtained = result?.partA?.marksObtained || 0;

  const partBMax =
    result?.partB?.reduce((sum, item) => sum + (item.maxMarks || 0), 0) || 0;

  const partBObtained =
    result?.partB?.reduce((sum, item) => sum + (item.obtainedMarks || 0), 0) || 0;

  const grandMax      = partAMax + partBMax;
  const grandObtained = partAObtained + partBObtained;

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-600">
        Loading result...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6 md:mb-8 text-center print-hidden">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">
            Assistant Registrar Written Exam Evaluation
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-8 print-hidden">
          <button
            onClick={() => setActivePart("A")}
            className={`px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-xl font-semibold transition-all duration-200
              ${
                activePart === "A"
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border hover:shadow-md"
              }`}
          >
            Part A
          </button>

          <button
            onClick={() => setActivePart("B")}
            className={`px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-xl font-semibold transition-all duration-200
              ${
                activePart === "B"
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border hover:shadow-md"
              }`}
          >
            Part B
          </button>

          <button
            onClick={() => setActivePart("C")}
            className={`px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-xl font-semibold transition-all duration-200
              ${
                activePart === "C"
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border hover:shadow-md"
              }`}
          >
            Consolidated Result
          </button>

          <button
            onClick={() => setActivePart("D")}
            className={`px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-xl font-semibold transition-all duration-200
              ${
                activePart === "D"
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border hover:shadow-md"
              }`}
          >
            Shortlisted Cutoff
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 min-h-[260px]">

          {/* PART A */}
          {activePart === "A" && (
            <div>
              <h2 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-6">
                  Assistant Registrar Written Examination Result 
              </h2>

              {!result?.partA ? (
                <p className="text-center text-gray-500">
                  Your Part-A is under Evaluation Process.
                </p>
              ) : (
                <div className="space-y-6 px-2 md:px-12">

                  <div className="flex flex-col md:flex-row md:items-center md:gap-14 text-center md:text-left">
                    <p className="text-sm mt-2 w-28 shrink-0">OMR Sheet</p>
                    <button
                      onClick={() => setViewerUrl(result.partA.omrSheet)}
                      className="px-4 py-2 bg-gray-200 text-blue-500 rounded-md text-sm font-medium hover:bg-gray-300"
                    >
                      View
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:gap-14 text-center md:text-left">
                    <p className="text-sm mt-2 w-28 shrink-0">Answer Key</p>
                    <button
                      onClick={() => setViewerUrl(result.partA.answerKey)}
                      className="px-4 py-2 bg-gray-200 text-blue-500 rounded-md text-sm font-medium hover:bg-gray-300"
                    >
                      View
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6 border-t pt-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Maximum Marks</p>
                      <p className="text-lg font-semibold">{result.partA.maxMarks ?? "—"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Marks Obtained</p>
                      <p className="text-xl font-semibold">{result.partA.marksObtained ?? "—"}</p>
                    </div>
                    
                  </div>

                </div>
              )}
            </div>
          )}

{viewerUrl && (
  <div className="fixed inset-0 z-50 bg-black">

    <div className="w-full h-screen flex flex-col bg-white">

      {/* Header */}
      <div className="flex justify-between items-center border-b px-3 py-2">
        <p className="font-semibold text-gray-700 text-sm">
          Document Viewer
        </p>

        <button
          onClick={() => setViewerUrl(null)}
          className="bg-red-500 text-white px-3 py-1 rounded text-xs"
        >
          Close
        </button>
      </div>

      {/* Image Fit Area */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 overflow-hidden">

        <img
          src={viewerUrl}
          alt="Document"
          className="max-h-full max-w-full object-contain"
        />

      </div>

    </div>
  </div>
)}





          {/* PART B */}
          {activePart === "B" && (
            <div>
              <div className="mb-4 text-center">
        <h1 className="text-lg font-bold">
          Assistant Registrar Written Examination Result
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Descriptive Examination obtained marks.
        </p>
      </div>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm md:text-base">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Max Marks</th>
                      <th className="border px-4 py-2">Obtained Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result?.partB?.length ? (
                      result.partB.map((item, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2 text-center">{item.maxMarks}</td>
                          <td className="border px-4 py-2 text-center font-semibold">{item.obtainedMarks}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2" className="border px-4 py-2 text-center">
                          No Part-B result available yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CONSOLIDATED */}
          {activePart === "C" && (
            <div>
              <h2 className="text-lg md:text-xl font-bold text-center mb-8">
                Consolidated Result
              </h2>

              <div className="space-y-6 text-sm md:text-base">

                <div className="flex justify-between items-center border-b pb-3">
                  <span className="font-medium">Part A</span>
                  
                  <span className="flex flex-col items-center">
                    Maximum Marks
                    <b>{partAMax}</b>
                  </span>
                  <span className="flex flex-col items-center">
                    Obtained Marks
                    <b>{partAObtained}</b>
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-3">
                  <span className="font-medium">Part B</span>

                  <span className="flex flex-col items-center">
                    Maximum Marks
                    <b>{partBMax}</b>
                  </span>

                  <span className="flex flex-col items-center">
                    Obtained Marks
                    <b>{partBObtained}</b>
                  </span>
                </div>

                <div className="flex justify-between items-center pt-4 text-lg font-bold">
                  <span>Net Result</span>
                  <span>{grandObtained} / {grandMax}</span>
                </div>

              </div>
            </div>
          )}

          {/* SHORTLIST */}
          {activePart === "D" && (
            <div className="text-center">
              <p className="text-gray-600">
                Shortlisted cutoff will be displayed soon.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};



export default ARdashboard