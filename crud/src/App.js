import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
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
          <Route path='/' element={<Studentdata />} />
          <Route path='/createuser' element={<Createuser />} />
          <Route path={"/editstudentdata/:studentid"} element={<Editstudentdata />} />
          <Route path={"/Studentdetail/:studentid"} element={<Studentdetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;