import React, { useEffect, useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import AddNote from '../components/Notes/AddNote'
import Navbar from '../components/Notes/NavBar'
import { styles } from '../style'
import { validateToken } from '../utils/validateToken'

const AddNotes = () => {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    const validate = async () => {
        const valid = await validateToken();
        if (!valid) {
            navigate("/notes");
        } else {
            setLoggedIn(true);

        }

    }

    useEffect(() => {
        validate();
    }, []);

    return (
        <div>
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <div className={`${styles.paddingX}  w-full min-h-[100dvh] flex item-center py-5  bg-primary`}>
                <div className=' w-full item-center  max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>
                    <div className="back  w-[50%]">
                        <NavLink to={"/notes/admindashboard"}>
                            <button>
                                <IoArrowBackOutline size={28} />
                            </button>
                        </NavLink>
                    </div>
                    {
                        loggedIn && <AddNote />
                    }
                </div>
            </div>
        </div>
    )
}

export default AddNotes