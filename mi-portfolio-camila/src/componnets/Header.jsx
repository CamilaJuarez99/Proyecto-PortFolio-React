import Navbar from "./Navbar";
import "../css/header.css";
import useStore from "../stores/useStore";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {

  const { color, cambiarColor } = useStore();

  return (
    <>
      <div className="header">
        <div className="header-title-container">
          <h1 >Camila Juarez - Fullstack Developer</h1>
        </div>
        <button onClick={cambiarColor} className="btn toggle-theme-btn">
          {color ? <FaSun size={26} />: <FaMoon size={26} /> }
        </button>
      </div>
      <Navbar />
    </>
  );
};

export default Header;

