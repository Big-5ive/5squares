import React from "react";
import "./Login.css";
import { LoginMobile } from "./MobileView/LoginMobile";
import HeroLogin from "./DesktopView/heroLogin";
import LoginHeader from "./DesktopView/LoginHeader";


const Login = () => {
  return (
    <>
      <div className="lg:hidden ">
        <LoginMobile />
      </div>
      <div className="max-[1024px]:hidden">
        <LoginHeader />
        <HeroLogin />
      </div>
    </>
  );
};

export default Login;
