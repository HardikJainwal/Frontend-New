import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../utils/queryKeys";
import { getFacultyById } from "../../utils/apiservice";

const FacultyByDepartment = () => {
  const { facultyId: id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.GET_FACULTY_BY_ID, id],
    queryFn: () => getFacultyById(id),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <div className="text-center my-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 my-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col md:flex-row gap-10 text-gray-900 dark:text-gray-100 mx-10 lg:mx-32 my-10">
      <img
        src={data.photo}
        alt={data.name}
        className="rounded-xl object-cover border-2 border-gray-300 min-h-[200px] min-w-[200px]"
      />
      <div className="flex flex-col">
        <h2 className="md:text-3xl text-2xl font-bold text-black">{data?.name}</h2>
        <p className="text-base text-gray-800 ">{data?.email}</p>
        <p className="text-base font-medium mt-1">
          {data?.department?.name}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {data?.overview}
        </p>
      </div>
    </div>
  );
};

export default FacultyByDepartment;
