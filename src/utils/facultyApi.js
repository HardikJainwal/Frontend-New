import axios from "axios";

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
    console.error(error.response);
    throw error;
  }
};
