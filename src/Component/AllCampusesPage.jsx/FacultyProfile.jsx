import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import faculty from "../../assets/teacher.png";
import { profileData } from "../../constants/FACULTYPROFILEDATA.JS";

const FacultyProfile = () => {
  const currentPath = window.location.pathname;

  const profile = profileData[currentPath] || profileData["/BPIBS"]; // Default to '/BPIBS' if path doesn't match

  return (
    <div className="max-w-5xl bg-gray-100 p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-60 h-60 bg-white rounded-lg shadow-sm p-1">
            <img
              src={faculty}
              alt="Faculty profile photo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex-grow space-y-2 my-6">
          <ProfileItem text={profile.designation} />
          {profile.education.map((item, index) => (
            <ProfileItem key={index} text={item} />
          ))}
        </div>
      </div>
      <div className="mx-6 mt-2">
        <div className="inline-block px-5 py-2 bg-amber-500 text-white rounded-xl" >
          {profile.name}
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ text }) => (
  <div className="text-gray-800">
    <p className="flex items-start">
      <FontAwesomeIcon icon={faAnglesRight} className="text-gray-600 mr-2 mt-1.5" />
      <span>{text}</span>
    </p>
  </div>
);

export default FacultyProfile;
