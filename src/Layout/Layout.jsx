import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <Outlet />
      </div>
    </>
  );
}
