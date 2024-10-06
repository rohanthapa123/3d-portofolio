import axios from "axios";
import { toast } from "react-toastify";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "zlnc4cos");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dzjdp8sls/image/upload",
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    toast.error("Failed to upload Image");
    // console.log(error);
  }
};
