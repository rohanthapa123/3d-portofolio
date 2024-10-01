import axios from "axios";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import "../../index.css";
import Pagination from "./Pagination";

const Dashboard = () => {
    const [pageNumber, setPageNumber] = useState(0); // Start at page 0
    const [pageSize, setPageSize] = useState(5); // Default to 5 items per page

    const baseurl = import.meta.env.VITE_BASE_URL;

    const getNotes = async (pageNumber, pageSize) => {
        const response = await axios.get(
            `${baseurl}/api/notes?pageNumber=${pageNumber}&pageSize=${pageSize}`
        );
        console.log(response.data);
        return response.data;
    };

    const deleteNotes = async (id) => {
        console.log(id);
        const confirm = window.confirm("Are you sure to delete note");
        if (confirm) {
            const response = await axios.delete(`${baseurl}/api/note/${id}`, {
                withCredentials: true
            });
            if (response.status == 200) {

                toast.success("Note Deleted Successfully")
                refetch();
            }
            else
                toast.error("Failed to Delete")
        }
    }
    const {
        data: notes,
        isLoading,
        refetch,
    } = useQuery(["notes", pageNumber, pageSize], () =>
        getNotes(pageNumber, pageSize)
    );

    if (isLoading) {
        return "Loading...";
    }

    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber);
    };

    const handlePageSizeChange = (e) => {
        setPageSize(Number(e.target.value));
        setPageNumber(0); // Reset to first page when page size changes
    };

    return (
        <div className="p-6 w-full bg-gray-900 text-white rounded-lg shadow-lg">
            <div className="card w-full p-5 bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-200">All Notes</h3>
                    <label className="flex items-center">
                        <span className="text-sm mr-2">Push Alerts</span>
                        <input
                            type="checkbox"
                            className="toggle toggle-blue"
                            defaultChecked
                        />
                    </label>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse">
                        <thead className="bg-gray-700 text-gray-400">
                            <tr>
                                <th className="w-24 text-center p-3">Image</th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Created At</th>
                                <th className="w-16 p-3"></th>
                                <th className="w-16 p-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {notes?.content?.map((note) => (
                                <tr
                                    key={note.id}
                                    className="text-center bg-gray-800 hover:bg-gray-700"
                                >
                                    <td className="p-3">
                                        <img
                                            src={note.image}
                                            className="w-10 rounded-full"
                                            alt=""
                                        />
                                    </td>
                                    <td className="p-3">{note.title}</td>
                                    <td className="p-3">{note.category}</td>
                                    <td className="p-3">{note.created_at.slice(0, 10)}</td>
                                    <td className="p-3">
                                        <button className="text-blue-500 hover:text-blue-400 ">
                                            <FaRegEdit size={24} />
                                        </button>
                                    </td>
                                    <td className="p-3">
                                        <button className="text-red-500 hover:text-red-400" onClick={(e) => deleteNotes(note.id)}>
                                            <MdOutlineDelete size={24} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-400">
                    <div className="flex items-center">
                        Show
                        <select
                            className="ml-2 p-1 border border-gray-600 bg-gray-900 text-gray-400 rounded"
                            value={pageSize}
                            onChange={handlePageSizeChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                        per page
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>
                            {(pageNumber * pageSize) +
                                1 +
                                " - " +
                                Math.min((pageNumber * pageSize) + pageSize, notes.totalElements) +
                                " of " +
                                notes.totalElements}
                        </span>
                        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={notes.totalPages} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
