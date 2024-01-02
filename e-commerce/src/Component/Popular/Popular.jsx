import React from 'react'
import "./Popular.css"
import data_product from "../Assets/data"
import Item from '../Items/Item'

const Popular = () => {
    return (
        <div className='popular d-flex flex-column align-items-center'>
            <h1 className='fw-bold text-black'>POPULAR IN WOMEN</h1>
            <hr className='w-50 pb-1 rounded-pill bg-secondary border-0' />
            <div className="popular-item d-flex mt-5">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular
