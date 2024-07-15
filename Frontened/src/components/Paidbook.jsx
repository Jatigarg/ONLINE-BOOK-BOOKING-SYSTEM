import React from 'react'
import list from '../../public/list.json'
import Card from '../components/Cards'
import { Link } from 'react-router-dom'

function Paidbook() {
  return (
    <>
    <div className='min-h-screen bg-gray-600 pt-32 md:pl-10 md:pr-14 pl-6 pr-10'>
        <div className='text-white justify-center text-center items-center'>

            <h1 className='text-3xl'>We're delighted to have you- <span className='text-4xl font-medium text-pink-500'>Here!</span></h1>

            <p className='pt-7 hover:text-pink-400 md:text-center pl-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, pariatur voluptas. Dolor amet architecto officia illum, ratione ut et aperiam doloribus libero incidunt laborum quod placeat consectetur perferendis eaque soluta temporibus ipsam nesciunt veritatis. Neque officiis vitae vero sint impedit placeat dolorem? Tempora, tempore? Harum, quisquam deserunt reiciendis recusandae adipisci nam aliquid illum, odio amet saepe sunt. Tempora, tempore? Harum, quisquam deserunt reiciendis recusandae adipisci nam aliquid illum, odio amet saepe sunt.recusandae adipisci nam aliquid illum, odio amet saepe sunt!!</p>

            <Link to="/">
            <button className='bg-pink-500 p-3 rounded-md mt-5 md:mt-9 hover:bg-pink-700 duration-300'>Back</button>
            </Link>

        </div>

        <div className='mt-12 grid md:grid-cols-4 grid-cols-1'> 
            {
                list.map((item) => (
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Paidbook
