import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

const getDepartmentsBySchool = async (id) => {
  const response = await api.get(`/departmentSchools`);
  return response.data.data.departmentSchools.find(
    (school) => school._id === id
  );
};

const DepartmentById = () => {
  const { departmentPath: id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getDepartmentById", id],
    queryFn: () => getDepartmentsBySchool(id),
  });

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
    <div className="flex w-4/5 mx-10 my-10 text-gray-800">
      {/* Sidebar for Departments */}
      <div className="w-1/4 min-w-[250px] h-fit sticky top-0 bg-gray-100 p-5 rounded-lg shadow-md my-10">
        <h3 className="text-lg font-bold mb-4">Departments</h3>
        <ul className="space-y-3">
          {data.dept_id.map((dept) => (
            <li
              key={dept._id}
              className={`cursor-pointer p-1 rounded-md transition-colors h-fit ${
                dept._id === id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100 text-gray-700"
              }`}
              onClick={() => navigate(`/departments/${dept._id}`)}
            >
              {dept.name}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="w-3/4 px-8 flex flex-col h-fit">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
          {data.name} Department
        </h2>
        {data.hod && (
          <p className="text-lg">
            <span className="font-semibold">HOD:</span>{" "}
            <a
              href={`mailto:${data.hod}`}
              className="text-blue-600 hover:underline"
            >
              {data.hod}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default DepartmentById;
