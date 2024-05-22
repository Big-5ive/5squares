import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginErrorMssg from "../MobileView/LoginErrorMssg";
import { Link } from "react-router-dom";

const LoginCard = () => {
  const [showNumber, setShowNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const handleShowMobileNumber = () => {
    setShowEmail(false);
    setShowNumber(true);
  };
  const handleShowEmail = () => {
    setShowEmail(true);
    setShowNumber(false);
  };
  return (
    <div className="w-[45%] h-max bg-white shadow-custom flex justify-center py-10 ">
      <div className="w-[90%] flex flex-col  ">
        <form action="" method="post" className="w space-y-4">
          <div className="relative">
            <LoginErrorMssg message={"Warning"} />
            <label className="w-full flex justify-between items-end ">
              {" "}
              <span className="font-medium text-[#222222] text-sm ">
                Account:
              </span>{" "}
              <img src="/images/QR.png" alt="" srcset="" />{" "}
            </label>
            {showEmail && (
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full h-6 border-gray-300 border-[1px] text-sm px-2 "
              />
            )}
            {showNumber && (
              <div className="w-full h-6 border-gray-300 border-[1px] flex">
                <select
                  name=""
                  id=""
                  className="flex outline-none border-none bg-transparent text-sm"
                >
                  <option value="+234 Nigeria">+234 Nigeria</option>
                </select>
                <input
                  type="number"
                  name="number"
                  maxLength={11}
                  className="outline-none bg-transparent border-none"
                />
              </div>
            )}
          </div>
          <div className="w-full space-y-1">
            <div>
              <label className="w-full flex justify-between items-end ">
                {" "}
                <span className="font-medium text-[#222222] text-sm">
                  Password:
                </span>{" "}
                <Link
                  to="/forget-pass"
                  className="text-[#1c31e2] text-sm font-medium cursor-pointer "
                >
                  Forgot Password?
                </Link>{" "}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full h-6 border-gray-300 border-[1px] text-sm px-2 "
              />
            </div>
            <div className="space-x-2">
              <input
                type="checkbox"
                name="Stayed signed in"
                id="Stayed signed in"
                value="Stayed signed in"
                className="text-black"
                checked
              />
              <label
                for="Stayed signed in"
                className="font-medium text-[#222222] text-sm"
              >
                Stayed signed in
              </label>{" "}
            </div>
          </div>
          <div className="w-full space-y-1">
            <button className="w-full h-8 bg-[#ff6b08] rounded font-bold text-white ">
              Sign In
            </button>
            <label className="w-full flex justify-between items-end ">
              {showEmail ? (
                <p
                  className="text-[#1c31e2] text-sm font-medium cursor-pointer"
                  onClick={handleShowMobileNumber}
                >
                  Mobile number sign in
                </p>
              ) : (
                <p
                  className="text-[#1c31e2] text-sm font-medium cursor-pointer"
                  onClick={handleShowEmail}
                >
                  Email sign in
                </p>
              )}
              <Link
                to="/register"
                className="text-[#1c31e2] text-sm font-medium cursor-pointer "
              >
                Create account
              </Link>
            </label>
          </div>
        </form>
        <hr className="w my-4" />
        <div className="flex space-x-4 items-center">
          <p>Sign in with:</p>
          <div className="flex space-x-4">
            <div className="rounded w-10 h-10  flex-center facebook">
              <FaFacebookF style={{ color: "white", fontSize: "20px" }} />
            </div>
            <div className="w-10 h-10 rounded flex-center google">
              <FcGoogle style={{ fontSize: "20px" }} />
            </div>
            <div className="w-10 h-10 rounded flex-center linkedin">
              <FaLinkedinIn style={{ color: "white", fontSize: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
