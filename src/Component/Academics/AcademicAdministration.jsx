import React from 'react';
import flowchart from "../../assets/FLOWCHART.png";

export const AcademicAdministration = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <img
        src={flowchart}
        alt="Flowchart"
        className="w-full max-w-xl h-auto object-contain  -mt-14"
      />
    </div>
  );
};

export default AcademicAdministration;
