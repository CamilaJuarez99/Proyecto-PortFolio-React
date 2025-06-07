import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Contacts from "./pages/Contacts";
import Proyects from "./pages/Proyects";
import Error from "./pages/Error";
import useStore from "./stores/useStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/modoclaro.css";
import "./css/modooscuro.css";


function App() {

  const { color } = useStore();

  useEffect(() => {
    document.body.className = color ? "modo-oscuro" : "modo-claro";
  }, [color]);

  return (
    <div   >


      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home   />}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/proyects" element={<Proyects/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
