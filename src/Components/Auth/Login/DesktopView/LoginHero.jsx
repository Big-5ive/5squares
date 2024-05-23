import React from "react";
import HeroLoginText from "./HeroLoginText";
import LoginCard from "./LoginCard";

const LoginHero = () => {
  return (
    <div className="w-full h-screen bg-slate-500 flex-center ">
      <div className="w-[85%] h-full flex-center  space-x-16 ">
        <HeroLoginText />
        <LoginCard />
      </div>
    </div>
  );
};

export default LoginHero;
