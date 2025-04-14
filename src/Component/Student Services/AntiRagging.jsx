import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import HeadingText from "../Reusable/HeadingText";
import { antiRagging as antiRaggingData } from "../../constants/ANTIRAGGING.JS";

const AntiRagging = () => {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <HeadingText
            heading="Anti-Ragging Policy"
            headingCN="text-5xl font-bold mb-3 text-center"
          />
          <p className="text-lg text-gray-600 mt-4 text-justify leading-relaxed">
            {antiRaggingData.introText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <HeadingText
            heading="What is Ragging?"
            headingCN="text-3xl font-bold mb-3"
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 space-y-4 text-gray-700 text-base leading-relaxed"
        >
          {antiRaggingData.whatIsRagging.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 list-none text-justify"
            >
              <ArrowRightCircle className="text-red-500 w-5 h-5 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <HeadingText
            heading="Actions Against Ragging"
            headingCN="text-3xl font-bold mb-3 text-center"
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 space-y-4 text-gray-700 text-base leading-relaxed"
        >
          {antiRaggingData.actionsAgainstRagging.map((action, index) => (
            <li
              key={index}
              className="flex items-start gap-3 list-none text-justify"
            >
              <ArrowRightCircle className="text-green-500 w-5 h-5 mt-1" />
              <span>{action}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <HeadingText
            heading="Important Anti-Ragging Documents"
            headingCN="text-3xl font-bold mb-3 text-center"
          />
        </motion.div>

        <div className="flex flex-wrap gap-6 justify-center mt-8 text-gray-700 text-base leading-relaxed">
          {antiRaggingData.pdfLinks.map((pdf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-3 min-w-[250px] sm:min-w-[300px] text-sm sm:text-base"
            >
              <ArrowRightCircle className="text-blue-500 w-5 h-5" />
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {pdf.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;
