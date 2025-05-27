import { Routes, Route } from "react-router-dom";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./Components/NavbarItems/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/ContactUs";
import AboutUs from "./Routes/AboutUs";
import SoftwareDevelopment from "./Routes/SoftwareDevelopment";
import AppDev from "./Routes/AppDev";
import WebDev from "./Routes/WebDev";
import Career from "./Routes/Career";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/development" element={<SoftwareDevelopment />} />
        <Route path="/appDevelopment" element={<AppDev />} />
        <Route path="/webDevelopment" element={<WebDev />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
