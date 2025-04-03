import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getDepartments } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";

const Department = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.GET_DEPARTMENTS],
    queryFn: getDepartments,
  });

  const departments = Array.isArray(data) ? data : [];

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error: <span className="text-red-400">{error.message}</span>
      </div>
    );

  return (
    <div className="w-4/5 p-4 mx-auto my-8 rounded-lg text-gray-800">
      <h2 className="text-3xl mb-2 font-bold">Departments</h2>
      <div className="flex items-center mt-[-5px] w-[120px]">
        <div className="h-[2px] bg-blue-900 flex-1"></div>
        <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px]"></div>
        <div className="h-[2px] bg-blue-900 flex-1"></div>
      </div>
      <div className="my-2"></div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((d) => (
          <Link
            key={d._id}
            to={`/departments/${d._id}`}
            className="p-4 bg-gray-100 dark:bg-blue-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-500 dark:hover:bg-orange-600 group text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
              {d.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;
