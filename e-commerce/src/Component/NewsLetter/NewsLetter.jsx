import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
    return (
        <div className=' mx-3 newsletter mx- d-flex flex-column justify-content-center align-items-center mb-5 pt-5'>
            <h1 className="fw-bold fs-1">Get Exclusive Offers on Your Email</h1>
            <p className='my-4 fs-5'>Subscribe to our newletter and stay updates</p>
            <div className='d-flex align-items-center justify-content-between rounded-pill w-50 border border-color-eee bg-white my-4'>
                <input type="email" name="" placeholder='Your Email id' id="" className='border-0 w-100 ms-4 ' />
                <button className='w-50 cursor-pointer bg-black text-white rounded-pill py-3'>SUBSCRIBE</button>
            </div>

        </div>
    )
}

export default NewsLetter
