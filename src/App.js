import { Routes, Route } from "react-router-dom";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./Components/NavbarItems/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/ContactUs";
import AboutUs from "./Routes/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
