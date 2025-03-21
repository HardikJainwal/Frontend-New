import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

const faculty = [
  {
    name: "Faculty of Hindi",
    data: [{ name: "demo" }, { name: "demo2" }],
  },
];

const getDepartmentsBySchool = async (id) => {
  const response = await api.get(`/departmentSchools`);
  return response.data.data.departmentSchools.find(
    (school) => school._id === id
  );
};

const DepartmentById = () => {
  const { departmentPath: id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getDepartmentById", id],
    queryFn: () => getDepartmentsBySchool(id),
  });

  // test
  // useEffect(() => {
  //   if (data?.name) {
  //     const urlName = generateSlug(data.name);
  //     window.history.pushState({}, "", `/departments/${urlName}`);
  //   }
  // }, [data]);

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
    <div className="w-4/5 mx-auto my-10 text-gray-800 mb-16 md:mb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 mt-10">
        {data.name} Department
      </h2>

      {data.dept_id.length === 0 ? (
        <div className="text-center text-gray-600">
          No departments available.
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-6 mt-10 justify-center items-center">
          {data.dept_id.map((dept) => (
            <div
              key={dept._id}
              className="group bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer hover:bg-blue-400 hover:text-white hover:shadow-blue-100"
            >
              <h3 className="text-lg font-semibold text-center">{dept.name}</h3>
              {dept.hod && (
                <p className="text-sm mt-1 group-hover:text-white">
                  HOD:{" "}
                  <a
                    href={`mailto:${dept.hod}`}
                    className="text-blue-600 group-hover:text-[#333] hover:underline"
                  >
                    {dept.hod}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentById;
