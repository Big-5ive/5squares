import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ForgetPass from "./Components/Auth/ForgetPass/ForgetPass";
import Register from "./Components/Auth/Registration/Register";
import Login from "./Components/Auth/Login/Login";
import ChangePassword from "./Components/Auth/resetpassword/resetPassword";
import VerifyOtp from "./Pages/otpVerify/otpVerification";
import PasswordVerify from "./Pages/passwordVerify/forgetPasswordVerify";
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
    path: "/verifyotp",
    element: <VerifyOtp />
  },
  {
    path: "passverify",
    element: <PasswordVerify />
  },
  {
    path: "/changepass",
    element: <ChangePassword />
  },
  {
    path: "/feedback",
    element: <Feedback />
  },
  {
    path: "/acc",
    element: <Account />
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
