import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate(-1);
  return (
    <div id="navbar">
      <Link pathway={navigate}><img className="navbar-icon" src="/logo192.png" alt=""
      /></Link>
      <img className="navbar-icon" src="/logo192.png" alt="" />
      <div id="burger">
        <img className="navbar-icon" src="/logo192.png" alt="" />
      </div>
    </div>
  )
}