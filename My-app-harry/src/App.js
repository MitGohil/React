import { useState } from 'react';
import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  const [mode, setMode] = useState('light')

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"

    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode = {mode} aboutText="About TextUtils" toggle={togglemode} />
      <div className="container my-3">

        <TextForm heading = "Enter the text for analyz" mode = {mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
