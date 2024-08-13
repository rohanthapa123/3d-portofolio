import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../components/Notes/Dashboard'
import Navbar from '../components/Notes/NavBar'
import { styles } from '../style'
import { validateToken } from '../utils/validateToken'

const AdminDashboard = () => {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    const validate = async () => {
        const valid = await validateToken();
        if (!localStorage.getItem("token") || localStorage.getItem("token") === "" || !valid) {
            navigate("/notes");
            setLoggedIn(false)
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
            <div className={`${styles.paddingX}  mt-20 w-full min-h-[89dvh] flex item-center py-5   bg-primary`}>
                <div className=' w-full item-center  max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>
                    {
                        loggedIn && <Dashboard />
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard