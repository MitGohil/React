import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Outlet, Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light' sticky>
                <MDBContainer fluid>
                    <MDBNavbarBrand>
                        <MDBNavbarLink active aria-current='page' >
                            <Link to="#">Navbar</Link>
                        </MDBNavbarLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavSecond(!showNavSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav>
                            {/* <MDBNavbarLink active aria-current='page' >
                                <Link to="/home">Home</Link>
                            </MDBNavbarLink> */}
                            <MDBNavbarLink active aria-current='page' >
                                <Link to="/login">Login</Link>
                            </MDBNavbarLink>
                            <MDBNavbarLink active aria-current='page' >
                                <Link to="/createuser">Register</Link>
                            </MDBNavbarLink>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <Outlet></Outlet>
        </>

    );
}