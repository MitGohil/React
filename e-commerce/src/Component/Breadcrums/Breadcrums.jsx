import React from 'react'
import "./Breadcrums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

const Breadcrums = (props) => {
    const { product } = props;
    return (
        <div className='breadcrums d-flex align-items-center gap-2 fw-bold fs-6 text-capitalize'>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}

export default Breadcrums
