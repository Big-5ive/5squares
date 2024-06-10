import React, { useEffect, useRef, useState } from "react";
import "./Register.css";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { TfiControlForward } from "react-icons/tfi";
import StateComponent from "./states/allStates";
import { FaCheckCircle } from "react-icons/fa";
import MobileRegister from "./mobile/registermobile";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../Global/Features";
import LoginHeader from "../Login/DesktopView/LoginHeader";


const Register = () => {
  const [arrow, setArrow] = useState(false);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsdragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false)
  const startXRef = useRef(0);
  const containerRef = useRef(null)

  const [state, setState] = useState("")
  const [tradeRole, setTradeRole] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [company, setCompany] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [tel, setTel] = useState("")
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError: false,
    type: "",
    message: ""
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Profile = useSelector((e) => e.persistedReducer.userProfile)

  const handleMouseDown = (e) => {
    if (isVerified) return;
    setIsdragging(true);
    startXRef.current = e.clientX - position;
  };

  const handleTouchStart = (e) => {
    if (isVerified) return;
    setIsdragging(true);
    startXRef.current = e.touches[0].clientX - position;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isVerified) return;
    const newX = e.clientX - startXRef.current;
    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = containerRef.current.firstChild.offsetWidth;
    const maxPosition = containerWidth - itemWidth
    setPosition(newX >= 0 && newX <= maxPosition ? newX : newX > maxPosition ? maxPosition : 0);
    if (newX >= maxPosition) {
        validateInput();
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || isVerified) return;
    const newX = e.touches[0].clientX - startXRef.current;
    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = containerRef.current.firstChild.offsetWidth;
    const maxPosition = containerWidth - itemWidth
    setPosition(newX >= 0 && newX <= maxPosition ? newX : newX > maxPosition ? maxPosition : 0);
    setPosition(newX >= 0 && newX <= maxPosition ? newX : newX > maxPosition ? maxPosition : 0);
    if (newX >= maxPosition) {
        validateInput()
    }
  };

  const handleMouseUp = () => {
    setIsdragging(false);
  };

  const handleTouchEnd = () => {
    setIsdragging(false);
  };

  const passwordValidator = () => {
    const hasUpperCase = /[A-Z]/
    const hasLowerCase = /[a-z]/
    const hasNumbers = /\d/
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/

      return hasUpperCase.test(password) &&
             hasLowerCase.test(password) &&
             hasNumbers.test(password) &&
             hasSpecialChars.test(password)
  }

  const validateInput = () => {
    if (!state) {
        setError({
          isError: true,
          type: "state",
          message: "you can't leave this field empty"
        })
        setPosition(0)
    }else if (!tradeRole) {
      setError({
        isError: true,
        type: "trade role",
        message: "select a trade role"
      })
      setPosition(0)
    }else if (!email) {
      setError({
        isError: true,
        type: "email",
        message: "you can't leave this field empty"
      })
      setPosition(0)
    }else if (!email.includes("@")) {
      setError({
        isError: true,
        type: "email@",
        message: "pls enter a valid email"
      })
      setPosition(0)
    }else if (!password) {
      setError({
        isError: true,
        type: "password",
        message: "you cant leave this field empty"
      })
      setPosition(0)
    }else if(passwordValidator() === false) {
      setError({
        isError: true,
        type: "password valid",
        message: "login password must contain both lower and upper case letters, number and special character"
      })
      setPosition(0)
    }
    else if (password.length < 7) {
      setError({
        isError: true,
        type: "password",
        message: "login pasword should be more than 7 digits"
      })
      setPosition(0)
    }else if (!confirmPassword) {
      setError({
        isError: true,
        type: "confirm password",
        message: "you can't leave this field empty"
      })
      setPosition(0)
    }else if (password != confirmPassword) {
      setError({
        isError: true,
        type: "password match",
        message: "login password & confirm password must match"
      })
      setPosition(0)
    }else if (!company) {
      setError({
        isError: true,
        type: "company",
        message: "you can't leave this field empty"
      })
      setPosition(0)
    }else if (!firstName) {
      setError({
        isError: true,
        type: "first name",
        message: "pls enter your first name"
      })
      setPosition(0)
    }else if (firstName.length < 3) {
      setError({
        isError: true,
        type: "first name lenght",
        message: "first name should be at least three characters"
      })
      setPosition(0)
    }else if (!lastName) {
      setError({
        isError: true,
        type: "last name",
        message: "pls enter your last name"
      })
      setPosition(0)
    }else if (lastName.length < 3) {
      setError({
        isError: true,
        type: "last name lenght",
        message: "last name should be at least three characters"
      })
      setPosition(0)
    }else if (!tel) {
      setError({
        isError: true,
        type: "tel",
        message: "you can't leave this field empty"
      })
      setPosition(0)
    }else if (tel.length < 10 || tel.length > 11) {
      setError({
        isError: true,
        type: "tel num",
        message: "tel must be at least 10 digit"
      })
      setPosition(0)
    }else {
        setIsVerified(true)
        setError({
          isError: false,
          type: "",
          message: ""
        })
    }
  }


  const getState = (statechose) => {
    setState(statechose)
    setArrow(false)
  }


  const handleRegister = () => {
    setLoading(true)
    const url = import.meta.env.VITE_REGISTER_API;
    const dataObject = {
      state: state,
      tradeRole: tradeRole,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      company: company,
      firstName: firstName,
      lastName: lastName,
      tel: tel
    }

    if (!agree){
      setLoading(false)
      setError({
        isError: true,
        message: "you have to agree with our terms of use and privacy policy",
        type: "agree"
      })
    }else{
      axios.post(url, dataObject)
      .then(Response => {
        // console.log(Response.data.data)
        dispatch(userProfile(Response?.data.data))
        setLoading(false)
        navigate("/verifyotp")
      })
      .catch(virus => {
        console.log(virus)
        setError({
          isError: true,
          type: "virus",
          message: virus.response.data.message
        })
        setLoading(false)
      })
    }
  }
  const signUp = "Sign Up";
  const headerLinks = [
    { text: "join in", href: "#/login" },
    { text: "Home Page", href: "#/" },
  ];

  return (
    <>
      <LoginHeader
          style={{backgroundColor : "#f0f0f0"}}
          identityVerification={signUp}
          links={headerLinks}
        />
    <div className="register-wrapper">
      {/* <div className="register-head">
        <h1>5square</h1>
      </div> */}
      <div className="register-body">
        <div className="register-body-hold">
          {arrow ? (
            <div className="states">
              <StateComponent ondata={getState}/>
            </div>
          ) : null}
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>State/Region:</p>
            </div>
            <div className="region">
              <div className="region-hold" onClick={() => setArrow(!arrow)}>
                <div className="state-chosen">
                  <p>{state}</p>
                </div>
                <div className="arrow">
                  {arrow ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </div>
              </div>
            </div>
          </div>
          {
            error.isError && error.type === "state"?<div className="register-eror">*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>please select trade role:</p>
            </div>
            <div className="role-option">
              <div className="radio">
                <input
                 onChange={()=>setTradeRole("buyer")}
                 name="role" 
                 type="radio" />
                <p>Buyer</p>
              </div>
              <div className="radio">
                <input
                 onChange={()=>setTradeRole("seller")}
                 name="role"
                 type="radio" />
                <p>Seller</p>
              </div>
              <div className="radio">
                <input 
                onChange={()=> setTradeRole("both")}
                name="role" 
                type="radio" />
                <p>Both</p>
              </div>
            </div>
          </div>
          {
            error.isError && error.type === "trade role"?<div className="register-eror">*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Verify email address:</p>
            </div>
            <div className="role-option">
              <input
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                id="emailreg"
                placeholder="please set the email as the login name"
                type="email"
              />
            </div>
          </div>
          {
            error.isError && error.type === "email" || 
            error.isError && error.type === "email@"
            ?<div className="register-eror">*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Login Password:</p>
            </div>
            <div className="role-option">
              <input
                id="emailreg"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="set the login password"
                type="password"
              />
            </div>
          </div>
          {
            error.isError && error.type === "password" ||  error.isError && error.type === "password valid" ?
            <div className="register-eror">*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Confirm Password:</p>
            </div>
            <div className="role-option">
              <input
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                id="emailreg"
                placeholder="Enter the login password again"
                type="password"
              />
            </div>
          </div>
          {
            error.isError && error.type === "confirm password" || error.isError && error.type === "password match"?<div className="register-eror">*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Company Name:</p>
            </div>
            <div className="role-option">
              <input
                id="emailreg"
                value={company}
                onChange={(e)=> setCompany(e.target.value)}
                placeholder="please enter your company name"
                type="text"
              />
            </div>
          </div>
          {
            error.isError && error.type === "company"?<div className="register-eror">*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Full Name:</p>
            </div>
            <div className="role-option">
              <input
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                id="emailreg2"
                placeholder="please enter your first name"
                type="text"
              />
              <input
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                id="emailreg2"
                placeholder="please enter your last name"
                type="text"
              />
            </div>
          </div>
          {
            error.isError && error.type === "first name" || 
            error.isError && error.type === "last name" ||
            error.isError && error.type === "last name lenght" ||
            error.isError && error.type === "first name lenght"
            ?<div
             className={`register-eror ${error.type === "first name"? "register-eror2":""}`}>*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Tel:</p>
            </div>
            <div className="role-option">
              <input 
                value={tel}
                onChange={(e)=>setTel(e.target.value)}
                id="emailreg" 
                placeholder="phone number" 
                type="tel" />
            </div>
          </div>
          {
            error.isError && error.type === "tel" || error.type === "tel num" ?<div className="register-eror">*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Verify:</p>
            </div>
            <div className="role-option">
              <div
                className={`verify ${isVerified? 'verified' : ''}`}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseUp={handleMouseUp}
                onTouchEnd={handleTouchEnd}
                onMouseLeave={handleMouseUp}
                ref={containerRef}
              >
                <div
                  className={`item-drag ${isVerified ? 'item2' : ''}`}
                  style={{ transform: `translateX(${position}px)` }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  {
                    isVerified ? <FaCheckCircle /> : <TfiControlForward />
                  }
                </div>
                {
                  isVerified? "Verified" : <p>please slide to verify</p>
                }
              </div>
            </div>
          </div>
          <div className="input-hold">
            <div className="type">
              {/* <span className='red'>*</span>
              <p>Verify:</p> */}
            </div>
            <div className="role-option">
              <div className="verify-check">
                <input
                  onChange={()=> setAgree(!agree)}
                 type="checkbox" />
              </div>
              <p className="notice">
                I agree to <span>Terms of use </span>
                and <span>Privacy policy</span>. I agree to receive more
                information from 5square.com about its product and services.
              </p>
            </div>
          </div>
          {
            error.isError && error.type === "agree" || error.isError && error.type === "virus"?
            <div className="register-eror">*<p>{error.message}</p></div>
            : null
          }
          <div className="input-hold">
            <div className="type"></div>
            <div className="register-button">
              {
                isVerified?<button
                onClick={handleRegister}
                >
                  {
                    loading?<BeatLoader color="white" />: "Agree and Register"
                  }
                </button>:
                <button
                onClick={()=> navigate("/verifyotp")}
               >Agree and Register</button>
              }
            </div>
          </div>
          <div className="account-already">
            <p>Already have an account?<span onClick={()=>navigate("/login")}>Sign in</span></p>
          </div>
        </div>
      </div>
      <div className="mobile-res">
        <MobileRegister />
      </div>
    </div>
    </>
  );
};

export default Register;
