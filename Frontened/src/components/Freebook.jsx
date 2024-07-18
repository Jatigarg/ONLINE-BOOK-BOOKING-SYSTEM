import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

// import list from '../../public/list.json'
import Cards from './Cards';

function Freebook() {
    const [book, setbook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book")
                console.log(res.data.filter((data) => {
                    return data.category === 'Free'
                }))
                setbook(res.data.filter((data) => {
                    return data.category === 'Free'
                }))
            } catch (error) {
                console.log("Error:", error)
            }
        }
        getBook();
    }, [])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='bg-gray-600 md:pl-10 md:pr-14 pl-6 pr-10 pt-6 md:pt-10 text-white'>

                <div>
                    <h1 className='text-xl font-bold'>Free Offered Course</h1>

                    <p className='mt-4 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptates alias praesentium iusto modi adipisci officiis vitae veniam quae dolorem?</p>

                </div>

                <div className='pt-7'>

                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>

                </div>

            </div>
        </>
    )
}

export default Freebook
