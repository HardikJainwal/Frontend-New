import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { User, FileText, BookOpenCheck } from "lucide-react";

import TabBtn from "../Reusable/TabBtn";
import FacultyInfoLoading from "../ShimmerUI/FacultyInfoLoading";
import { getFacultyById } from "../../utils/apiservice";
import BioTab from "./FacultyTabs/BioTab";
import ResearchTab from "./FacultyTabs/ResearchTab";
import PublicationTab from "./FacultyTabs/PublicationTab";



const FacultyById = () => {
  const loggedEmail = sessionStorage.getItem("email");
  const token = sessionStorage.getItem("token");
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

  if (isLoading) return <FacultyInfoLoading />;

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
        return <BioTab faculty={faculty} loggedEmail={loggedEmail} token={token} />;
      case "research":
        return <ResearchTab faculty={faculty} loggedEmail={loggedEmail} token={token} />;
      case "publication":
        return <PublicationTab faculty={faculty} loggedEmail={loggedEmail} token={token} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-3 md:p-4 lg:p-6 md:mx-20 mt-10 mb-16">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-2xl font-bold block md:hidden">
            {`${faculty.salutation ?? ""} ${faculty.firstname} ${faculty.surname ?? ""}`}
          </h2>
          <img
            className="max-h-[250px] max-w-fit  md:max-h-[350px] md:max-w-[18rem] object-cover rounded-lg"
            src={faculty.photo}
            alt="Faculty"
          />
          <div className="text-xl font-semibold text-center md:text-left">
            Designation: <span className="font-light">{faculty.designation}</span>
          </div>
          <div className="text-center md:text-left">
            <a href={`mailto:${faculty.email}`} className="text-blue-500 hover:underline">
              {faculty.email}
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center mb-9 flex-col lg:flex-row gap-3 sm:gap-4">
            <h2 className="text-2xl font-bold hidden md:block">
              {`${faculty.salutation ?? ""} ${faculty.firstname} ${faculty.surname ?? ""}`}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2 items-center">
              <TabBtn label="Bio" tab="bio" activeTab={activeTab} setActiveTab={setActiveTab} icon={<User size={16} />} />
              <TabBtn label="Research" tab="research" activeTab={activeTab} setActiveTab={setActiveTab} icon={<FileText size={16} />} />
              <TabBtn label="Publication" tab="publication" activeTab={activeTab} setActiveTab={setActiveTab} icon={<BookOpenCheck size={16} />} />
            </div>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default FacultyById;
