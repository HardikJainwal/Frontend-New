import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

const getDepartmentsBySchool = async (id) => {
  const response = await api.get(`/departmentSchools`);
  return response.data.data.departmentSchools.find(
    (school) => school._id === id
  );
};


const getFacultyByDepartment = async (id) => {
  try {
    const response = await api.get(`/faculty`);
    return response.data.data.faculty.filter(faculty => faculty.department === id);
  } catch (error) {
    console.error("Error fetching faculty:", error);
    return [];
  }
};

const DepartmentById = () => {
  const { departmentPath: id } = useParams();
  const navigate = useNavigate();

  const { data: departmentData, isLoading: isDepartmentLoading, error: departmentError } = useQuery({
    queryKey: ["getDepartmentById", id],
    queryFn: () => getDepartmentsBySchool(id),
  });

  const { data: facultyData, isLoading: isFacultyLoading, error: facultyError } = useQuery({
    queryKey: ["getFacultyByDepartment", id],
    queryFn: () => getFacultyByDepartment(id),
    enabled: !!id, 
  });

  if (isDepartmentLoading || isFacultyLoading) {
    return (
      <div className="text-center text-xl font-semibold my-10">Loading...</div>
    );
  }

  if (departmentError || facultyError) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Error: {departmentError?.message || facultyError?.message}
      </div>
    );
  }

  if (!departmentData) {
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
          {departmentData.dept_id.map((dept) => (
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
          {departmentData.name} Department
        </h2>
        {departmentData.hod && (
          <p className="text-lg mb-6">
            <span className="font-semibold">HOD:</span>{" "}
            <a
              href={`mailto:${departmentData.hod}`}
              className="text-blue-600 hover:underline"
            >
              {departmentData.hod}
            </a>
          </p>
        )}

        {/* Faculty Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-200">
            Faculty Members
          </h3>
          
          {!facultyData || facultyData.length === 0 ? (
            <p className="text-gray-500 italic">No faculty members found for this department.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facultyData.map((faculty) => (
                <div key={faculty._id} className="bg-white p-4 rounded-lg shadow-md flex">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden mr-4">
                    {faculty.profileImage ? (
                      <img 
                        src={faculty.profileImage} 
                        alt={`${faculty.name}`}
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500 font-bold text-xl">
                        {faculty.name?.charAt(0) || 'F'}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{faculty.name}</h4>
                    <p className="text-gray-600">{faculty.designation || 'Faculty Member'}</p>
                    {faculty.email && (
                      <a 
                        href={`mailto:${faculty.email}`}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {faculty.email}
                      </a>
                    )}
                    {faculty.specialization && (
                      <p className="text-gray-700 text-sm mt-1">
                        <span className="font-medium">Specialization:</span> {faculty.specialization}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentById;