// stores the information about individual faculty

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { getFacultyById } from "../../utils/apiservice";
import { useEffect } from "react";

const FacultyInfo = () => {
  const { id } = useParams();

  const {
    data: faculty,
    isLoading: isFacultyLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_FACULTY_BY_ID, id],
    queryFn: () => getFacultyById(id),
  });

  if (isFacultyLoading) {
    return (
      <div className="text-center text-xl font-semibold my-10">Loading...</div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10 md:mx-20 mt-10 mb-16 sm:mt-2 sm:mb-6 md:mt-4 md:mb-8">
      <div className="flex md:flex-row gap-10 flex-col">
        {/* Information section */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          {/* pc view */}
          <img
            className="md:max-h-[350px] md:max-w-[18rem] object-cover rounded-lg md:block hidden"
            src={faculty.photo}
            alt={`${faculty.salutation} ${faculty.firstname} ${faculty.surname}`}
          />

          {/* mobile view */}
          <h2 className="text-2xl font-bold md:hidden inline md:mt-10 mb-4">{`${faculty.salutation} ${faculty.firstname} ${faculty.surname}`}</h2>
          <img
            className="max-w-fit max-h-[20rem] rounded-lg md:hidden block"
            src={faculty.photo}
            alt={`${faculty.salutation} ${faculty.firstname} ${faculty.surname}`}
          />

          <div className="text-xl font-semibold">
            Designation:{" "}
            <span className="font-light">{faculty.designation}</span>
          </div>
          <div>
            <a
              href={`mailto:${faculty.email}`}
              className="text-blue-500 cursor-pointer"
            >
              {faculty.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          {/* bio section */}
          <h1 className="block md:hidden text-2xl font-semibold">Bio:</h1>
          <h2 className="text-2xl font-bold hidden md:block">{`${faculty.salutation} ${faculty.firstname} ${faculty.surname}`}</h2>
          <p>{faculty.overview}</p>
        </div>
      </div>

      <hr
        className={`my-4 border-t border-gray-500 ${
          !faculty.research_area && "hidden"
        }`}
      />

      {faculty.research_area && (
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-orange-700">
            Research Area:{" "}
            <span className="font-normal text-gray-900 text-base">
              {faculty.research_area}
            </span>
          </h3>
          <p className="text-gray-700">{faculty.research_overview}</p>

          {faculty.publications && (
            <div>
              <h4 className="text-lg font-semibold text-blue-700">
                Publications:
              </h4>
              <ul className="list-disc list-inside text-gray-800">
                {faculty.publications.split(", ").map((p, index) => (
                  <li key={index}>{p}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FacultyInfo;
