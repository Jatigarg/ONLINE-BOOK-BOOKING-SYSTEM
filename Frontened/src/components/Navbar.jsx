import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Login from '../components/Login';

function Navbar() {
    
    const [ismenuopen, setismenuopen] = useState(false);
    const [sticky, setsticky] = useState(false);

    useEffect(() => {

        const handlescroll = () => {
            if (window.scrollY > 0) {
                setsticky(true);
            }
            else {
                setsticky(false);
            }
        }
        window.addEventListener('scroll', handlescroll)
        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
    }, [])


    const togglemenue = () => {
        setismenuopen(!ismenuopen)
    }
    console.log(ismenuopen)

    return (
        <>
            <div className={`bg-black fixed top-0 left-0 right-0 z-50 ${
                sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""
            }`}>

                {/* header */}

                <div id="header" className='flex 
                items-center justify-between py-2 '>

                    {/* phone icon */}

                    <div id='spacep' className='flex items-center gap-x-8'>

                        <div className="md:hidden pt-2">
                            <button className='text-white text-3xl' onClick={togglemenue}>
                                {ismenuopen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-x"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-text-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                                        />
                                    </svg>
                                )}
                            </button>

                        </div>

                        {/* logo */}

                        <Link to="/">
                        <h1 className='hover:cursor-pointer'><span id='myname' className='text-4xl font-bold '>jatin.</span> Book Store</h1>
                        </Link>

                        

                    </div>



                    <div className='flex items-center gap-x-8'>

                        {/* web list */}

                        <ul className='items-center gap-x-7 hidden md:flex '>
                            <li className='hover:cursor-pointer hover:text-white'><a href="/">Home</a></li>
                            <li className='hover:cursor-pointer hover:text-white'><a href="/course">Course</a></li>
                            <li className='hover:cursor-pointer hover:text-white'><a href="https://www.linkedin.com/in/jatingupta1234/" target="_blank" rel="noopener noreferrer">Contact</a></li>
                            <li className='hover:cursor-pointer hover:text-white'>About</li>
                        </ul>

                        {/* web search bar */}

                        <div className='hidden md:block'>

                            <label className="input input-bordered flex items-center gap-2 px-5">
                                <input type="text" className="grow outline-none" placeholder="Search" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70 hover:cursor-pointer hover:text-white">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>

                        </div>

                        {/* button */}

                        <a id='login' className="btn btn-primary px-6 py-4" onClick={
                            () => {
                                document.getElementById("my_modal_3").showModal();
                              }
                        }>Login</a>
                        <Login/>


                    </div>


                </div>

                {/* mobile menue list */}

                {ismenuopen ? (
                    <div className='md:hidden bg-gray-300 py-10 px-40'>
                        <ul className='flex-col justify-center space-y-7 text-xl font-medium'>
                            <li className='hover:cursor-pointer hover:text-white'><a href="/">Home</a></li>
                            <li className='hover:cursor-pointer hover:text-white'><a href="/course">Course</a></li>
                            <li className='hover:cursor-pointer hover:text-white'><a href="https://www.linkedin.com/in/jatingupta1234/" target="_blank" rel="noopener noreferrer">Contact</a></li>
                            <li className='hover:cursor-pointer hover:text-white'>About</li>
                        </ul>
                    </div>
                ) : null
                }

            </div>
        </>
    )
}

export default Navbar
