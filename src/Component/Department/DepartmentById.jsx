import { useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getDepartmentById", id],
    queryFn: () => getDepartmentsBySchool(id),
  });

  const { data: faculty = [] } = useQuery({
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
      <div className="w-[22%] min-w-[250px] h-fit sticky top-0 bg-gray-100 p-5 rounded-lg shadow-md my-10">
        <h3 className="text-lg font-bold mb-4">Departments</h3>
        <div className="grid grid-cols-1 gap-3">
          {data.dept_id && data.dept_id.map((dept) => (
            <button
              key={dept._id}
              className={` flex items-center justify-center p-2 rounded-md transition-colors ${
                deptId === dept._id
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-blue-100 text-gray-700"
              } shadow`}
              onClick={() => setDeptId(dept._id)}
            >
              <span className="text-center p-1">{dept.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="ml-20 w-full">
        <h3 className="text-lg font-semibold mb-3">Faculty Members:</h3>
        {faculty && faculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {faculty.map((member) => (
              <div
                key={member._id}
                className="w-72 h-76 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between p-4 cursor-pointer"
                onClick={() => navigate(`/faculty/${member._id}`)}
              >
                <div className="w-40 h-40 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={`${member.firstname} ${member.surname}`}
                      className="w-full h-full "
                    />
                  ) : (
                    <span className="text-gray-500 text-2xl font-bold">
                      {member.firstname ? member.firstname[0] : ""}
                      {member.surname ? member.surname[0] : ""}
                    </span>
                  )}
                </div>
                
                <div className="text-center mt-2">
                  <p className="font-semibold text-lg truncate max-w-full">
                    {member.salutation} {member.firstname} {member.surname}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-500 hover:underline mt-1 block truncate max-w-full"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-10 bg-gray-50 rounded-lg">
            {deptId ? "No faculty members found for this department." : "Please select a department to view faculty members."}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentById;