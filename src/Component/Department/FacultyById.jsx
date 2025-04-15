import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { User, FileText, BookOpenCheck, Briefcase } from "lucide-react";

import { getFacultyById } from "../../utils/apiservice";

import FacultyInfoLoading from "../ShimmerUI/FacultyInfoLoading";

const FacultyById = () => {
  const { id } = useParams();
  const {
    data: faculty,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getFacultyById", id],
    queryFn: () => getFacultyById(id),
    enabled: !!id,
  });

  const [activeTab, setActiveTab] = useState("bio");

  if (isLoading) {
    return <FacultyInfoLoading />;
  }

  if (!faculty)
    return (
      <div className="text-center text-[#333] text-xl font-semibold min-h-[25vh] flex justify-center items-center">
        Oops! Faculty details not found.
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  const renderTabContent = () => {
    switch (activeTab) {
      case "bio":
        return (
          <p className="text-gray-700">
            {faculty.overview || "Will update soon."}
          </p>
        );
      case "research":
        return (
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Research Area
            </h3>
            <p className="text-gray-700">
              {faculty.research?.[0]?.research_area || "Will update soon."}
            </p>
          </div>
        );
      case "courses":
        return (
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Courses
            </h3>
            <p className="text-gray-700">
              {faculty.courses || "Will update soon."}
            </p>
          </div>
        );
      case "publication":
        return (
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Publications
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
              {faculty.publications?.length ? (
                faculty.publications.map((pub, index) => (
                  <li key={index}>{pub}</li>
                ))
              ) : (
                <li>Will update soon.</li>
              )}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-3 md:p-4 lg:p-6 md:mx-20 mt-10 mb-16">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-2xl font-bold block md:hidden">
            {`${faculty.salutation ?? ""} ${faculty.firstname} ${
              faculty.surname ?? ""
            }`}
          </h2>
          <img
            className="max-h-[250px] max-w-fit  md:max-h-[350px] md:max-w-[18rem] object-cover rounded-lg"
            src={faculty.photo}
            alt="Faculty"
          />
          <div className="text-xl font-semibold text-center md:text-left">
            Designation:{" "}
            <span className="font-light">{faculty.designation}</span>
          </div>
          <div className="text-center md:text-left">
            <a
              href={`mailto:${faculty.email}`}
              className="text-blue-500 hover:underline"
            >
              {faculty.email}
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center mb-9 flex-col lg:flex-row gap-3 sm:gap-4">
            <h2 className="text-2xl font-bold hidden md:block">
              {`${faculty.salutation ?? ""} ${faculty.firstname} ${
                faculty.surname ?? ""
              }`}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <TabBtn
                label="Bio"
                tab="bio"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                icon={<User size={16} />}
              />
              <TabBtn
                label="Research"
                tab="research"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                icon={<FileText size={16} />}
              />
              {/* <TabBtn
                label="Courses Taught"
                tab="courses"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                icon={<Briefcase size={16} />}
              /> */}
              <TabBtn
                label="Publication"
                tab="publication"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                icon={<BookOpenCheck size={16} />}
              />
            </div>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

const TabBtn = ({ label, tab, activeTab, setActiveTab, icon }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`flex items-center gap-1 px-4 py-2 rounded transition-colors ${
      activeTab === tab
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default FacultyById;
