import React from "react";
import "./Login.css";
import { LoginMobile } from "./MobileView/LoginMobile";
import LoginHeader from "./DesktopView/LoginHeader";
import LoginHero from "./DesktopView/LoginHero";


const Login = () => {
  return (
    <>
      <div className="lg:hidden ">
        <LoginMobile />
      </div>
      <div className="max-[1024px]:hidden">
        <LoginHeader />
        <LoginHero />
      </div>
    </>
  );
};

export default Login;
