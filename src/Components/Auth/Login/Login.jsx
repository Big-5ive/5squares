import React from "react";
import "./Login.css";
import { LoginMobile } from "./MobileView/LoginMobile";
import LoginHeader from "./DesktopView/LoginHeader";
import LoginHero from "./DesktopView/LoginHero";


const Login = () => {
  return (
    <>
      <div className="hidden max-[700px]:flex ">
        <LoginMobile />
      </div>
      <div className="max-[700px]:hidden">
        <LoginHeader />
        <LoginHero />
      </div>
    </>
  );
};

export default Login;
