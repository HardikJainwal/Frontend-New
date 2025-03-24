import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import FacultyLoading from '../ShimmerUI/FacultyLoading'

import api from "../../utils/api";
import { getFaculties } from "../../utils/apiservice";

const getDepartmentsBySchool = async (id) => {
  const response = await api.get(`/departmentSchools`);
  return response.data.data.departmentSchools.find(
    (school) => school._id === id
  );
};

const getFacultyByDepartment = async (id) => {
  const response = await getFaculties();
  // console.log(response);
  const data = response.filter(
    (faculty) => faculty.dept_id?._id === id.toString()
  );

  return data;
};

const DepartmentById = () => {
  const [deptId, setDeptId] = useState(null);
  const { departmentPath: id } = useParams();

  const navigate = useNavigate();

  // Fetch department names acc to schools
  const { data, isLoading, error } = useQuery({
    queryKey: ["getDepartmentById", id],
    queryFn: () => getDepartmentsBySchool(id),
  });

  // Fetch faculties belonging to a certain department
  const { data: faculty = [], isLoading: isFacultyLoading } = useQuery({
    queryKey: ["GETFACULTY", deptId],
    queryFn: () => getFacultyByDepartment(deptId),
    enabled: !!deptId,
  });

  useEffect(() => {
    if (!deptId) {
      if (data?.dept_id) {
        setDeptId(data.dept_id[0]._id);
      }
    }
  }, [deptId, data]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center md:h-96 h-screen space-y-4 text-gray-700 animate-pulse">
        <Loader2Icon className="animate-spin h-16 w-16 animate-spin-color" />
        <p className="text-lg font-medium">Loading, please wait...</p>
      </div>
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
    <div className="flex w-fit mx-10 my-10 text-gray-800 flex-col md:flex-row">
      {/* Desktop departments sidebar */}
      <div className="w-[22%] min-w-[250px] h-fit md:sticky top-0 bg-gray-100 p-5 rounded-lg shadow-md my-10 hidden md:block">
        <h3 className="text-lg font-bold mb-4">Departments</h3>
        <div className="grid grid-cols-1 gap-3">
          {data.dept_id &&
            data.dept_id.map((dept) => (
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

      {/* Mobile departments bar */}
      <div className="md:hidden w-full mb-4">
        <select
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700"
          onChange={(e) => setDeptId(e.target.value)}
          value={deptId || ""}
        >
          <option value="" disabled>
            Select a department
          </option>
          {data.dept_id.map((dept) => (
            <option key={dept._id} value={dept._id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      <div className="md:ml-20 w-full">
        <h3 className="text-lg font-semibold mb-3 mt-5">Faculty Members:</h3>
        {isFacultyLoading ? (
          <FacultyLoading />
        ) : faculty.length > 0 ? (
          <div className="grid grid-cols sm:grid-cols-2 gap-8 sm:gap-10 
          md:grid-cols-1 lg:grid-cols-3 md:gap-4 justify-center">
            {faculty.map((member) => (
              <div
                key={member._id}
                className="w-72 h-auto bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between p-4"
              >
                <div className="w-40 h-40 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={`${member.firstname} ${member.surname}`}
                      className="w-full h-full"
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    {member.email}
                  </a>
                </div>

                <button
                  onClick={() => navigate(`/faculty/${member._id}`)}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors w-full"
                >
                  View Faculty
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-10 rounded-xl border border-gray-300 text-lg font-medium text-gray-700 mt-6">
            No faculty members found for this department.
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentById;
