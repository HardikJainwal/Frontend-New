import { useEffect, useState } from "react";
import Diplomaadmission from './Diplomaadmission';
import UgAdmission from './UgAdmission';

const MergePopup = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 p-3 sm:p-4 overflow-y-auto flex items-start justify-center"
      onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Admission Modal"
    >
      <div className="relative w-full max-w-5xl my-6">

        {/* Single Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute -top-3 -right-3 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:text-orange-500 text-xl font-bold shadow-md"
          aria-label="Close"
          type="button"
        >
          &times;
        </button>

        {/* Two panels side by side */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* Diploma - Left */}

          {/* UG - Right */}
          <div className="flex-1 min-w-0">
            <UgAdmission isEmbedded />
          </div>
          <div className="flex-1 min-w-0">
            <Diplomaadmission isEmbedded />
          </div>

        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-2">Press Esc to close</p>
      </div>
    </div>
  );
};

export default MergePopup;