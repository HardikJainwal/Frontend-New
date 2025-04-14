import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import HeadingText from "../Reusable/HeadingText";

const antiRaggingInfo = [
  "Ragging is any act of physical or mental abuse targeted at a student, often under the guise of 'introduction' or 'interaction' by seniors.",
  "It includes behavior that causes embarrassment, fear, or humiliation, such as name-calling, forced tasks, or verbal harassment.",
  "Ragging can be physical, emotional, or psychological and may involve threats, isolation, or abuse of authority.",
  "It violates the dignity and rights of students and is considered a punishable offense under law and institutional policies.",
];

const actionsAgainstRagging = [
  "Immediate suspension of students involved in ragging, pending investigation.",
  "Investigation by the Anti-Ragging Cell to identify all perpetrators and ensure accountability.",
  "Counseling and support provided to the victims of ragging to help them recover from the trauma.",
  "Legal action may be taken against offenders, including criminal prosecution as per applicable laws.",
];

const pdfLinks = [
  { name: "Student Form", url: "/Affidavit-by-Student.pdf" },
  { name: "Parent Form", url: "/Affidavit-by-Parent.pdf" },
  { name: "Anti Ragging rules UGC", url: "/Anti-Ragging-Rules-UGC.pdf" },
  { name: "Honourable Supreme Court of India judgement", url: "/Honourable-Supreme-Court-of-india-judgement.pdf" },
];

const AntiRagging = () => {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <HeadingText
            heading="Anti-Ragging Policy"
            headingCN="text-5xl font-bold mb-6 text-center"
          />
          <p className="text-lg text-gray-600 mt-4 text-justify leading-relaxed">
            Our college strictly prohibits ragging. The Anti-Ragging Cell
            ensures a safe and welcoming environment on campus by actively
            monitoring student interactions, conducting awareness programs, and
            addressing grievances promptly. We are committed to fostering a
            culture of mutual respect, inclusivity, and support, where every
            student can learn and grow without fear or intimidation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <HeadingText
            heading="What is Ragging?"
            headingCN="text-3xl font-bold mb-4"
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 space-y-6 text-gray-700 text-base leading-relaxed"
        >
          {antiRaggingInfo.map((point, index) => (
            <li key={index} className="flex items-start gap-4 list-none text-justify">
              <ArrowRightCircle className="text-red-500 w-6 h-6 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </motion.ul>

        {/* Actions Against Ragging Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14"
        >
          <HeadingText
            heading="Actions Against Ragging"
            headingCN="text-3xl font-bold mb-4 text-center"
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 space-y-6 text-gray-700 text-base leading-relaxed"
        >
          {actionsAgainstRagging.map((action, index) => (
            <li key={index} className="flex items-start gap-4 list-none text-justify">
              <ArrowRightCircle className="text-green-500 w-6 h-6 mt-1" />
              <span>{action}</span>
            </li>
          ))}
        </motion.ul>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14"
        >
          <HeadingText
            heading="Forms & Notices"
            headingCN="text-3xl font-bold mb-2 text-center"
          />
        </motion.div>

        <div className="flex justify-between text-gray-700 text-base leading-relaxed  mt-7">
          {pdfLinks.map((pdf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <ArrowRightCircle className="text-blue-500 w-6 h-6" />
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
