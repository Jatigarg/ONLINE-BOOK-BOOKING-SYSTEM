import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none" onClick={() => {
                                document.getElementById("my_modal_3").close();
                            }}>✕</Link>

                            <h3 className="font-bold text-lg">Login</h3>

                            <div className='mt-2'>

                                <span>Email</span>
                                <br />
                                <input type="Email" placeholder='Enter your email' className='w-80 px-3 py-1 rounded-md outline-none mt-2' {...register("Email", { required: true })} />
                                <br />
                                {errors.Email && <span className='text-sm text-red-500'>Please fill the email</span>}

                                <div className='mt-8'>
                                    <span>Password</span>
                                    <br />
                                    <input type="Password" placeholder='Enter your password' className='w-80 px-3 py-1 rounded-md outline-none mt-2' {...register("Password", { required: true })} />
                                    <br />
                                    {errors.Password && <span className='text-sm text-red-500'>Please fill the password</span>}
                                </div>

                                <div className='mt-8 flex justify-around items-center'>

                                    <button className='bg-pink-500 py-1 px-2 rounded-md text-white hover:bg-pink-600 hover:duration-200 hover:scale-125 '>Login</button>

                                    <span>Not register?<Link to="/signup" className='text-blue-600 underline space-x-1'>Signup </Link></span>
                                </div>

                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
