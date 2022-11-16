import {Outlet, Link} from 'react-router-dom';


export default function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>

        </ul>
      </nav>

      <Outlet />
    </header>
  )
}