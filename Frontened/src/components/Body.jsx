import React, { useEffect, useState } from 'react'
import book from '../../public/Book.png'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast'
import Model from '../components/Model'

function Body() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {

        const userInfo = {
            email: data.email,
        }

        await axios.post("http://localhost:4001/email/useremail", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.custom(<div className='bg-gray-700 text-white w-auto h-auto flex-col items-center justify-center rounded-md p-4'>
                        <div>
                            <h1 className='text-2xl font-bold cursive'>Thanks for submiting your email!</h1>
                        </div>
                        <div className='mt-3'>
                            <p className='text-sm font-medium'>We regularly provide updates about upcoming projects and website enhancements via email.” </p>
                        </div>
                    </div>);
                }
            }).catch((err) => {
                console.log(err)
                toast.error("Submit Error : " + err.response.data.message)
            })
    }

    return (
        <>


            <div className='bg-gray-600 md:flex md:flex-row flex-col md:pl-10 md:pr-14 pl-6 pr-10 pt-32'>

                <div id="right" className='md:w-1/2 w-full text-white md:order-1 order-2 '>

                    <h1 className='text-4xl font-bold'>Hello,welcome here to learn something <span className='text-pink-400'>new everyday !!!</span> </h1>

                    <p id='shine2' className='pt-20 hover:cursor-pointer'>
                        <span>Certainly!</span> <span>Books</span> <span>play</span> <span>a</span> <span>vital</span> <span>role</span> <span>in</span> <span>our</span> <span>lives.</span> <span>They</span> <span>allow</span> <span>us</span> <span>to</span> <span>escape</span> <span>reality,</span> <span>explore</span> <span>different</span> <span>worlds,</span> <span>and</span> <span>learn</span> <span>about</span> <span>new</span> <span>things,</span> <span>people,</span> <span>and</span> <span>cultures.</span> <span>Being</span> <span>a</span> <span>book</span> <span>lover</span> <span>enhances</span> <span>cognitive</span> <span>abilities,</span> <span>fosters</span> <span>empathy,</span> <span>and</span> <span>expands</span> <span>knowledge,</span> <span>making</span> <span>it</span> <span>a</span> <span>transformative</span> <span>practice</span> <span>that</span> <span>enriches</span> <span>the</span> <span>mind</span> <span>and</span> <span>enhances</span> <span>our</span> <span>quality</span> <span>of</span> <span>life.</span>

                    </p>

                    {/* email */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='pt-14'>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>

                                <input type="text" className="email" placeholder="Email" {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>Please fill the email</span>}

                            </label>

                        </div>

                        <div className='pt-11'>
                            <button id="submit-btn" className="btn btn-secondary">
                                Submit
                            </button>
                        </div>

                    </form>

                </div>


                <div id="left" className='md:w-1/2 w-full order-1'>

                    <img className='md:px-12 w-92 h-92 pt-0 wt-0' src={book} alt="" />

                </div>
            </div>

        </>
    )
}

export default Body
