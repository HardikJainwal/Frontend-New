import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const tempData = [
  {
    id: 1,
    name: "Policy for Employees",
    points: [
      "Employees must adhere to company policies and ethical guidelines.",
      "All employees are required to maintain confidentiality of sensitive information.",
      "Performance reviews will be conducted annually for feedback and growth.",
      "Code of conduct violations may result in disciplinary action.",
    ],
  },
  {
    id: 2,
    name: "IT Policy",
    points: [
      "All employees must use official email accounts for work-related communication.",
      "Unauthorized software installations on company devices are strictly prohibited.",
      "Data security measures must be followed, including regular password updates.",
      "Company internet should only be used for work-related tasks.",
    ],
  },
  {
    id: 3,
    name: "Leave Policy",
    points: [
      "Employees are entitled to a fixed number of paid leaves per year.",
      "Sick leave must be reported to the HR department as soon as possible.",
      "Unapproved leave may result in salary deduction or disciplinary action.",
      "Long-term leaves require prior approval from the management.",
    ],
  },
];

const EmployeePolicy = () => {
  const [current, setCurrent] = useState(null);

  const handleClick = (id) => {
    setCurrent(current === id ? null : id);
  };

  return (
    <div className="p-6 md:p-10 flex flex-col gap-10">
      <div className="text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Policy for Employees
        </h3>
        <hr className="h-1 bg-gray-700 border-none rounded-full w-32 md:w-48 mx-auto md:mx-0" />
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
                    className="flex items-center gap-2 opacity-0 translate-x-[-10px] transition-all duration-300 ease-in-out"
                    style={{
                      opacity: current === data.id ? 1 : 0,
                      transform:
                        current === data.id
                          ? "translateX(0)"
                          : "translateX(-10px)",
                    }}
                  >
                    <ArrowRight
                      className={`min-h-4 min-w-4 transition-transform duration-300 ease-in-out ${
                        current === data.id ? "scale-100" : "scale-0"
                      }`}
                    />
                    {point}
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
