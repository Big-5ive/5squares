import React from "react";
import logo from "/images/5square_Logo.jpg"

const LoginHeader = () => {
  return (
    <header className="w-full h-20 flex-center ">
      <div className="w-11/12 h-full text-3xl font-bold flex items-center ">
      <div className="h-[70%] w-[30%] ">
       <img src={logo} alt="Logo" className="w-full h-full object-cover" />
       </div>
      </div>
    </header>
  );
};

export default LoginHeader;
