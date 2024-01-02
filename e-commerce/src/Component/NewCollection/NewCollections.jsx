import React from 'react'
import "./Newcollections.css"
import new_collections from "../Assets/new_collections"
import Item from '../Items/Item'

const NewCollections = () => {
    return (
        <div className='new-collections d-flex flex-column align-items-center mb-5'>
            <h1 className='fw-bold text-black'>NEW COLLECTIONS</h1>
            <hr className='w-50 pb-1 rounded-pill bg-secondary' />
            <div className="collections mt-5">
                {
                    new_collections.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}

export default NewCollections
