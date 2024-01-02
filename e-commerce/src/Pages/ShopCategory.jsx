import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Contexts/ShopContext'
import dropdown_icon from "../Component/Assets/dropdown_icon.png"
import Item from "../Component/Items/Item"
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner d-block w-100 px-3 my-4' src={props.banner} alt="" />
      <div className="shopcategory-indexSort d-flex justify-content-between align-items-center ">
        <p>
          <span className='fw-bold'>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort px-4 py-2 rounded-pill">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null
            }
          })
        }
      </div>
      <div className=" d-flex justify-content-center align-items-center mx-auto">
        <button className='shopcategory-loadmore w-25 text-black border-0 rounded-pill py-3 fs-5 fw-bold'>Explore More</button>

      </div>
    </div>
  )
}

export default ShopCategory
