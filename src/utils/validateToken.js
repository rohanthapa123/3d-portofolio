import axios from "axios";

export const validateToken = async () => {
  try {
    const response = await axios.get(
      "https://notes-management-system-v1-0-1.onrender.com/api/auth/validate",
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      // Token is valid
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
