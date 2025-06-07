import React from "react";
import "../css/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <h2 className="title">404</h2>
      <p className="message">¡Ups! Parece que te has perdido.</p>
      <p className="description">
        La página que estás buscando no existe.
      </p>
      <Link className="home" to="/">
        Volver a la pagina principal
      </Link>
    </div>
  );
};

export default Error;
