import React from "react";
import "./Login.css";
import { LoginMobile } from "./MobileView/LoginMobile";
import HeaderLogin from "./DesktopView/HeaderLogin";
import HeroLogin from "./DesktopView/heroLogin";


const Login = () => {
  return (
    <>
      <div className="lg:hidden ">
        <LoginMobile />
      </div>
      <div className="max-[1024px]:hidden">
        <HeaderLogin />
        <HeroLogin />
      </div>
    </>
  );
};

export default Login;
