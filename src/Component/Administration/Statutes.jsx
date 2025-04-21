import React from "react";
import HeadingText from "../Reusable/HeadingText";
import { ArrowRight, Download } from "lucide-react";

const data = [];

const Statutes = () => {
  return (
    <div className="my-10">
      <HeadingText
        heading="Statutes, University Act, Ordinances"
        headingCN="text-2xl md:text-3xl font-bold mb-1 text-center"
      />

      <ul className="pl-4 text-gray-700 space-y-4 md:space-y-2 mt-10">
        {data.map((item, index) => (
          <li
            key={index}
            className="group flex items-center justify-between gap-2 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition" />
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:underline"
              >
                {item.text}
              </a>
            </div>
            <a
              href={item.path}
              download
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded hover:bg-blue-100 transition"
            >
              <Download className="w-5 h-5 text-gray-400 hover:text-blue-600 transition" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statutes;
