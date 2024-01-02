import React, { useContext, useState } from 'react'
import {
  MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBBtn, MDBCollapse,
} from 'mdb-react-ui-kit';
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Contexts/ShopContext'

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext)
  const [openBasic, setOpenBasic] = useState(false);
  return (
    <>
      <MDBNavbar sticky expand='lg' light bgColor='light'>
        <MDBContainer fluid className='mx-5'>
          <MDBNavbarBrand ><img src={logo} alt="" /><h2 className='fw-bold'>SHOPPER</h2></MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem >
                <MDBNavbarLink active aria-current='page'>
                  <Link to="/" className='text-dark'>Shop</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                <MDBNavbarLink >
                  <Link to="/mens" className='text-dark'>Men</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink >
                  <Link to="/womens" className='text-dark'>Women</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink >
                  <Link to="/kids" className='text-dark'>Kids</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <div className="nav-login-cart d-flex align-items-center gap-5">
              <Link to="/login"><MDBBtn className='rounded-pill bg-white fs-5 text-black'>Login</MDBBtn></Link>
              <Link to="/cart"> <img src={cart_icon} alt="" /></Link>
              <div className="nav-cart-count d-flex align-items-center justify-content-center rounded-circle fs-6  text-white">{getTotalCartItems()}</div>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
