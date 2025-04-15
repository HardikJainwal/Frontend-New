import axios from "axios";

export const updateFacultyOverview = async (formData, facultyId) => {
  const token = sessionStorage.getItem("token");

  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  try {
    const response = await axios.put(
      `https://dseu-backend.onrender.com/api/v1/faculty/${facultyId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
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
