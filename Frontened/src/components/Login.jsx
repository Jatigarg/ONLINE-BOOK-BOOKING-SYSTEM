import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios
            .post("http://localhost:4001/users/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Login sucessful');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload()
                        localStorage.setItem("Users", JSON.stringify(res.data.user)) // ---> (name, data) in browser local storage
                    }, 2000);

                }

            }).catch((err) => {
                console.log(err)

                toast.error("Login Error :" + err.response.data.message)
                setTimeout(() => {
                    
                }, 3000);
            })
    }

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
                                <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 rounded-md outline-none mt-2' {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>Please fill the email</span>}

                                <div className='mt-8'>
                                    <span>Password</span>
                                    <br />
                                    <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 rounded-md outline-none mt-2' {...register("password", { required: true })} />
                                    <br />
                                    {errors.password && <span className='text-sm text-red-500'>Please fill the password</span>}
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
