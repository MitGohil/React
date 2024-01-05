import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userdata from "./component/Userdata";
import Createuser from "./component/Createuser";
import Edituser from "./component/Edituser";
import Viewuser from "./component/Viewuser";

function App() {
  return (
    <div className="App">
      <h1>API Crud</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userdata />} />
          <Route path="/createuser" element={<Createuser />} />
          <Route path="/viewuser/:userid" element={<Viewuser />} />
          <Route path="/edituser/:userid" element={<Edituser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
