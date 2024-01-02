import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div className='hero d-xl-flex mb-5 mx-3   '>
            <div className="hero-left lh-1 d-xl-flex justify-content-center flex-column gap-4 ">
                <h2 className='fw-bold text-black fs-3'>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon d-flex align-items-center gap-4">
                        <p className='fw-bold text-black'>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p className='fw-bold text-black'>collections</p>
                    <p className='fw-bold text-black'>for everyone</p>
                </div>
                <div className="hero-latest-btn d-flex justify-content-center align-items-center rounded-pill w-50 py-4 gap-3 fs-4 text-white mt-4">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right justify-content-center d-flex align-items-center">
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero
