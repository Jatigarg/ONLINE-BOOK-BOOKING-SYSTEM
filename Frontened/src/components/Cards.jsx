import React from 'react'

function Cards({ item }) {
    console.log(item)
    return (
        <>
            <div className='my-3 p-2'>
                <div className="card bg-base-100 w-92 height-26rem shadow-xl hover:scale-110 duration-200 cursor-pointer">
                    <figure>
                        <img className=''
                            src={item.image}
                            alt="Book" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between pt-3">
                            <div className="badge badge-outline hover:cursor-pointer py-3 px-4 hover:bg-pink-500">${item.price}</div>
                            <div className="badge badge-outline hover:cursor-pointer py-4 hover:text-pink-500">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
