import React from "react";
import HeadingText from "../Reusable/HeadingText";

const rules = [
  {
    title: "Faculty Recruitment Guidelines",
    link: "/rules/faculty",
  },
  {
    title: "Staff Hiring Policy",
    link: "/rules/staff",
  },
  {
    title: "Temporary Hiring Rules",
    link: "/rules/temporary",
  },
];

const RecruitmentRules = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <HeadingText
            heading="Recruitment Rules"
            headingCN="text-3xl md:text-5xl font-bold mb-3 text-center"
          />
      <div className="w-full max-w-3xl space-y-4 mt-5">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center"
          >
            <h2 className="text-lg font-semibold">{rule.title}</h2>
            <a
              href={rule.link}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentRules;
