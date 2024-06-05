import React, { useEffect } from "react";
import "./Login.css";
import { LoginMobile } from "./MobileView/LoginMobile";
import LoginHeader from "./DesktopView/LoginHeader";
import LoginHero from "./DesktopView/LoginHero";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.persistedReducer.Cart)
  useEffect(()=>{
    
    console.log('Testing myUseff');
  },[])
  console.log(data);
  console.log(import.meta.env.VITE_KEY)
  console.log(import.meta.env.VITE_NEW)
  console.log('NODE_ENV:', process.env.NODE_ENV);
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
