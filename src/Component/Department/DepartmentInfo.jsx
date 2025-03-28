// new department by id.
// individual page for each department
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getDepartmentById } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";

const TABS = [
  { id: "curriculum", label: "Curriculum" },
  { id: "faculty", label: "Faculty" },
  { id: "programs", label: "Programs" },
];

const DepartmentInfo = () => {
  const { departmentId: id } = useParams();
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const { data: department, isLoading: isDepartmentLoading } = useQuery({
    queryFn: () => getDepartmentById(id),
    queryKey: [QUERY_KEYS.GET_DEPARTMENT_BY_ID, id],
  });

  useEffect(() => {
    console.log(department);
  }, [department]);

  if (isDepartmentLoading) {
    return <div>Loading department..</div>;
  }

  return (
    <div className="p-6 px-2 lg:px-6 md:px-3 md:mx-16 mx-4 flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-center">{department.name}</h2>

      <div className="flex justify-center gap-4 border-b pb-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1 md:py-2 text-md md:text-lg rounded-t-md ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {activeTab === "curriculum" && <p>Curriculum content</p>}
        {activeTab === "faculty" && <p>Faculty information</p>}
        {activeTab === "programs" && <p>Programs details</p>}
      </div>
    </div>
  );
};

export default DepartmentInfo;
