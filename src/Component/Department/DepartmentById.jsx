import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { getFaculties } from "../../utils/apiservice";

const getDepartmentsBySchool = async (id) => {
  const response = await api.get(`/departmentSchools`);
  return response.data.data.departmentSchools.find(
    (school) => school._id === id
  );
};

const getFacultyByDepartment = async (id) => {
  const response = await getFaculties();
  return response.filter((faculty) => faculty.dept_id._id === id);
};

const DepartmentById = () => {
  const [deptId, setDeptId] = useState(null);  

  const { departmentPath: id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getDepartmentById", id],
    queryFn: () => getDepartmentsBySchool(id),
  });

  const { data: faculty } = useQuery({
    queryKey: ["GETFACULTY", deptId],
    queryFn: () => getFacultyByDepartment(deptId),
    enabled: !!deptId,
  });

  useEffect(() => {
    console.log(faculty);
    
  }, [faculty]);

  if (isLoading) {
    return (
      <div className="text-center text-xl font-semibold my-10">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Error: {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-gray-600">No department found.</div>
    );
  }

  return (
    <div className="flex w-fit mx-10 my-10 text-gray-800">
      {/* Sidebar for Departments */}
      <div className={`w-[22%] min-w-[250px] h-fit sticky top-0 bg-gray-100 p-5 rounded-lg shadow-md my-10`}>
        <h3 className="text-lg font-bold mb-4">Departments</h3>
        <ul className="space-y-3">
          {data.dept_id.map((dept) => (
            <li
              key={dept._id}
              className={`cursor-pointer p-1 rounded-md transition-colors h-fit ${
                dept._id._id === id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100 text-gray-700"
              }`}
              onClick={() => setDeptId(dept._id)}
            >
              {dept.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 px-8 flex flex-col h-fit">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 whitespace-nowrap">
          {data.name}
        </h2>

        {faculty?.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Faculty Members:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {faculty.map((member) => (
                <div
                  key={member._id}
                  className="p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <img
                    src={member.photo || "/default-avatar.png"}
                    alt={member.firstName}
                    className="w-16 h-16 rounded-full object-cover mb-2"
                  />
                  <p className="font-semibold">{member.firstName}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentById;
