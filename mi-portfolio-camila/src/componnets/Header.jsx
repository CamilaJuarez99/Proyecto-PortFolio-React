import Navbar from "./Navbar";
import "../css/header.css";
import useStore from "../stores/useStore";

const Header = () => {

  const { color, cambiarColor } = useStore();

  return (
    <>
      <div className="header">
        <div className="header-title-container">
          <h1>Camila Juarez - Fullstack Developer</h1>
        </div>
        <button onClick={cambiarColor} className="btn toggle-theme-btn">
          {color ? "☀️" : "🌙"}
        </button>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
