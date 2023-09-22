import User from "./User";
import "./App.css"
import Classuser from "./Classuser";
import JSuser from "./JSuser";
import Stateinfunction from "./Stateinfunction";
import Stateinclass from "./Stateinclass";
function App() {
  return (
    <div className="App">
      <h1>Welcome to react</h1>
      {/* <User /> */}
      {/* <Developer /> */}
      {/* <Classuser /> */}
      {/* <JSuser /> */}
      {/* <Stateinfunction />  */}
      <Stateinclass />
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
