import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../utils/queryKeys";
import { getDepartmentById, getHodInfo } from "../../utils/apiservice";

const categories = [
  "HOD",
  "Professor",
  "Associate Professor",
  "Assistant Professor",
];

const FacultyByDepartment = ({ deptId }) => {
  const [activeCategory, setActiveCategory] = useState("HOD");

  const { data: hod, isLoading: hodLoading } = useQuery({
    queryFn: () => getHodInfo(deptId),
    queryKey: [QUERY_KEYS.GET_HOD_INFO, deptId],
    enabled: !!deptId,
  });

  if (hodLoading) {
    return <div>Loading the information of HOD.</div>;
  }

  return (
    <div className="md:px-6 py-4 w-full flex flex-col">
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-0 md:p-1 rounded-full flex space-x-2 shadow-md">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-7 py-2 md:text-sm font-medium rounded-full transition-all duration-300 text-xs ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-md scale-105"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 flex flex-col gap-2">
        {activeCategory === "HOD" && hod
          ? JSON.stringify(hod)
          : "Data not found."}
      </div>
    </div>
  );
};

const FacultyStructure = () => {
  return <div>data.</div>;
};

export default FacultyByDepartment;
