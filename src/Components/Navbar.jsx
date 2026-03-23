import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import useScroll from "../Hooks/useScroll";

export default function Navbar() {
  const { user, setDataUser} = useContext(UserContext);
  const [scroll, ref] = useScroll();

  return (
    <nav
      ref={ref}
      className={`fixed top-0 w-full transition-all duration-300 flex justify-between items-center h-[70px] ${
        scroll > 0
          ? "bg-zinc-600 shadow-md text-black"
          : "bg-black text-white"
      }`}
    >
      <div className="links ms-1 items-center">
        <Link className="item" to="/">
          Home
        </Link>
        {user && (
          <Link className="item" to="/info">
            Info
          </Link>
        )}
        {user && (
          <div>
            <p>Welcome, {user.userName} </p>
            <button className="btn btn-secondary" onClick={() => setDataUser(null)}>
              Logout
            </button>
          </div>
        )}
        <Link className="item" to="/data">
          Data
        </Link>
      </div>
      <div className="auth me-1 items-center">
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
