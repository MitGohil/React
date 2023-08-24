import { useState } from 'react';
import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been activated", "success")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been activated", "success")


    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} aboutText="About TextUtils" toggle={togglemode} />
      <Alert alertmsg={alert} />
      <div className="container my-3">

        <TextForm heading="Enter the text for analyz" showAlert={showAlert} mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
