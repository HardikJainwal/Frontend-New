import { useState } from "react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";

const tempData = [
  {
    id: 1,
    name: "Policies for Employees",
    points: [
      {
        text: "Entitlement of Perks and Privileges to DSEU Officers Reg.- 07/03/2023 ",
        path: "/Employee_policies/Entitlement of Perks and Privileges to DSEU Officers Reg.pdf",
      },
      {
        text: "Joining Report after Availing Leave – 20.12.2022",
        path: "/Employee_policies/Joining Report after Availing Leave.pdf",
      },
      {
        text: "LTC Claim BIll (GAR-14C) – 30.03.2023",
        path: "/employee_policies/LTC Claim BIll (GAR-14C).pdf",
      },
      {
        text: "Medical Card for the employees of the Delhi Skill and Entrepreneurship University – 20.01.2023",
        path: "/employee_policies/Medical Card for the employees of the Delhi Skill and Entrepreneurship University.pdf",
      },
      {
        text: "Procedure for submission of Medical Bills for Re-imbursement – 20.01.2023",
        path: "/employee_policies/Procedure for submission of Medical Bills for Re-imbursement.pdf",
      },
      {
        text: "Professional Development Fund Guidelines – 22.06.2023 ",
        path: "/employee_policies/Professional Development Fund Guidelines.pdf",
      },
      {
        text: "Regarding Requirement of DGEHS Medical Card at DSEU Campuses – 18.01.2023",
        path: "/employee_policies/Regarding Requirement of DGEHS Medical Card at DSEU Campuses.pdf",
      },
    ],
  },
  {
    id: 2,
    name: "IT Policies",
    points: [
      {
        text: "Purchase and AMC of ComputersIT Equipment via GeM Portal & Hiring of Manpower on an Outsourcing Basis",
        path: "/IT_policies/Purchase and AMC of ComputersIT Equipment via GeM Portal & Hiring of Manpower on an Outsourcing Basis.pdf"
      }
    ],
  },
  {
    id: 3,
    name: "Leave Policies",
    points: [
      {
        text: "Guidelines to apply for Regular Leave",
        path: "/Leave_policies/Guidelines to apply for Regular Leave.pdf"
      },
      {
        text: "Leave Policy",
        path: "/Leave_policies/Leave Policy.pdf"
      }
      ],
  },
];

const EmployeePolicy = () => {
  const [current, setCurrent] = useState(null);

  const handleClick = (id) => {
    setCurrent(current === id ? null : id);
  };

  return (
    <div className="p-6 md:p-10 flex flex-col gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 border-b-4 border-orange-400 pb-3 shadow-sm w-fit mb-1">
        Policies for Employees
        </h3>
      </div>

      <div className="flex flex-col gap-6 md:mb-10">
        {tempData.map((data) => (
          <div
            key={data.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer hover:bg-blue-200 transition-all ${
                current === data.id && "bg-blue-400 text-white font-semibold"
              }`}
              onClick={() => handleClick(data.id)}
            >
              <h3
                className={`text-lg font-semibold text-gray-800 ${
                  current === data.id && "text-white font-semibold"
                }`}
              >
                {data.name}
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  current === data.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                current === data.id ? "max-h-[500px] p-3" : "max-h-0 p-0"
              }`}
            >
              <ul className="list-none pl-4 text-gray-700 space-y-2 p-3">
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
                        className={`w-3 h-3 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-blue-600 ${
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
                        <Download className="w-4 h-4 text-gray-400 hover:text-blue-600 transition-all" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeePolicy;
