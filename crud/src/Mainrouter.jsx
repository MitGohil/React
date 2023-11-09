import React from "react";
import { createBrowserRouter } from 'react-router-dom'
import Navbar from "./Navbar.jsx"
import Login from "./Login.jsx"
import Loginnav from "./Loginnav.jsx"
import Home from "./Home.jsx"
import Projects from './Projects.jsx'
import Newsapp from './Projects/newsapp/Newsapp.jsx'
import Createuser from "./Createuser.jsx"
import Studentdata from "./Studentdata.jsx"
import Editstudentdata from "./Editstudentdata.jsx"
import Studentdetails from "./Studentdetail.jsx"
import Weather from "./Projects/weatherapp/Weatherapp.jsx";

// const ClasscompoRoute = React.lazy(() => import("./Classcompo/Classcomporoutes"));
// const FunctionalCompoRoute = React.lazy(() => import("./Funtionalcompo/Functionalcomporoutes"))



const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: (<><Navbar /><Login /></>)
    },
    {
        path: "/login",
        element: (<><Navbar /><Login /></>)
    },
    {
        path: "/createuser",
        element: (<><Navbar /><Createuser /></>)
    },
    {
        path: "/studentdata",
        element: (<><Loginnav /><Studentdata /></>),
    },
    {
        path: "/Editstudentdata/:studentid",
        element: <Editstudentdata />
    },
    {
        path: "/Studentdetails/:studentid",
        element: <Studentdetails />
    },

    {
        path: "/home",
        element: (<><Loginnav /><Home /></>)
    },
    {
        path: "/projects",
        element: (<><Loginnav /><Projects /></>),
    },
    {
        path: "/projects/Newsapp",
        element: (<><Loginnav /><Projects /><Newsapp /></>)
    },
    {
        path: "/projects/Weatherapp",
        element: (<><Loginnav /><Projects /><Weather /></>)
    }

])
export default Mainrouter;