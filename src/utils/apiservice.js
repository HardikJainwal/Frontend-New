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

  return { departments: data.dept_id, name : data.name };
};
