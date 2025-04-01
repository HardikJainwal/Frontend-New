// new department by id.
// individual page for each department
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDepartmentById } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";

const CurriculumContent = () => <div>Curriculum to be provided.</div>;
const FacultyContent = () => <div>Faculty Information</div>;
const ProgramsContent = () => <div>Programs to be provided.</div>;

const TABS = [
  { id: "curriculum", label: "Curriculum", component: CurriculumContent },
  { id: "faculty", label: "Faculty", component: FacultyContent },
  { id: "programs", label: "Programs", component: ProgramsContent },
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

  if (isDepartmentLoading) return <div>Loading department..</div>;

  const ActiveComponent = TABS.find((tab) => tab.id === activeTab)?.component;

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

      <div className="p-4">{ActiveComponent && <ActiveComponent />}</div>
    </div>
  );
};

export default DepartmentInfo;
