import React from "react";
import { academicPolicy } from "../../constants/POLICY.JS";
import { academicSupport } from "../../constants/POLICY.JS";

const AcademicGuidelines = () => {
  return (
    <>
      <div className="w-4/5 p-4 mx-auto my-8 rounded-lg text-gray-800">
        <div className="text-left">
          <h2 className="text-3xl mb-2 font-bold">Academic Policy</h2>
          <div className="flex items-center mt-[-2.5px] w-[170px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>
          <div className="my-2"></div>

          {academicPolicy.map((policy, index) => (
            <p key={index} className="my-4 text-gray-600">
              {policy}
            </p>
          ))}
        </div>

        <div className="text-left">
          <h2 className="text-3xl mb-2 font-bold">Academic Support</h2>
          <div className="flex items-center mt-[-5px] w-[170px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>
          <div className="my-2"></div>

          {academicSupport.map((policy, index) => (
            <p key={index} className="my-4 text-gray-600">
              {policy}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AcademicGuidelines;
