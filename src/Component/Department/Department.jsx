import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { getDepartmentsBySchool } from "../../utils/apiservice";
import ListOfDepartmentsLoading from "../ShimmerUI/ListOfDepartmentsLoading";
import { QUERY_KEYS } from "../../utils/queryKeys";

const Department = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.GET_DEPARTMENTS_BY_SCHOOL, id],  
    queryFn: () => getDepartmentsBySchool(id),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <ListOfDepartmentsLoading />;

  if (error)
    return (
      <div className="text-center text-red-500 text-lg">
        Error: {error.message}
      </div>
    );

  return (
    <div className="p-6 md:mx-16 mx-4 flex flex-col gap-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#333] md:whitespace-nowrap text-center">
        {data.name}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 mt-6 md:mt-1 mb-7 md:mb-3">
        {data.departments.map((department) => (
          <Link 
            to={`/department/${department._id}`}
            key={department._id}
          >
            <p
              className="py-4 px-6 bg-blue-500 text-white text-center rounded-lg shadow-md hover:bg-blue-600 transition-colors text-lg cursor-pointer"
            >
              {department.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;
