import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const Projects = () => {
    return (
        <>
            <div className="container my-4">

                <div className="row mt-1  bg-info bg-opacity-10 bg-gradient text-center">
                    <div className="col">
                        <h3 className="text-center">
                            <Link to="/projects/Newsapp"> NEWS App</Link>
                        </h3>
                    </div>
                    <div className="col">
                        <h3 className="text-center">
                            <Link to="/projects/Weatherapp">Weather App</Link>
                        </h3>
                    </div>
                </div>
{/* 
                <MDBBtn className='me-1' to="/projects/Newsapp">NEWS App
                    <Link to="/projects/Newsapp"> NEWS App</Link>
                </MDBBtn>
                <MDBBtn className='me-1'>
                    <Link to="/projects/Weatherapp">Weather App</Link>
                </MDBBtn> */}
                <div className="row">
                    <div className="col ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
