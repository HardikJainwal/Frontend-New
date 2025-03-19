import { mission } from "../../constants/VISION&MISSION.JS";
import { vision } from "../../constants/VISION&MISSION.JS";

const VissionMission = () => {
  const sections = [vision, mission];

  return (
      <div className="w-4/5 p-4 mx-auto my-8 rounded-lg text-gray-800">
          {sections.map((section) => (
              <div key={section.id} className="text-left">
                  <h2 className="text-3xl mb-2 font-bold">{section.name}</h2>
                  <div className="flex items-center mt-[-5px] w-[80px]">
                      <div className="h-[2px] bg-blue-900 flex-1"></div>
                      <div className="h-[5px] w-[30px] bg-blue-900 rounded-[10px]"></div>
                      <div className="h-[2px] bg-blue-900 flex-1"></div>
                  </div>
                  <div className="my-2"></div>
                  {section.content.map((paragraph, index) => (
                      <p key={index} className="my-4 text-gray-600">
                          {paragraph}
                      </p>
                  ))}
              </div>
          ))}
      </div>
  );
};

export default VissionMission;