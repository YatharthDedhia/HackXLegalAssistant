import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import FIR from "./components/FIR";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "flowbite";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="tagline mt-10">
        <p className="text-5xl mx-10 font-bold text-wrap text-cyan-500 text-center">Meet your new AI legal assistant </p> 
        <p className="text-gray-400 font-xl text-center mt-3 w-1/2 mx-auto">CoCounsel does document review,deposition preparation, contract analysis, and timeline creation in
        minutes—with results you can trust.</p>
      </div>
      <Input/>  */}
      <FIR />
    </div>
  );
}

export default App;
