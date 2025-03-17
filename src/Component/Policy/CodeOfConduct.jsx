import React from "react";
import { codeOfConduct } from "../../constants/POLICY.JS";

const CodeOfConduct = () => {
  return (
    <>
      <div className="w-4/5 p-4 mx-auto my-8 rounded-lg text-gray-800">
        <div className="text-left">
          <h2 className="text-3xl mb-2 font-bold">Code of Conduct</h2>
          <div className="flex items-center mt-[-2.5px] w-[150px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>
          <div className="my-2"></div>

          {codeOfConduct.map((data, index) => (
            <p key={index} className="my-4 text-gray-600">
              {data}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default CodeOfConduct;
