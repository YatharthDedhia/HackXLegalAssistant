import "./App.css";
import GMaps from './components/GMaps';
import Leaflet from './components/LeafLet';
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Template from "./components/Template";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "flowbite";
import { useEffect } from "react";
import { initFlowbite } from 'flowbite';

import Summarise from './components/Summarise';
import Citations from './components/Citations';



function App() {
  useEffect(()=>{
    initFlowbite();
  },[]);
  return (
    <div className="App">
      <Navbar />

      {/* <Citations /> */}
      {/* <GMaps /> */}
      {/* <Leaflet /> */}
      {/* <Summarise /> */}
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Input />} />
          <Route exact path="/template" element={<Template />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
