import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import useScroll from "../Hooks/useScroll";

export default function Navbar() {
  const { user } = useContext(UserContext);
  const [scroll, ref] = useScroll();

  return (
    <nav ref={ref} className={scroll > 0 ? "navbar" : "navScroll"}>
      <div className="links">
        <Link className="item" to="/">
          Home
        </Link>
        {user && (
          <Link className="item" to="/info">
            Info
          </Link>
        )}
        <Link className="item" to="/data">Data</Link>
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
