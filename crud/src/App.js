import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Studentdata from './Studentdata';
import Createuser from './Createuser';
import Editstudentdata from './Editstudentdata';
import Studentdetail from './Studentdetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='createuser' element={<Createuser />} />
            <Route path='studentdata' element={<Studentdata />} />
            <Route path={"editstudentdata/:studentid"} element={<Editstudentdata />} />
            <Route path={"Studentdetail/:studentid"} element={<Studentdetail />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;