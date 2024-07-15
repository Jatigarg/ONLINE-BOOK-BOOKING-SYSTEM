import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                                <input type="Email" placeholder='Enter your email' className='w-80 px-3 py-1 rounded-md outline-none mt-2'{...register("Email", { required: true })} />
                                <br />
                                {errors.Email && <span className='text-sm text-red-500'>Please fill the email</span>}

                                <div className='mt-8'>
                                    <span>Password</span>
                                    <br />
                                    <input type="Email" placeholder='Enter your password' className='w-80 px-3 py-1 rounded-md outline-none mt-2' {...register("Password", { required: true })} />
                                    <br />
                                    {errors.Password && <span className='text-sm text-red-500'>Please fill the password</span>}
                                </div>

                                <div className='mt-8'>
                                    <span>Name</span>
                                    <br />
                                    <input type="Email" placeholder='Enter your name' className='w-80 px-3 py-1 rounded-md outline-none mt-2'{...register("Name", { required: true })} />
                                    <br />
                                    {errors.Name && <span className='text-sm text-red-500'>Please fill the name</span>}
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
