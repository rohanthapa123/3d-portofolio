import React from 'react'
import Navbar from '../components/Notes/NavBar'
import Dashboard from '../components/Notes/Dashboard'
import { styles } from '../style'

const AdminDashboard = () => {
    return (
        <div>
            <Navbar />
            <div className={`${styles.paddingX}  mt-20 w-full min-h-[89dvh] flex item-center py-5   bg-primary`}>
                <div className=' w-full item-center  max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>
                    
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard