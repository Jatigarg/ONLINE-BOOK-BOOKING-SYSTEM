import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Card from '../components/Cards'
import axios from "axios"
import { Link } from 'react-router-dom'

function Paidbook() {
    const [book, setbook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book")
                console.log(res.data)
                setbook(res.data)
            } catch (error) {
                console.log("Error:", error)
            }
        }
        getBook();
    }, [])

    return (
        <>
            <div className='min-h-screen bg-gray-600 pt-32 md:pl-10 md:pr-14 pl-6 pr-10'>
                <div className='text-white justify-center text-center items-center'>

                    <h1 className='text-3xl'>We're delighted to have you- <span className='text-4xl font-medium text-pink-500'>Here!</span></h1>

                    <p id='shine' className='pt-7 md:text-center pl-3 hover:cursor-pointer'>
                        <span>Books are the keys to </span>
                        <span >countless worlds</span>,
                        <span>unlocking </span>
                        <span >imagination</span>
                        <span> and </span>
                        <span >wisdom</span>.
                        <span> Book lovers, with hearts filled by ink and paper, cherish these </span>
                        <span >portals,</span>
                        <span> forever seeking new </span>
                        <span >adventures</span>.
                    </p>

                    <Link to="/">
                        <button className='bg-pink-500 p-3 rounded-md mt-5 md:mt-9 hover:bg-pink-700 duration-300'>Back</button>
                    </Link>

                </div>

                <div className='mt-12 grid md:grid-cols-4 grid-cols-1'>
                    {
                        book.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Paidbook
