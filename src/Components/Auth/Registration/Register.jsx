import React, { useRef, useState } from "react";
import "./Register.css";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { TfiControlForward } from "react-icons/tfi";
import StateComponent from "./states/allStates";
import MobileRegister from "./mobile/registermobile";

const Register = () => {
  const [arrow, setArrow] = useState(false);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsdragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false)
  const startXRef = useRef(0);
  const containerRef = useRef(null)
  const [company, setCompany] = useState("")

  // const navigate = useNavigate()

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

  const validateInput = () => {
    if (company.trim() === "") {
        alert("Error: Input field cannot be empty")
        setPosition(0)
    }else {
        setIsVerified(true)
    }
  }

  return (
    <div className="register-wrapper">
      <div className="register-head">
        <h1>5square</h1>
      </div>
      <div className="register-body">
        <div className="register-body-hold">
          {arrow ? (
            <div className="states">
              <StateComponent />
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
                  <p>Lagos</p>
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
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>please select trade role:</p>
            </div>
            <div className="role-option">
              <div className="radio">
                <input name="role" type="radio" />
                <p>Buyer</p>
              </div>
              <div className="radio">
                <input name="role" type="radio" />
                <p>Seller</p>
              </div>
              <div className="radio">
                <input name="role" type="radio" />
                <p>Both</p>
              </div>
            </div>
          </div>
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Verify email address:</p>
            </div>
            <div className="role-option">
              <input
                id="emailreg"
                placeholder="please set the email as the login name"
                type="email"
              />
            </div>
          </div>
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Login Password:</p>
            </div>
            <div className="role-option">
              <input
                id="emailreg"
                placeholder="set the login password"
                type="password"
              />
            </div>
          </div>
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Confirm Password:</p>
            </div>
            <div className="role-option">
              <input
                id="emailreg"
                placeholder="Enter the login password again"
                type="password"
              />
            </div>
          </div>
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
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Full Name:</p>
            </div>
            <div className="role-option">
              <input
                id="emailreg2"
                placeholder="please enter your first name"
                type="text"
              />
              <input
                id="emailreg2"
                placeholder="please enter your last name"
                type="text"
              />
            </div>
          </div>
          <div className="input-hold">
            <div className="type">
              <span className="red">*</span>
              <p>Tel:</p>
            </div>
            <div className="role-option">
              <input id="emailreg" placeholder="phone number" type="tel" />
            </div>
          </div>
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
                  className="item-drag"
                  style={{ transform: `translateX(${position}px)` }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  <TfiControlForward color={isVerified ? "green" : "white"}/>
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
                <input type="checkbox" />
              </div>
              <p className="notice">
                I agree to <span>Terms of use </span>
                and <span>Privacy policy</span>. I agree to receive more
                information from 5square.com about its product and services.
              </p>
            </div>
          </div>
          <div className="input-hold">
            <div className="type"></div>
            <div className="register-button">
              <button>Agree and Register</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-res">
        <MobileRegister />
      </div>
    </div>
  );
};

export default Register;
