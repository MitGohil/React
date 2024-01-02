import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item  mx-3 rounded-3 bg-image hover-zoom my-3'>
            <Link to={`/product/${props.id}`}><img className='w-100' onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
            <p className='mb-2 mt-4'>{props.name}</p>
            <div className="item-prices d-flex">
                <div className="item-price-new me-2 fw-bold fs-5">
                    ${props.new_price}
                </div>
                <div className="item-price-old ms-2 text-decoration-line-through fs-5">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
