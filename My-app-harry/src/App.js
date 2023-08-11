import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  const [mode, setMode] = useState('dark')

  return (
    <>
      <Navbar title="TextUtils" mode = {mode} aboutText="About TextUtils" />
      <div className="container my-3">

        <TextForm heading = "Enter the text for analyz" />
        <About/>
      </div>
    </>
  );
}

export default App;
