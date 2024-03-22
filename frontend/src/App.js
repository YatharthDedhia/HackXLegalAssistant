import './App.css';
import GMaps from './components/GMaps';
import Leaflet from './components/LeafLet';
import Navbar from './components/Navbar';
import "flowbite"
import Summarise from './components/Summarise';
import Citations from './components/Citations';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <GMaps /> */}
      {/* <Leaflet /> */}
      {/* <Summarise /> */}
      <Citations />
    </div>
  );
}

export default App;
