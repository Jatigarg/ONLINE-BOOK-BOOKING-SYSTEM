import React from 'react'
import book from '../../public/Book.png'

function Body() {
    return (
        <>
            <div className='bg-gray-600 md:flex md:flex-row flex-col md:pl-10 md:pr-14 pl-6 pr-10 pt-32'>

                <div id="right" className='md:w-1/2 w-full text-white md:order-1 order-2 '>

                    <h1 className='text-4xl font-bold'>Hello,welcome here to learn something <span className='text-pink-400'>new everyday !!!</span> </h1>

                    <p className='pt-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ipsum laudantium laborum suscipit vitae neque rerum pariatur nostrum autem, accusamus impedit corporis voluptate eveniet error tenetur cupiditate totam dignissimos harum minima odit omnis soluta atque amet. Minus sequi cum repellat a, deserunt aliquid sed? Odio a ullam debitis provident, modi qui accusantium ratione deleniti aliquam magnam natus facere, consequatur quam architecto quia quibusdam labore inventore reiciendis, eaque voluptatum expedita! Corrupti eaque qui sit esse laborum?</p>

                    {/* email */}

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
                            <input type="text" className="grow" placeholder="Email" />
                        </label>

                    </div>

                    {/* button */}

                    <div className='pt-11'>
                    <button className="btn btn-secondary">Submit</button>
                    </div>

                </div>

                <div id="left" className='md:w-1/2 w-full order-1'>

                    <img className='md:px-12 w-92 h-92 pt-0 wt-0' src={book} alt="" />

                </div>
            </div>
        </>
    )
}

export default Body
