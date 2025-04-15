import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../utils/queryKeys";
import { getFacultyByDepartment, getHodInfo } from "../../utils/apiservice";

import HodData from "./GetHodInfo";
import HodInfoLoading from "../ShimmerUI/HodInfoLoading";
import GetDepartmentByDesignation from "./GetDepartmentByDesignation";

const primaryCategories = ["DSEU", "Deemed Deputation"];
const subCategories = [
  "HOD",
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Lecturer",
];

const FacultyByDepartment = ({ deptId }) => {
  const [activePrimary, setActivePrimary] = useState("DSEU");
  const [activeSub, setActiveSub] = useState("HOD");

  const { data: hod, isLoading: hodLoading } = useQuery({
    queryFn: () => getHodInfo(deptId),
    queryKey: [QUERY_KEYS.GET_HOD_INFO, deptId],
    enabled: !!deptId,
  });

  const { data: faculty, isLoading: isFacultyLoading } = useQuery({
    queryFn: () => getFacultyByDepartment(deptId),
    queryKey: [QUERY_KEYS.GET_FACULTIES_BY_DEPARTMENT, deptId],
    enabled: !!deptId,
  });

  // useEffect(() => {
  //   console.log(deptId);
  //   console.log(faculty);
  // }, [deptId, faculty]);

  if (hodLoading) {
    return <HodInfoLoading />;
  }

  return (
    <div className="md:px-6 py-4 w-full flex flex-col">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-1 rounded-full flex shadow-md">
          {primaryCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activePrimary === category
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActivePrimary(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="md:bg-gray-100 p-1 rounded-full flex flex-wrap gap-1 md:gap-2 md:shadow-md">
          {subCategories.map((category) => (
            <button
              key={category}
              className={`px-[0.3rem] md:px-4 py-2 text-xs md:text-sm font-medium md:rounded-full rounded-lg transition-all duration-300 ${
                activeSub === category
                  ? "bg-orange-500 text-white shadow-md scale-105"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSub(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 flex flex-col gap-2">
        <div className="space-y-3 flex flex-col gap-2">
          {activeSub === "HOD" ? (
            hod ? (
              <HodData hod={hod} />
            ) : (
              "Data not found."
            )
          ) : (
            <GetDepartmentByDesignation
              faculty={faculty}
              designation={activeSub}
              facultyType={activePrimary}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyByDepartment;
