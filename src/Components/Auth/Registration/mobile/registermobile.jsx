import "./registermobile.css";
import { LiaTimesSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { TbBrandFacebook } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiBuildings } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { TfiControlForward } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";


const MobileRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsdragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false)
  const startXRef = useRef(0);
  const containerRef = useRef(null)
  const [company, setCompany] = useState("")

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
    if (company.trim() === "") {
        alert("Error: Input field cannot be empty")
        setPosition(0)
    }else {
        setIsVerified(true)
    }
  }

    return(
        <div className="mobilereg-wrap">
            <div className="mobile-reg-hold">
                <div className="mobile-reg-head">
                    <div className="cancel-icon-hold">
                        <LiaTimesSolid className='times'/>
                        <p>Register</p>
                    </div>
                    <VscFeedback className='times'/>
                </div>
                <div className="socials-hold">
                    <div className="social-write">
                        <p>to enjoy secure payments and free features</p>
                    </div>
                    <div className="social-icons">
                        <div className='facebook'>
                            <TbBrandFacebook />
                        </div>
                        <div className="google">
                            <FcGoogle />
                        </div>
                        <div className="twitter">
                            <FaTwitter />
                        </div>
                        <div className="linkdin">
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className="reg-mobile-input-cont">
                    <div className="line"><p>Or</p></div>
                    <div className="reg-mobile-input-hold">
                        <div className="mobile-state">
                            <p style={{fontSize: "15px"}}>State/region</p>
                            <select name="mobile-state-select" id="mobile-state-select">
                                <option value="Lagos">Lagos</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Lagos">Lagos</option>
                            </select>
                        </div>
                        <div className="reg-input">
                            <div className="reg-firstname">
                                <p>First Name</p>
                                <input type="text" />
                            </div>
                            <div className="reg-firstname">
                                <p>Last Name</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="reg-input-comp">
                            <PiBuildings />
                            <div className="reg-comp">
                                <p>Company Name</p>
                                <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                            </div>
                        </div>
                        <div className="reg-check">
                            <input type="radio" />
                            <p>i don't have a company</p>
                        </div>
                        <div className="reg-input-comp">
                            <TfiEmail />
                            <div className="reg-comp">
                                <p>Email</p>
                                <input type="email" />
                            </div>
                        </div>
                        <div className="reg-input-comp2">
                            <RiLockPasswordFill />
                            <div className="reg-comp-pass">
                                <p>Create Pasword</p>
                                <input type={showPassword? "text": "password"} />
                            </div>
                            {
                                showPassword ? <FaRegEyeSlash onClick={()=> setShowPassword(!showPassword)} /> :
                                <FaRegEye onClick={()=> setShowPassword(!showPassword)} />
                            }
                        </div>
                        <div className={`slide-mobile-verify ${isVerified? 'verified' : ''}`}
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                            onMouseUp={handleMouseUp}
                            onTouchEnd={handleTouchEnd}
                            onMouseLeave={handleMouseUp}
                            ref={containerRef}
                        >
                            <div className={`slide-mobile-hold ${isVerified ? 'slide-mobile' : ''}`}
                                style={{transform: `translateX(${position}px)`}}
                                onMouseDown={handleMouseDown}
                                onTouchStart={handleTouchStart}
                            >
                                {
                                    isVerified ? <FaCheckCircle /> : <TfiControlForward />
                                }
                            </div>
                            {
                                isVerified? <p>Verified</p>: <p>slide to verify</p>
                            }
                        </div>
                        <div className="mobile-agree">
                            <p>By creating an account i agree to <a href="">5square.com terms and agreement</a></p>
                        </div>
                        <div className="mobile-sign">
                            <p>Already have an account <span onClick={()=>navigate("/")}>SIgn in</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileRegister;
