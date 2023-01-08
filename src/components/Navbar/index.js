// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


//TODO:: 1. Fix the Back button fucntion
//** 2. Link actual icons */
export default function Navbar() {
  // const navigate = useNavigate(-1);
  return (
    <div id="navbar">
      <Link to="/Home"><img className="navbar-icon" src="/logo192.png" alt=""
      /></Link>
      <Link to="/"><img className="navbar-icon" src="/logo192.png" alt="Circulize Logo" /></Link>
      <div id="burger">
        <Link><img className="navbar-icon" src="/logo192.png" alt="Burger Menu" /></Link>
      </div>
    </div>
  )
}