import api from "./api";

export const getDeparments = async () => {
  const response = await api.get("/departments");
  return response.data.data.departments;  // just fetching the departments
};

export const getFaculties = async () => {
  const response = await api.get("/faculty?limit=432");
  return response.data.data.faculty;
}

export const getFacultyByDepartment = async (department) => {
  const faculties = await getFaculties();

  return faculties.filter((faculty) => faculty.department.name === department);
};

export const getFacultyById= async (id) => {
  const response = await api.get(`/faculty/${id}`);
  
  return response.data.data.faculty;
}
