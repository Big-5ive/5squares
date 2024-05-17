import './registermobile.css'
import { LiaTimesSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { PiBuildings } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { TfiControlForward } from "react-icons/tfi";
import { useState, useRef } from 'react';

const MobileRegister = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [position, setPosition] = useState(0)
    const [isDragging, setIsdragging] = useState(false)
    const startXRef = useRef(0)
    // const startPosRef = useRef(0)
  
    const handleMouseDown = (e) =>{
      setIsdragging(true)
      startXRef.current = e.clientX - position
      // startPosRef.current = position
    }
  
    const handleTouchStart = (e) =>{
      setIsdragging(true)
      startXRef.current = e.touches[0].clientX - position
    }
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = e.clientX - startXRef.current
      setPosition(newX > 0 ? newX: 0)
    }
  
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const newx = e.touches[0].clientX - startXRef.current
      setPosition(newx > 0? newx : 0)
    }
  
    const handleMouseUp = () => {
      setIsdragging(false)
    }
  
    const handleTouchEnd = () => {
      setIsdragging(false)
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
                        <BsFacebook className='facebook'/>
                        <FcGoogle />
                        <AiFillTwitterCircle className='twitter'/>
                        <FaLinkedin color='blue'/>
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
                                <input type="text" />
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
                        <div className="slide-mobile-verify"
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                            onMouseUp={handleMouseUp}
                            onTouchEnd={handleTouchEnd}
                            onMouseLeave={handleMouseUp}
                        >
                            <div className="slide-mobile-hold"
                                style={{transform: `translateX(${position}px)`}}
                                onMouseDown={handleMouseDown}
                                onTouchStart={handleTouchStart}
                            >
                                <TfiControlForward />
                            </div>
                            <p>slide to verify</p>
                        </div>
                        <div className="mobile-agree">
                            <p>By creating an account i agree to <a href="">5square.com terms and agreement</a></p>
                        </div>
                        <div className="mobile-sign">
                            <p>Already have an account <span>SIgn in</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileRegister