import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <nav className="navbar">
      <div className="links">
        <Link className="item" to="/">
          Home
        </Link>
        {user && (
          <Link className="item" to="/info">
            Info
          </Link>
        )}
      </div>
      <div className="auth">
        <Link className="item" to="/login">
          Login
        </Link>
        <Link className="item" to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}
