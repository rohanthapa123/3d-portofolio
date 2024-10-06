import axios from "axios"
import { toast } from "react-toastify";

export const fetchNoteById = async (id) =>{

    const baseurl = import.meta.env.VITE_BASE_URL;

    try {
        const response = await axios.get(`${baseurl}/api/notes/${id}`,{
            withCredentials: true
        })
        // console.log(response.data);
        return response.data;
    } catch (error) {
        toast.error("Failed fetching notes");
    }

}