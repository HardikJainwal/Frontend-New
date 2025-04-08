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
    return faculties.filter((faculty) => faculty.department._id === id);
  } catch (error) {
    console.error("Error filtering faculty by department:", error.response?.data || error.message);
    throw error;
  }
};

export const getFacultyById = async (id) => {
  try {
    const response = await api.get(`/faculty/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data.data.faculty;
  } catch (error) {
    console.error("Error fetching faculty by ID:", error.response?.data || error.message);
    throw error;
  }
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

export const updateFacultyPhoto = async (id, file) => {
  const formData = new FormData();
  formData.append("photo", file);

  try {
    const response = await api.put(`/faculty/${id}/photo`, formData, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data.faculty;
  } catch (error) {
    console.error("Error updating faculty photo:", error.response?.data || error.message);
    throw error;
  }
};

export const updateFacultyOverview = async (id, overview) => {
  try {
    const response = await api.patch(`/faculty/${id}`, { overview }, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
    });
    console.log("Overview update response:", response.data);
    return response.data.data.faculty;
  } catch (error) {
    console.error("Error updating faculty overview:", error.response?.data || error.message);
    throw error;
  }
};

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


// get all pdf
export const getAllPdf = async () => {
  const response = await api.get('/pdf');
  return response.data.data.nonAlertPDF;
}