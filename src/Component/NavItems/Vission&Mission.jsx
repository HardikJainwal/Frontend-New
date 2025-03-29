import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import {
  mission,
  vision,
  keyPrincipals,
} from "../../constants/VISION&MISSION.JS";

const VissionMission = () => {
  const sections = [vision, mission, keyPrincipals];

  return (
    <div className="w-full max-w-4xl mx-auto my-10 mb-16 md:mb-0 px-6 text-gray-800">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">{section.name}</h2>
          <div className="flex items-center w-[100px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[40px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>

          {section.desc && <div className="mt-4 space-y-3">{section.desc}</div>}

          <div className="mt-4 space-y-3">
            {section.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 flex items-center gap-2">
                <ArrowRightCircle className="text-blue-500 w-5 h-5" />
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VissionMission;
