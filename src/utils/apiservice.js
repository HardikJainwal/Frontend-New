import api from "./api";

export const getDeparments = async () => {
  const response = await api.get("/departments");
  return response.data.data.departments;  // just fetching the departments
};

export const getFaculties = async () => {
  const response = await api.get("/faculty?limit=432");
  return response.data.data.faculty;
}

export const getFacultyByDepartment = async (id) => {
  const faculties = await getFaculties();

  // return faculties.filter((faculty) => faculty.department._id === id);
  return faculties.filter((faculty) => faculty.department._id === id);
};

export const getFacultyById = async (id) => {
  const response = await api.get(`/faculty/${id}`);

  return response.data.data.faculty;
}

export const getDepartmentName = async (id) => {
  const response = await api.get("/departments");
  const departments = response.data.data.departments; 

  return departments.find((d) => d._id === id)?.name || "";
};
