import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { uploadImage } from '../../utils/uploadImage';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchNoteById } from '../../utils/fetch';

// Define your validation schema with Yup
const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    category: yup.string().required('Category is required'),
    noteimage: yup.mixed().required('Image is required'),
    notepdf: yup.mixed().required('PDF is required'),
});


const AddNote = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [initialValues, setInitialValues] = useState({
        title: '',
        category: '',
        noteimage: null,
        notepdf: null,
    })

    const [existingImage, setExistingImage] = useState("");
    const [existingPdf, setExistingPdf] = useState("");


    const [editing, setEditing] = useState(false);

    const { id } = useParams();

    const navigate = useNavigate();
    const mutation = useMutation({
        mutationKey: ["uploadnote"],
        mutationFn: async (formData) => {
            if (editing) {

                await axios.put(`${import.meta.env.VITE_BASE_URL}/api/note/${id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true
                });
            } else {

                await axios.post(`${import.meta.env.VITE_BASE_URL}/api/note`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true
                });
            }
        },
        onSuccess: () => {
            toast.success("Note Added Successfully");
            navigate("/notes/admindashboard");
            setIsSubmitting(false);

        },
        onError: () => {
            toast.error("Failed to add note");
            setIsSubmitting(false);
        }
    });

    const handleSubmit = async (values, { resetForm }) => {
        setIsSubmitting(true);
        let imageUrl;
        if (values.noteimage) {
            imageUrl = await uploadImage(values.noteimage);
        } else {
            imageUrl = existingImage;
        }

        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('category', values.category);
        formData.append('noteimage', imageUrl);
        if (values.notepdf) {
            formData.append('notepdf', values.notepdf);
        } else {
            formData.append('existingPdf', existingPdf)
        }

        mutation.mutate(formData);

        resetForm();
    };


    const check = async () => {
        if (id) {
            setEditing(true);
            //console.log(id)
            const response = await fetchNoteById(id);
            setInitialValues({
                title: response.title || '',
                category: response.category || '',
                noteimage: response.image || null,
                notepdf: response.url || null
            })

            setExistingImage(response.image);
            setExistingPdf(response.url)

        }

    }

    useEffect(() => {
        check();
    }, []);


    return (
        <div className='w-full'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize={true}
            >
                {({ setFieldValue }) => (
                    <Form className="max-w-md w-full mx-auto">
                        <h1 className='text-3xl text-center'>{editing ? "Update Note" : "Insert New Note"}</h1>
                        <div className="mb-5">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-500">Title</label>
                            <Field
                                type="text"
                                id="title"
                                name="title"
                                className="bg-gray-50 border border-gray-500 text-gray-900 dark:text-white placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500"
                                placeholder="Title"
                            />
                            <ErrorMessage name="title" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-500">Category</label>
                            <Field
                                type="text"
                                id="category"
                                name="category"
                                className="bg-gray-50 border border-gray-500 text-gray-900 placeholder-gray-700 text-sm rounded-lg focus:ring-gray-500 dark:bg-gray-700 focus:border-gray-500 block w-full p-2.5 dark:text-white dark:placeholder-gray-500 dark:border-gray-500"
                                placeholder="Category"
                            />
                            <ErrorMessage name="category" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className='mb-5'>
                            {
                                existingImage && <>
                                    <p>CurrentThumbnail</p>
                                    <img src={existingImage} className='w-24 ' alt="" srcset="" />
                                </>
                            }
                            <label htmlFor="noteimage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Upload Thumbnail</label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5"
                                id="noteimage"
                                name="noteimage"
                                type="file"
                                onChange={(event) => {
                                    setFieldValue('noteimage', event.currentTarget.files[0]);
                                }}
                            />
                            <ErrorMessage name="noteimage" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className='mb-5'>
                            {
                                existingPdf && <>
                                    <p>Current PDF</p>
                                    <a href={existingImage} target='_blank' rel="noopener noreferrer" className="text-blue-600 underline">View PDF</a>
                                </>
                            }
                            <label htmlFor="notepdf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Upload PDF</label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5"
                                id="notepdf"
                                name="notepdf"
                                type="file"
                                onChange={(event) => {
                                    setFieldValue('notepdf', event.currentTarget.files[0]);
                                }}
                            />
                            <ErrorMessage name="notepdf" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className={`p-2 rounded-md cursor-pointer ${isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'}`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddNote;
