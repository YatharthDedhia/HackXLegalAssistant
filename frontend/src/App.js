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
import FIRForm from "./components/FIR";
import Login from "./components/Login";
import Register from "./components/Register";
// import LeaseDeedForm from "./components/LeaseDeed";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Input /> */}
      {/* <Citations /> */}
      {/* <GMaps /> */}
      {/* <Leaflet /> */}
      {/* <Summarise /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/template" element={<FIRForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
