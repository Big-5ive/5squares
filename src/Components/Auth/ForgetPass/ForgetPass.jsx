import React from "react";
import "./ForgetPass.css";
import { PiWarningCircleFill } from "react-icons/pi";
import { TfiControlForward } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const ForgetPass = () => {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsdragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false)
  const startXRef = useRef(0);
  const containerRef = useRef(null)
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

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
    if (email.trim() === "") {
        alert("Error: Input field cannot be empty")
        setPosition(0)
    }else {
        setIsVerified(true)
    }
  }

  return (
    <div className="forget-parent">
      <div className="forget-head">
        <h1>Retrieve Password</h1>
      </div>
      <div className="forget-body">
        <div className="forget-body-hold">
          <div className="id-tell">
            <PiWarningCircleFill className="warn"/>
            <p>Please enter the login ID of the account to retrieve your password</p>
          </div>
          <div className="forget-input-hold">
            <div className="forget-input">
              <p>Login id:</p>
              <input
                className="forget-email"
                placeholder="Email adress"
               type="text"
               value={email}
               onChange={(e)=> setEmail(e.target.value)}
               />
            </div>
            <div className="forget-input">
              <p>validate:</p>
              <div className={`forget-val ${isVerified ? 'forget-input2' : ''}`}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseUp={handleMouseUp}
                onTouchEnd={handleTouchEnd}
                onMouseLeave={handleMouseUp}
                ref={containerRef}
              >
                <div className="forget-drag"
                  style={{ transform: `translateX(${position}px)` }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  {
                    isVerified ? <FaCheckCircle color="#7ac23c"/> : <TfiControlForward />
                  }
                </div>
                {
                  isVerified? <p>verified</p> : <p>please slide to verify</p>
                }
              </div>
            </div>
            <div className="forget-input">
              <p style={{width: "60px"}}></p>
              {
                isVerified ? <button
                  onClick={()=> navigate("/identify")}
                 className="forget-butt2">
                Submit
              </button> : 
              <button className="forget-butt">
                Submit
              </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
