import React from 'react'
import HeadingText from "../Reusable/HeadingText";


const data = [
  [
      {
        text: "Guidelines for Condemnation  ",
        path: "/Employee_policies/Entitlement of Perks and Privileges to DSEU Officers Reg.pdf",
      },
      {
        text: "Delhi Skill and Entrepreneurship University First Statutes",
        path: "/Employee_policies/Joining Report after Availing Leave.pdf",
      },
      {
        text: "Delhi Skill and Entrepreneurship University Act-2019 ",
        path: "/Employee_policies/LTC Claim BIll (GAR-14C).pdf",
      }
      
    ],

]
const Statutes = () => {
  return (
    <div>
         <HeadingText
            heading="Statutes, University Act, Ordinances"
            headingCN="text-2xl md:text-3xl font-bold mb-1 text-center"
          />

    <div>
    <ul className="list-none pl-4 text-gray-700 space-y-2 md:p-3 flex flex-col gap-4 md:gap-2 sm:gap-3">
                {data.points.map((point, index) => (
                  <li
                    key={index}
                    className="group flex items-center justify-between gap-2 opacity-0 translate-x-[-10px] transition-all duration-300 ease-in-out"
                    style={{
                      opacity: current === data.id ? 1 : 0,
                      transform:
                        current === data.id
                          ? "translateX(0)"
                          : "translateX(-10px)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <ArrowRight
                        className={`min-w-3 min-h-3 max-w-3 max-h-3 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-blue-600 ${
                          current === data.id
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                      />
                      {typeof point === "string" ? (
                        point
                      ) : point.path ? (
                        <a
                          href={point.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 hover:underline"
                        >
                          {point.text}
                        </a>
                      ) : (
                        point.text
                      )}
                    </div>

                    {typeof point === "object" && point.path && (
                      <a
                        href={point.path}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded hover:bg-blue-100 transition"
                      >
                        <Download className="min-w-4 min-h-4 max-w-4 max-h-4 md:max-h-6 md:max-w-6 text-gray-400 hover:text-blue-600 transition-all" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
    </div>


    </div>
  )
}

export default Statutes