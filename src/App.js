import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/NavbarItems/Navbar";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
