import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BookOpen, FileText, GraduationCap, User, Edit, Save, X } from "lucide-react";

import FacultyInfoLoading from "../ShimmerUI/FacultyInfoLoading";
import { 
  getFacultyById, 
  updateFacultyPhoto, 
  updateFacultyOverview, 
  updateFacultyResearch 
} from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";

const tabs = [
  { id: "bio", label: "Bio", icon: <User size={18} /> },
  { id: "research", label: "Research", icon: <FileText size={18} /> },
  { id: "publications", label: "Publications", icon: <BookOpen size={18} /> },
  { id: "courses", label: "Courses Taught", icon: <GraduationCap size={18} /> },
];

const FacultyInfo = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("bio");
  const [isEditing, setIsEditing] = useState({
    photo: false,
    overview: false,
    research: false,
    publications: false
  });
  const [editedData, setEditedData] = useState({
    overview: "",
    researchArea: "",
    publications: ""
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const {
    data: faculty,
    isLoading: isFacultyLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["faculty", id],
    queryFn: () => getFacultyById(id),
  });

  const photoMutation = useMutation({
    mutationFn: (file) => updateFacultyPhoto(id, file),
    onSuccess: () => {
      refetch();
      setIsEditing(prev => ({ ...prev, photo: false }));
      setSelectedFile(null);
    },
    onError: (error) => {
      console.error("Photo update failed:", error);
    }
  });

  const overviewMutation = useMutation({
    mutationFn: (overview) => updateFacultyOverview(id, overview),
    onSuccess: () => {
      refetch();
      setIsEditing(prev => ({ ...prev, overview: false }));
    },
    onError: (error) => {
      console.error("Overview update failed:", error);
    }
  });

  const researchMutation = useMutation({
    mutationFn: (data) => updateFacultyResearch(id, data),
    onSuccess: () => {
      refetch();
      setIsEditing(prev => ({ ...prev, research: false, publications: false }));
    },
    onError: (error) => {
      console.error("Research update failed:", error);
    }
  });

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const savePhoto = () => {
    if (selectedFile) {
      photoMutation.mutate(selectedFile);
    }
  };

  const saveOverview = () => {
    if (editedData.overview !== faculty.overview) {
      overviewMutation.mutate(editedData.overview);
    } else {
      setIsEditing(prev => ({ ...prev, overview: false }));
    }
  };

  const saveResearch = () => {
    if (editedData.researchArea !== faculty.research?.[0]?.research_area || 
        editedData.publications !== faculty.research?.[0]?.publications) {
      researchMutation.mutate({
        research_area: editedData.researchArea,
        publications: editedData.publications
      });
    } else {
      setIsEditing(prev => ({ ...prev, research: false, publications: false }));
    }
  };

  if (isFacultyLoading) return <FacultyInfoLoading />;
  if (error) return (
    <div className="text-center text-red-600 my-10">
      Error loading faculty data: {error.message}
    </div>
  );
  if (!faculty) return (
    <div className="text-center text-xl font-semibold my-10">
      Faculty not found
    </div>
  );

  const TabButtons = () => (
    <div className="flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center space-x-2 px-4 py-2 font-medium rounded transition-all ${
            activeTab === tab.id
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {tab.icon} <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10 md:mx-20 mt-10 mb-16 sm:mt-2 sm:mb-6 md:mt-4 md:mb-8">
      <div className="flex md:flex-row gap-10 flex-col">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="relative group">
            {isEditing.photo ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg z-10 p-4">
                <div className="flex flex-col items-center gap-3 w-full max-w-[250px]">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handlePhotoChange}
                    className="text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600 w-full"
                  />
                  <div className="flex gap-2 w-full">
                    <button 
                      onClick={savePhoto} 
                      disabled={photoMutation.isLoading}
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
                    >
                      <Save size={18} /> {photoMutation.isLoading ? 'Saving...' : 'Save'}
                    </button>
                    <button 
                      onClick={() => {
                        setIsEditing(prev => ({ ...prev, photo: false }));
                        setSelectedFile(null);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      <X size={18} /> Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              isLoggedIn && (
                <button 
                  onClick={() => setIsEditing(prev => ({ ...prev, photo: true }))}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-gray-100"
                >
                  <Edit size={18} />
                </button>
              )
            )}
            <img
              className="md:max-h-[350px] md:max-w-[18rem] object-cover rounded-lg"
              src={faculty.photo}
              alt={`${faculty.salutation} ${faculty.firstname} ${faculty.surname}`}
            />
          </div>
          <div className="text-xl font-semibold text-center md:text-left">
            Designation: <span className="font-light">{faculty.designation}</span>
          </div>
          <div className="text-center md:text-left">
            <a href={`mailto:${faculty.email}`} className="text-blue-500 hover:underline">
              {faculty.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5 w-full">
          <div className="hidden md:flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {`${faculty.salutation ?? ""} ${faculty.firstname} ${faculty.surname ?? ""}`}
            </h2>
            <TabButtons />
          </div>
          <div className="md:hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold mx-auto">
                {`${faculty.salutation ?? ""} ${faculty.firstname} ${faculty.surname ?? ""}`}
              </h2>
            </div>
            <div className="flex space-x-2 overflow-x-auto w-full pb-2 mb-5 items-center justify-center">
              <TabButtons />
            </div>
          </div>

          <div className="mt-4">
            {activeTab === "bio" && (
              <div className="relative">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <h1 className="block md:hidden text-2xl font-semibold">Bio:</h1>
                  {isLoggedIn && (
                    <div className="flex items-center gap-2">
                      {!isEditing.overview ? (
                        <button 
                          onClick={() => {
                            setEditedData(prev => ({ ...prev, overview: faculty.overview || "" }));
                            setIsEditing(prev => ({ ...prev, overview: true }))
                          }}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={18} /> Edit
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button 
                            onClick={saveOverview}
                            disabled={overviewMutation.isLoading}
                            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
                          >
                            <Save size={18} /> {overviewMutation.isLoading ? 'Saving...' : 'Save'}
                          </button>
                          <button 
                            onClick={() => setIsEditing(prev => ({ ...prev, overview: false }))}
                            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                          >
                            <X size={18} /> Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {isEditing.overview ? (
                  <textarea
                    value={editedData.overview}
                    onChange={(e) => setEditedData(prev => ({ ...prev, overview: e.target.value }))}
                    className="w-full border rounded p-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    placeholder="Enter bio..."
                  />
                ) : (
                  <p className="text-gray-700">{faculty.overview || "Will update soon."}</p>
                )}
              </div>
            )}

            {activeTab === "research" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-orange-700">Research Area</h3>
                  {isLoggedIn && (
                    <div className="flex items-center gap-2">
                      {!isEditing.research ? (
                        <button 
                          onClick={() => {
                            setEditedData(prev => ({
                              ...prev,
                              researchArea: faculty.research?.[0]?.research_area || "",
                              publications: faculty.research?.[0]?.publications || ""
                            }));
                            setIsEditing(prev => ({ ...prev, research: true }))
                          }}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={18} /> Edit
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button 
                            onClick={saveResearch}
                            disabled={researchMutation.isLoading}
                            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
                          >
                            <Save size={18} /> {researchMutation.isLoading ? 'Saving...' : 'Save'}
                          </button>
                          <button 
                            onClick={() => setIsEditing(prev => ({ ...prev, research: false }))}
                            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                          >
                            <X size={18} /> Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {isEditing.research ? (
                  <textarea
                    value={editedData.researchArea}
                    onChange={(e) => setEditedData(prev => ({ ...prev, researchArea: e.target.value }))}
                    className="w-full border rounded p-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    placeholder="Enter research areas..."
                  />
                ) : (
                  <p className="text-gray-700">{faculty.research?.[0]?.research_area || "Will update soon."}</p>
                )}
              </div>
            )}

            {activeTab === "publications" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-blue-700">Publications</h3>
                  {isLoggedIn && (
                    <div className="flex items-center gap-2">
                      {!isEditing.publications ? (
                        <button 
                          onClick={() => {
                            setEditedData(prev => ({
                              ...prev,
                              publications: faculty.research?.[0]?.publications || ""
                            }));
                            setIsEditing(prev => ({ ...prev, publications: true }))
                          }}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={18} /> Edit
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button 
                            onClick={saveResearch}
                            disabled={researchMutation.isLoading}
                            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
                          >
                            <Save size={18} /> {researchMutation.isLoading ? 'Saving...' : 'Save'}
                          </button>
                          <button 
                            onClick={() => setIsEditing(prev => ({ ...prev, publications: false }))}
                            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                          >
                            <X size={18} /> Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {isEditing.publications ? (
                  <textarea
                    value={editedData.publications}
                    onChange={(e) => setEditedData(prev => ({ ...prev, publications: e.target.value }))}
                    className="w-full border rounded p-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    placeholder="Enter publications..."
                  />
                ) : (
                  <p className="text-gray-700">{faculty.research?.[0]?.publications || "Will update soon."}</p>
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

export default FacultyInfo;