import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import FacultyInfoLoading from "../ShimmerUI/FacultyInfoLoading";

import { getFacultyById } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";

const tabs = [
  { id: "bio", label: "Bio" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "courses", label: "Courses Taught" },
];

const FacultyInfo = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("bio");  

  const {
    data: faculty,
    isLoading: isFacultyLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_FACULTY_BY_ID, id],
    queryFn: () => getFacultyById(id),
  });

  useEffect(() => {
    console.log(faculty);
  }, [faculty]);

  if (isFacultyLoading) {
    return <FacultyInfoLoading />;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 my-10">
        Error loading faculty data: {error.message}
      </div>
    );
  }

  if (!faculty) {
    return (
      <div className="text-center text-xl font-semibold my-10">
        Faculty not found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10 md:mx-20 mt-10 mb-16 sm:mt-2 sm:mb-6 md:mt-4 md:mb-8">
      <div className="flex md:flex-row gap-10 flex-col">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <img
            className="md:max-h-[350px] md:max-w-[18rem] object-cover rounded-lg md:block hidden"
            src={faculty.photo}
            alt={`${faculty.salutation} ${faculty.firstname} ${faculty.surname}`}
          />

          <div className="flex flex-col md:hidden w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold mx-auto md:mx-0">{`${faculty.salutation ?? ""} ${faculty.firstname} ${faculty.surname ?? ""}`}</h2>
            </div>

            <MobileViewButtons
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

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

        <div className="flex flex-col gap-2 mt-5 w-full">
          <div className="hidden md:flex justify-between items-center">
            <h2 className="text-2xl font-bold">{`${faculty.salutation ?? ""} ${faculty.firstname} ${faculty.surname ?? ""}`}</h2>

            {/* Tab buttons */}
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-medium rounded ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            {activeTab === "bio" && (
              <div>
                <h1 className="block md:hidden text-2xl font-semibold mb-2">
                  Bio:
                </h1>
                <p>{faculty.overview || "Will update soon."}</p>
              </div>
            )}

            {activeTab === "research" && (
              <div className="flex flex-col gap-3">
                {faculty.research?.length ? (
                  <>
                    <h3 className="text-xl font-semibold text-orange-700">
                      Research Area:{" "}
                      <span className="font-normal text-gray-900 text-base">
                        {faculty.research[0].research_area}
                      </span>
                    </h3>
                    <p className="text-gray-700">
                      {faculty.research[0].research_overview}
                    </p>
                  </>
                ) : (
                  <div className="italic text-gray-600 text-lg text-center py-8">
                    Research information will be updated soon.
                  </div>
                )}
              </div>
            )}

            {activeTab === "publications" && (
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Publications
                </h3>
                {faculty.research?.length > 0 &&
                faculty.research[0].publications ? (
                  <ul className="list-disc list-inside text-gray-800 space-y-2">
                    {faculty.research[0].publications
                      .split(", ")
                      .map((publication, index) => (
                        <li key={index} className="pl-2">
                          {publication}
                        </li>
                      ))}
                  </ul>
                ) : (
                  <div className="italic text-gray-600 text-lg text-center py-8">
                    Publications list will be updated soon.
                  </div>
                )}
              </div>
            )}

            {activeTab === "courses" && (
              <div className="italic text-gray-600 text-lg text-center py-8 md:mt-10">
                Courses taught will be uploaded soon.
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

/* Tab buttons for mobile */
const MobileViewButtons = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-2 overflow-x-auto w-full pb-2 mb-5 items-center justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-3 py-1 rounded whitespace-nowrap ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FacultyInfo;
