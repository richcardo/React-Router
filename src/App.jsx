import "./App.css";
import { RouterProvider } from "react-router";
import router from "./Routing/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
