import axios from "axios";

export const validateToken = async () => {
  
  const baseurl = import.meta.env.VITE_BASE_URL;
  try {
    const response = await axios.get(
      `${baseurl}/api/auth/validate`,
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
