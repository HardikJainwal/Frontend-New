//! temporary file

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
    //! DELETE LATER
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <div className="text-center my-10">Loading...</div>;
    // later to be replaced by a proper loader
  }

  return (
    <div className="w-3/5 mx-auto my-10 p-6 bg-white  flex items-center gap-6">
      {JSON.stringify(data)}
    </div>
  );
};

export default FacultyByDepartment;
``