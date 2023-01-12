import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate(-1);
  return (
    <div id="navbar">
      <Link to="/" onClick={navigate}><i class="fa-solid fa-circle-chevron-left"></i></Link>
      <Link to="/"><i class="fa-brands fa-gg-circle"></i></Link>
      <div id="burger">
        <Link to="/"><i class="fa-solid fa-bars"></i></Link>
      </div>
    </div>
  )
}