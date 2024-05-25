import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ForgetPass from "./Components/Auth/ForgetPass/ForgetPass";
import Register from "./Components/Auth/Registration/Register";
import Login from "./Components/Auth/Login/Login";
import Identify from "./Components/Auth/identityVerification/identityVerify";
import ChangePassword from "./Components/Auth/resetpassword/resetPassword";
import Account from "./Components/Account/Account";
import Feedback from "./Components/Auth/Feedback/Feedback";

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
  {
    path: "/identify",
    element: <Identify />
  },
  {
    path: "/changepass",
    element: <ChangePassword />
  }
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
