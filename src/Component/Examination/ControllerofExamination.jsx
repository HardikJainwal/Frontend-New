import React from "react";
import coeImage from "../../assets/team-dseu/rajeshKumar.jpeg";// update path accordingly
import { FaPaperPlane } from "react-icons/fa";

const ControllerofExamination = () => {
  return (
    <div className="flex items-center justify-center p-6">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-6 max-w-3xl w-full">
        
        {/* Profile Image */}
        <div className="w-48 h-56 rounded-xl overflow-hidden shadow-md">
          <img
            src={coeImage}
            alt="Prof. (Dr.) Rajesh Kumar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-3">
          
          <h2 className="text-2xl font-bold text-gray-800">
           Prof. (Dr.) Rajesh Kumar
          </h2>

          <p className="text-lg text-blue-600 font-medium">
            Controller of Examination
          </p>

          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-xl"><FaPaperPlane /></span>
            <a
              href="mailto:coe@dseu.ac.in"
              className="hover:underline text-blue-500"
            >
              coe@dseu.ac.in
            </a>
          </div>
          <div>
            <h4 className="text-sm text-blue-500">Indo-US Raman Fellow, Vice President of INTS, Member of NASI</h4>
            <h4 className="text-sm text-blue-500">Delhi Skill and Entrepreneurship University (DSEU)</h4>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ControllerofExamination;