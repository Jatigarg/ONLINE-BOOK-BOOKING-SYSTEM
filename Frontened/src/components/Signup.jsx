import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios
        .post("http://localhost:4001/users/signup" , userInfo)
        .then((res) =>{
            console.log(res.data)
            if(res.data)
            {
                toast.success('Signup sucessful');
                navigate("/", { replace: true }); // Redirect to /
            }
            localStorage.setItem("Users" , JSON.stringify(res.data.user)) // ---> (name, data) in browser local storage
        }).catch((err) => {
            console.log(err)
            toast.error("Login Error :" + err.response.data.message) // ----> IMP (Show error duting create controller)
        })
    }

    return (
        <>
            <div>
                <div id="" className=" flex h-screen items-center justify-center ">
                    <div id='' className="border-2 border-white py-6 px-9 shadow-md shadow-white rounded-md">
                        <form onSubmit={handleSubmit(onSubmit)} method="div">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>

                            <div className='mt-2'>

                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 rounded-md outline-none mt-2'{...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>Please fill the email</span>}

                                <div className='mt-8'>
                                    <span>password</span>
                                    <br />
                                    <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 rounded-md outline-none mt-2' {...register("password", { required: true })} />
                                    <br />
                                    {errors.password && <span className='text-sm text-red-500'>Please fill the password</span>}
                                </div>

                                <div className='mt-8'>
                                    <span>fullname</span>
                                    <br />
                                    <input type="fullname" placeholder='Enter your fullname' className='w-80 px-3 py-1 rounded-md outline-none mt-2'{...register("fullname", { required: true })} />
                                    <br />
                                    {errors.fullname && <span className='text-sm text-red-500'>Please fill the fullname</span>}
                                </div>

                                <div className='mt-8 flex justify-around items-center'>

                                    <button className='bg-pink-500 py-1 px-2 rounded-md text-white hover:bg-pink-600 hover:duration-200 hover:scale-125 '>Signup</button>

                                    <span>Have account?<Link to="/" className='text-blue-600 underline space-x-1'>Login </Link></span>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
