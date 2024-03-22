import "./App.css";
import GMaps from './components/GMaps';
import Leaflet from './components/LeafLet';
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import FIR from "./components/FIR";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "flowbite";

import Summarise from './components/Summarise';
import Citations from './components/Citations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Input />
      {/* <Citations /> */}
      {/* <GMaps /> */}
      {/* <Leaflet /> */}
      {/* <Summarise /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/template" element={<FIR />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
