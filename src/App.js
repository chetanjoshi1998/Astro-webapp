import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Sinup from "./Components/Sinup";
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <div className="App">
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Sinup" element={<Sinup/>}/>
            <Route path="/Footer" element={<Footer/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
