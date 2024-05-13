import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ForgetPass from "./Components/Auth/ForgetPass/ForgetPass";
import Register from "./Components/Auth/Registration/Register";
import Login from "./Components/Auth/Login/Login";

const route = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget-pass",
    element: <ForgetPass />,
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={route} />
    </>
  );
}

export default App;
