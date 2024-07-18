import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setauthUser] = useAuth()

    const handlelogout = () => {
        try {
            setauthUser(
                {
                    ...authUser,
                    user: null
                }
            )
            localStorage.removeItem("Users")
            toast.success("Logout sucessfully")
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        } catch (error) {
            toast.error("Error :" + error.message)
            setTimeout(() => {

            }, 3000);
        }
    }
    return (
        <div>
            <button className='px-3 bg-red-500 text-white rounded-md cursor-pointer' onClick={handlelogout}>Logout</button>
        </div>
    )
}

export default Logout
