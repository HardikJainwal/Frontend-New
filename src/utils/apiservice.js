import axios from "axios";
import api from "./api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getDepartments = async () => {
  try {
    const response = await api.get("/departments", {
      headers: getAuthHeaders(),
    });
    return response.data.data.departments;
  } catch (error) {
    console.error("Error fetching departments:", error.response?.data || error.message);
    throw error;
  }
};

export const getFaculties = async () => {
  try {
    const response = await api.get("/faculty?limit=432", {
      headers: getAuthHeaders(),
    });
    return response.data.data.faculty;
  } catch (error) {
    console.error("Error fetching faculties:", error.response?.data || error.message);
    throw error;
  }
};

export const getFacultyByDepartment = async (id) => {
  try {
    const faculties = await getFaculties();
    return faculties.filter((faculty) => faculty.dept_id && faculty.dept_id._id === id);
  } catch (error) {
    console.error("Error filtering faculty by department:", error.response?.data || error.message);
    throw error;
  }
};

export const getFacultyById = async (id) => {
  const allFaculties = await getFaculties();
  return allFaculties.find((faculty) => faculty._id === String(id));
};

export const getDepartmentById = async (id) => {
  try {
    const response = await api.get("/departments", {
      headers: getAuthHeaders(),
    });
    const departments = response.data.data.departments;
    return departments.find((d) => d._id === id);
  } catch (error) {
    console.error("Error fetching department name:", error.response?.data || error.message);
    throw error;
  }
};

// export const updateFacultyPhoto = async (id, file) => {
//   const formData = new FormData();
//   formData.append("photo", file);

//   try {
//     const response = await api.put(`/faculty/${id}/photo`, formData, {
//       headers: {
//         ...getAuthHeaders(),
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data.data.faculty;
//   } catch (error) {
//     console.error("Error updating faculty photo:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export const updateFacultyOverview = async (id, overview) => {
//   try {
//     const response = await api.patch(`/faculty/${id}`, { overview }, {
//       headers: {
//         ...getAuthHeaders(),
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("Overview update response:", response.data);
//     return response.data.data.faculty;
//   } catch (error) {
//     console.error("Error updating faculty overview:", error.response?.data || error.message);
//     throw error;
//   }
// };

export const updateFacultyResearch = async (id, data) => {
  try {
    console.log("Sending research update for faculty ID:", id, "Data:", data);
    const response = await api.patch(`/faculty/${id}/research`, data, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
    });
    console.log("Research update response:", response.data);
    return response.data.data.faculty;
  } catch (error) {
    console.error("Error updating faculty research:", error.response?.data || error.message);
    throw error;
  }
};


// get school name by id
export const getSchoolById = async (id) => {
  const response = await api.get(`/departmentSchools`);
  const schools = response.data.data.departmentSchools;

  return schools.find((school) => school._id === id);
}



// get department by school
export const getDepartmentsBySchool = async (id) => {
  const response = await api.get(`/departmentSchools`);
  const data = response.data.data.departmentSchools.find(
    (school) => school._id === id
  );

  return { departments: data.dept_id, name: data.name };
};

// get hod info
export const getHodInfo = async (deptId) => {
  const departmentOfHod = await getDepartmentById(deptId);
  if (!departmentOfHod?.hod) return false; // HOD doesn't exist

  const allFaculties = await getFaculties();
  return allFaculties.find((faculty) => faculty.email === departmentOfHod.hod) || false;
};


// programs related to the departments
export const getProgramByDepartment = async (id, system) => {
  const response = await api.get(`/program/${id}`);
  const programs = response.data.data.programs;

  if (!programs) return [];

  return programs.filter(program => program.programLevel === system);
};

// get all programs
export const getAllPrograms = async () => {
  const response = await api.get('/program');
  return response.data.data.programs;
};

// get information of a single program
export const getProgramData = async (id) => {
  const allPrograms = await getAllPrograms();
  return allPrograms.find((program) => program._id === id) ?? "data not found";
};

// programs by level such as pg ug diploma
export const getProgramsByLevel = async (level) => {
  const allPrograms = await getAllPrograms();
  return allPrograms.filter(
    (program) => program.programLevel?.toLowerCase() === level.toLowerCase()
  );
};


// get campus data
export const getAllCampus = async () => {
  const response = await api.get('/campus');
  return response.data.data.campuses;
}


// get campus by name
export const getCampusByName = async (name) => {
  const allCampuses = await getAllCampus();
  const data = allCampuses.find((campus) => campus.name.toLowerCase() === name);

  return data || null;
}


// get academic council notices
export const getAcademicCouncilNotices = async () => {
  const response = await api.get('/notice', {
    params: { section: 'academic council' },
  });
  return response.data.data.notices;
};

// pdf through category such as circular, students, board of management etc.
export const getPdfBySections = async (section, archived = false) => {
  if (archived) {
    const res = await api.get(`/notice/archived?section=${section}`);
    return res.data.data.notices;
  }

  const res = await api.get(`/notice?section=${section}`);
  return res.data.data.notices;
};


// get campus by zone 
export const getCampusByZone = async (zoneName) => {
  const res = await api.get('/campus', {
    params: { zone: zoneName }
  })

  return res.data;
}


//? LOGIN
export const login = async ({ email, password, emailFlag = false }) => {
  try {
    const response = await axios.post(
      "https://dseu-backend.onrender.com/api/v1/auth/login",
      { email, password }
    );

    sessionStorage.setItem("token", response.data.token);
    sessionStorage.setItem("currentRole", response.data.role);
    if (emailFlag) {
      console.log(response.data);
      sessionStorage.setItem("email", email);
    }

    return response.data;
  } catch (error) {
    console.error("Login karte hue error:", error);
    throw error;
  }
};


// upload pdf
export const uploadPdf = async (formData) => {
  const token = sessionStorage.getItem("token");
  // console.log(token);
  try {
    const response = await axios.post("https://dseu-backend.onrender.com/api/v1/notice/upload",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;

  } catch (err) {
    console.log(err.message);
  }
}
