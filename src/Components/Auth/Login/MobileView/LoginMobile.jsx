import React, { useState } from "react";
import Button from "../../../Container/Buttons";
import Container, { Wrapper } from "../../../Container/Container";
import InputField from "../../../Container/Input";
import Typography from "../../../Container/Typography.jsx";
import { IoCloseOutline } from "react-icons/io5";
import LoginIcon from "./LoginIcon.jsx";
import "./LoginMobile.css";
import { PiWarningCircleFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export function LoginMobile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const url = import.meta.env.VITE_LOGIN_API;

  const handleForgotPass = ()=>{
    nav("/forget-pass")
  }

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setEmail("")
        setPassword("")
        console.log(result);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit} className="mb-20 w-full flex flex-col items-center space-y-3">
          <div className="flex-btw justify-between w-full">
            <button className="flex-center space-x-3" type="button" onClick={() => nav(-1)}>
              <IoCloseOutline style={{ fontSize: "2rem", color: "#858585" }} />
              <Typography type={"text2"}>Sign In</Typography>
            </button>
            <Link to="feedback">
              <FiEdit style={{ fontSize: "1.4rem", color: "#858585" }} />
            </Link>
          </div>
         
            <div className="w-full h-10 flex items-center space-x-3 mb-10 ">
               {error && (
            <>
              <PiWarningCircleFill className="text-red-500 text-[1.5em]" />
              <p className="text-red-500 text-sm">
                {error}
              </p>
            </>
              )}
            </div>
          
          <div className="w-full space-y-4">
            <InputField
              type={"name"}
              placeholder={"Email address or member ID"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="fp-cont my-3" onClick={handleForgotPass}>
            <Typography type={"text1"}>Forgot password</Typography>
          </div>
          <div className="w-full mb-4">
            <Button
              type={"login"}
              title={loading ? "Signing In..." : "Sign In"}
              ms={{ backgroundColor: "#ff7e25" }}
              disabled={loading}
            />
          </div>
          <Typography type={"text1"}>or sign in with</Typography>
          <LoginIcon />
          <Link to={"/register"}>
            <Typography type={"text1"}>
              Don't have an account?{" "}
              <Typography type={"text1"} ms={{ color: "#ff81a5" }}>
                Register
              </Typography>{" "}
            </Typography>
          </Link>
        </form>
      </Wrapper>
    </Container>
  );
}

export default LoginMobile;





