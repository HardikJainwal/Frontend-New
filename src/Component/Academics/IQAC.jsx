import React from "react";
import { motion } from "framer-motion";
import { BarChart2, BookOpen, FileText } from "lucide-react";
import HeadingText from "../Reusable/HeadingText";

const IQAC = () => {
  return (
    <div className="w-full bg-white text-gray-800 py-10 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <HeadingText
            heading="Internal Quality Assurance Cell (IQAC)"
            headingCN="text-2xl md:text-4xl font-bold mb-3"
          />
        
          <p className="mt-4 text-sm md:text-base text-justify leading-relaxed text-gray-700">
            The Internal Quality Assurance Cell (IQAC) is established to develop a system for
            conscious, consistent and catalytic improvement in the overall performance of the institution.
            The IQAC works towards the enhancement of academic and administrative performance and promotes
            quality initiatives across all departments.
          </p>
        </motion.div>

 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
  
          <h4 className="text-3xl md:text-4xl font-bold text-center text-gray-800 border-b-4 border-orange-400 pb-3 shadow-sm w-fit mb-4">Objectives of IQAC</h4>
     
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
            <li>To ensure continuous improvement in academic and administrative processes.</li>
            <li>To promote innovative practices for holistic development.</li>
            <li>To encourage feedback mechanisms and data-driven decision making.</li>
            <li>To maintain institutional quality benchmarks and best practices.</li>
          </ul>
        </motion.div>

 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <HeadingText
            heading="IQAC Functions"
            headingCN="text-xl md:text-2xl font-semibold text-center mb-6"
          />

          <div className="grid md:grid-cols-3 gap-6">
 
            <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-xl shadow-md">
              <BarChart2 className="w-10 h-10 text-blue-600 mb-3" />
              <p className="font-semibold text-sm md:text-base">
                Develop and apply <br /> quality benchmarks
              </p>
            </div>

 
            <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-xl shadow-md">
              <BookOpen className="w-10 h-10 text-blue-600 mb-3" />
              <p className="font-semibold text-sm md:text-base">
                Promote learner-<br /> focused environment
              </p>
            </div>

 
            <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-xl shadow-md">
              <FileText className="w-10 h-10 text-blue-600 mb-3" />
              <p className="font-semibold text-sm md:text-base">
                Document and share <br /> quality improvements
              </p>
            </div>
          </div>
        </motion.div>

 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <HeadingText
            heading="Contact IQAC"
            headingCN="text-xl md:text-2xl font-semibold mb-2"
          />
          <p className="text-sm md:text-base text-gray-700">
            For queries, suggestions, or collaborations, reach out to our IQAC team.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IQAC;
