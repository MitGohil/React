import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer d-flex flex-column justify-content-center align-items-center mt-5'>
            <div className="footer-logo d-flex align-items-center">
                <img src={footer_logo} alt="" className='me-2' />
                <p className='ms-2 fw-bold fs-1 text-black'>SHOPPER</p>
            </div>
            <ul className="footer-links d-flex my-4 gap-5">
                <Link className='text-black fs-5'>Company</Link>
                <Link className='text-black fs-5'>Product</Link>
                <Link className='text-black fs-5'>Offices</Link>
                <Link className='text-black fs-5'>About</Link>
                <Link className='text-black fs-5'>Contact</Link>
            </ul>
            <div className="footer-social-icon my-4 d-flex gap-4">
                <div className="footer-icon-container p-2 bg-light bg-image hover-zoom rounded-3">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container p-2 bg-light bg-image hover-zoom rounded-3">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-container p-2 bg-light bg-image hover-zoom rounded-3">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright d-flex flex-column align-items-center gap-4 w-100 mb-1 text-black fs-5">
                <hr className='w-75 pb-1 rounded-pill bg-secondary border-0' />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
