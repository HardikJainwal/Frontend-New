import { ArrowBigRight } from "lucide-react";
import { aboutTheUniversity } from "../../constants/INTRODUCTION.JS";

const About = () => {
  console.log(aboutTheUniversity);

  return (
    <>
      <div className="w-4/5 p-1 sm:p-3 md:p-4 mx-auto my-8 rounded-lg text-gray-800">
        <div className="text-left mb-10">
          <h2 className="text-3xl mb-2 font-bold">About DSEU</h2>
          <div className="flex items-center mt-[-5px] w-[120px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>
          <div className="my-2"></div>

          {aboutTheUniversity.info1.map((info, index) => (
            <p key={index} className="my-4 text-gray-600">
              {info}
            </p>
          ))}

          <h2 className="text-xl mt-6 mb-3 font-semibold">Objectives</h2>
          <ul className="pl-6 text-gray-600 list-none">
            {aboutTheUniversity.objectives.map((objective, index) => (
              <li key={index} className="mb-2 flex flex-row items-center gap-2">
                <ArrowBigRight 
                className="min-h-5 min-w-5 md:mb-0 mb-5"
                />
                {objective}
              </li>
            ))}
          </ul>

          {aboutTheUniversity.info2.map((info, index) => (
            <p key={index} className="my-4 text-gray-600">
              {info}
            </p>
          ))}
        </div>

      </div>
    </>
  );
};

export default About;
