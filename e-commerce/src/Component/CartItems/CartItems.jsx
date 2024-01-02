import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartitems '>
            <MDBTable striped className='w-100 mx-auto' align='middle' border="1px">
                <MDBTableHead>
                    <tr>
                        <th scope='col' className='text-center fw-bold fs-5'>Products</th>
                        <th scope='col' className='text-center fw-bold fs-5'>Title</th>
                        <th scope='col' className='text-center fw-bold fs-5'>Price</th>
                        <th scope='col' className='text-center fw-bold fs-5'>Quantity</th>
                        <th scope='col' className='text-center fw-bold fs-5'>Total</th>
                        <th scope='col' className='text-center fw-bold fs-5'>Remove</th>
                    </tr>
                </MDBTableHead>
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <MDBTableBody>
                            <tr>
                                <th scope='row' className='text-center'><img src={e.image} className='w-25 abc' alt="" /></th>
                                <td >{e.name}</td>
                                <td className='text-center'>${e.new_price}</td>
                                <td className='text-center'>{cartItems[e.id]}</td>
                                <td className='text-center'>${e.new_price * cartItems[e.id]}</td>
                                <td className='text-center'><img src={remove_icon} className='cartitems-remove-icon cursor-pointer ' onClick={() => { removeFromCart(e.id) }} alt="" /></td>
                            </tr>
                        </MDBTableBody>
                    }
                    return null;
                })
                }
            </MDBTable>

            <div className="cartitems-down d-flex my-5">
                <div className="cartitems-total d-flex flex-column gap-4">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item d-flex justify-content-between">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item d-flex justify-content-between">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='border-0 fw-bold text-white w-50 py-3 rounded-pill'>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code , Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" name="" placeholder='PROMO CODE' id="" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
