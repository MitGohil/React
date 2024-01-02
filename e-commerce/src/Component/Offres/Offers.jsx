import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers d-xl-flex mb-5 mx-3'>
      <div className="offers-left d-flex flex-column justify-content-center">
        <h1 className='fw-bold text-black'>Exclusive</h1>
        <h1 className='fw-bold text-black'>Offers For You</h1>
        <p className='fw-bold text-black fs-5'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='text-white rounded-pill w-50 py-3 border-0 mt-5 fs-5 '>Check Now</button>
      </div>
      <div className="offers-right d-flex align-items-center justify-content-end pt-5">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
