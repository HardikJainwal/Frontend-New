import axios from "axios";
import { getFaculties } from "./apiservice";

export const getFacutlyByEmail = async (email) => {
  const allFaculties = await getFaculties();
  const res = allFaculties.find((faculty) => faculty.email === email);

  return res;
}

export const updateFacultyOverview = async (overviewText, facultyId) => {
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.put(
      `https://dseu-backend.onrender.com/api/v1/faculty/${facultyId}`,
      { overview: overviewText },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error.response);
    throw error;
  }
};


export const addResearch = async (facultyId, researchData) => {
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.post(
      `https://dseu-backend.onrender.com/api/v1/faculty/${facultyId}/research`,
      researchData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding research:", error.response || error.message);
    throw error;
  }
};


export const deleteResearch = async (facultyId, researchId) => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await axios.delete(
      `https://dseu-backend.onrender.com/api/v1/faculty/${facultyId}/research/${researchId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting research:", error.response || error.message);
    throw error;
  }
};


export const updateResearch = async (facultyId, researchId, researchData) => {
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.patch(
      `https://dseu-backend.onrender.com/api/v1/faculty/${facultyId}/research/${researchId}`,
      researchData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating research:", error.response || error.message);
    throw error;
  }
};
