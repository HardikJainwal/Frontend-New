import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import NoFaculty from "../Reusable/NoFaculty";
import { QUERY_KEYS } from "../../utils/queryKeys";
import {
  getDepartmentName,
  getFacultyByDepartment,
} from "../../utils/apiservice";

const DepartmentById = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.GET_FACULTIES_BY_DEPARTMENT, id],
    queryFn: () => getFacultyByDepartment(id),
  });

  const { data: departmentName } = useQuery({
    queryKey: [QUERY_KEYS.GET_DEPARTMENT_BY_ID, id],
    queryFn: () => getDepartmentName(id),
  });

  // useEffect(() => {
  //   //! DELETE LATER
  //   console.log(departments);
  //   // console.log(data);
  // }, [data, departments]);

  if (isLoading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="w-4/5 mx-auto my-8 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 mt-10">
      {departmentName + " Department"}
      </h2>

      {data.length === 0 ? (
        <NoFaculty />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {data.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border">
                {/* <img
                  src={
                    "https://drive.google.com/file/d/15Qou4NwzsNGoJ9Htl4Q70FOkqAmWVoLB/view?usp=sharing"
                  }
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                /> */}

                <img
                  src="https://drive.google.com/file/d/15Qou4NwzsNGoJ9Htl4Q70FOkqAmWVoLB/view"
                  alt="drive image"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{faculty.name}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {faculty.designation}
              </p>

              <Link to={`faculty/${faculty._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  View Profile
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentById;
