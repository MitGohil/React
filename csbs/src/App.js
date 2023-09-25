import User from "./User";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css"
import Classuser from "./Classuser";
import JSuser from "./JSuser";
import Stateinfunction from "./Stateinfunction";
import Stateinclass from "./Stateinclass";
import Propsinfunction from "./Propsinfunction";
import Propsinclass from "./Propsinclass";
import Getinputdata from "./Getinputdata";
import Hidendshow from "./Hidendshow";
import Handleform from "./Handleform";
function App() {
  return (
    <div className="App">
      <h1>Welcome to react</h1>
      {/* <User /> */}
      {/* <Developer /> */}
      {/* <Classuser /> */}
      {/* <JSuser /> */}
      {/* <Stateinfunction />  */}
      {/* <Stateinclass /> */}

      {/* <Propsinfunction name={"Mitesh"} email={"md@gmail.com"} others={{ address: "aaa", mobile: "111" }} />
      <Propsinfunction name={"Chetan"} email={"cd@gmail.com"} others={{ address: "bbb", mobile: "222" }} />
      <Propsinfunction name={"Jiyansh"} email={"jc@gmail.com"} others={{ address: "ccc", mobile: "333" }} /> */}

      {/* <Propsinclass name={"Mitesh"} email={"md@gmail.com"} others={{ address: "aaa", mobile: "111" }} />
      <Propsinclass name={"Chetan"} email={"cd@gmail.com"} others={{ address: "bbb", mobile: "222" }} />
      <Propsinclass name={"Jiyansh"} email={"jc@gmail.com"} others={{ address: "ccc", mobile: "333" }} /> */}

      {/* <Getinputdata /> */}
      {/* <Hidendshow /> */}
      <Handleform />
    </div>
  );
  function Developer() {
    return (
      <div className="App">
        <h1>Hello Developer</h1>
      </div>
    );
  }

}


export default App;
