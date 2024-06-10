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
import MyProfile from "./Pages/profile/profileDesktop/profile";
// import MyOwnProfile from "./Pages/profile/profileMobile/myProfile/myProfile";
import MobileSettings from "./Pages/settings/settingsMobile/settingsmobile";
import MyProfileDesktopVersion from "./Pages/profile/profileDesktop/myProfileDesktop/myprofileDesktop";
import QuotationDesktop from "./Components/requestQuotation/requestQuotationDesktop/Quotation";
import LandingPage from "./Pages/LandingPage/LandingPage";

const route = createHashRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <LandingPage />,
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
  {
    path: "profile",
    element: <MyProfile />
  },
  {
    path: "ownprofile",
    element: <MyProfileDesktopVersion />
  },
  {
    path: "settings-mobile",
    element: <MobileSettings />
  },
  {
    path: "quotation",
    element: <QuotationDesktop />
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
