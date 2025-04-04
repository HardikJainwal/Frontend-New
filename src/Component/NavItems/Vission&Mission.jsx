import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

import HeadingText from "../Reusable/HeadingText";

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

          <HeadingText
            heading={section.name}
            headingCN="text-3xl font-bold mb-3"
          />

          {section.desc && <div className="mt-4 space-y-3">{section.desc}</div>}

          <div className="mt-4 space-y-3">
            {section.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 flex items-center gap-2">
                <ArrowRightCircle className="text-blue-500 min-w-5 min-h-5 max-w-5 max-h-5" />
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
