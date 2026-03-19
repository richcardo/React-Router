import "./App.css";
import { RouterProvider } from "react-router";
import router from "./Routing/router";
import UserProvider from "./Context/UserContext";


function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
