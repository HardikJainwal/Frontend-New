import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { getFacultyById } from "../../utils/apiservice";

const FacultyInfo = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("bio"); // Default to bio tab

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
              <h2 className="text-2xl font-bold">{`${faculty.salutation} ${faculty.firstname} ${faculty.surname}`}</h2>
            </div>
            
            
            <div className="flex space-x-2 overflow-x-auto w-full pb-2">
              <button
                onClick={() => setActiveTab("bio")}
                className={`px-3 py-1 rounded whitespace-nowrap ${
                  activeTab === "bio"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Bio
              </button>
              <button
                onClick={() => setActiveTab("research")}
                className={`px-3 py-1 rounded whitespace-nowrap ${
                  activeTab === "research"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Research
              </button>
              <button
                onClick={() => setActiveTab("publications")}
                className={`px-3 py-1 rounded whitespace-nowrap ${
                  activeTab === "publications"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Publications
              </button>
            </div>
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
            <h2 className="text-2xl font-bold">{`${faculty.salutation} ${faculty.firstname} ${faculty.surname}`}</h2>
            
            
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("bio")}
                className={`px-4 py-2 font-medium rounded ${
                  activeTab === "bio"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Bio
              </button>
              <button
                onClick={() => setActiveTab("research")}
                className={`px-4 py-2 font-medium rounded ${
                  activeTab === "research"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Research
              </button>
              <button
                onClick={() => setActiveTab("publications")}
                className={`px-4 py-2 font-medium rounded ${
                  activeTab === "publications"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Publications
              </button>
            </div>
          </div>

          
          <div className="mt-4">
            
            {activeTab === "bio" && (
              <div>
                <h1 className="block md:hidden text-2xl font-semibold mb-2">Bio:</h1>
                <p>{faculty.overview || "Will update soon."}</p>
              </div>
            )}

            
            {activeTab === "research" && (
              <div className="flex flex-col gap-3">
                {faculty.research_area ? (
                  <>
                    <h3 className="text-xl font-semibold text-orange-700">
                      Research Area:{" "}
                      <span className="font-normal text-gray-900 text-base">
                        {faculty.research_area}
                      </span>
                    </h3>
                    <p className="text-gray-700">{faculty.research_overview}</p>
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
                {faculty.publications ? (
                  <ul className="list-disc list-inside text-gray-800 space-y-2">
                    {faculty.publications.split(", ").map((publication, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyInfo;