import React from "react";
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Contacts from "./pages/Contacts";
import Proyects from "./pages/Proyects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/proyects" element={<Proyects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
