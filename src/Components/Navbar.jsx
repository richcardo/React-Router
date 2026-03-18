import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link className="item" to="/">Home</Link>
        <Link className="item" to="/info">Info</Link>
      </div>
      <div className="auth">
        <Link className="item" to="/login">Login</Link>
        <Link className="item" to="/register">Register</Link>
      </div>
    </nav>
  )
}