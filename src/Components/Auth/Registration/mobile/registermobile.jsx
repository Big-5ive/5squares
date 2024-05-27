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
import { RingLoader, BeatLoader } from "react-spinners";
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const MobileRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsdragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false)
  const startXRef = useRef(0);
  const containerRef = useRef(null)
//   const [company, setCompany] = useState("")

    const [allStates, setAllStates] = useState([])
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({
        isError: false,
        type: "",
        message: ""
    })

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

  const fetchStates = async () => {
    // setLoading(true)
    const url = "https://fivesquare-api.onrender.com/api/allstates"
      try {
        const response = await axios.get(url)
        setAllStates(response.data.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
    } 
    }

    useEffect(()=>{
        fetchStates()
      },[])

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
    setLoading(true)
    if (!state) {
        setError({
            isError: true,
            type: "state",
            message: "you have to select a state"
        })
        setPosition(0)
        setLoading(false)
    }else if (!firstName) {
        setError({
          isError: true,
          type: "first name",
          message: "pls enter your first name"
        })
        setPosition(0)
        setLoading(false)
      }else if (firstName.length < 3) {
        setError({
          isError: true,
          type: "first name lenght",
          message: "first name should be at least three characters"
        })
        setPosition(0)
        setLoading(false)
      }else if (!lastName) {
        setError({
          isError: true,
          type: "last name",
          message: "pls enter your last name"
        })
        setPosition(0)
        setLoading(false)
      }else if (lastName.length < 3) {
        setError({
          isError: true,
          type: "last name lenght",
          message: "last name should be at least three characters"
        })
        setPosition(0)
        setLoading(false)
      }else if (!email) {
        setError({
          isError: true,
          type: "email",
          message: "pls enter your email"
        })
        setPosition(0)
        setLoading(false)
      }else if (!email.includes("@")) {
        setError({
          isError: true,
          type: "email@",
          message: "enter a valid email"
        })
        setPosition(0)
        setLoading(false)
      }else if (!password) {
        setError({
          isError: true,
          type: "password",
          message: "you cant leave the password field empty"
        })
        setPosition(0)
        setLoading(false)
      }else if (passwordValidator() === false) {
        setError({
          isError: true,
          type: "password valid",
          message: "login password must contain both lower and upper case letters, number and special character"
        })
        setPosition(0)
        setLoading(false)
      }else if (password.length < 8) {
        setError({
          isError: true,
          type: "password lenght",
          message: "password must be at least 8 characters long"
        })
        setPosition(0)
        setLoading(false)
      }
    else {
        const url = "https://fivesquare-api.onrender.com/api/signup"
    const dataObject = {
      state: state,
      firstName: firstName,
      lastName: lastName,
      company: company,
      email: email,
      password: password,
      confirmPassword: password,
    }
    axios.post(url, dataObject)
      .then(Response => {
        console.log(Response.data.data)
        localStorage.setItem("userData", JSON.stringify(Response?.data.data))
        // localStorage.setItem("userId", JSON.stringify(Response.data.data._id))
        setLoading(false)
        setIsVerified(true)
        setError({
            isError: false,
            type: "",
            message: ""
          })
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
        setPosition(0)
      })
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
                            <select
                            onClick={fetchStates}
                            value={state}
                            onChange={(e)=> setState(e.target.value)}
                             name="mobile-state-select" id="mobile-state-select"
                             >
                                {
                                    loading?<BeatLoader color="blue" />:(
                                    allStates.map((e, id)=>(
                                        <option key={id} value={e}>{e}</option>
                                    ))
                                )
                                }
                            </select>
                        </div>
                        {
                            error.isError && error.type === "state"?
                            <div className="mobile-input-error">
                                <p>{error.message}</p>
                            </div>
                            : null
                        }
                        <div className="reg-input">
                            <div className="reg-firstname">
                                <p>First Name</p>
                                <input 
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                type="text" />
                            </div>
                            <div className="reg-firstname">
                                <p>Last Name</p>
                                <input 
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                type="text" />
                            </div>
                        </div>
                        {
                            error.isError && error.type === "first name" || 
                            error.isError && error.type === "last name" || 
                            error.isError && error.type === "first name lenght" || 
                            error.isError && error.type === "last name lenght"
                            ?
                            <div className="mobile-input-error">
                                <p>{error.message}</p>
                            </div>
                            : null
                        }
                        <div className="reg-input-comp">
                            <PiBuildings />
                            <div className="reg-comp">
                                <p>Company Name</p>
                                <input 
                                type="text" 
                                value={company} onChange={(e)=>setCompany(e.target.value)}/>
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
                                <input
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email" />
                            </div>
                        </div>
                        {
                            error.isError && error.type === "email" || 
                            error.isError && error.type === "email@"
                            ?
                            <div className="mobile-input-error">
                                <p>{error.message}</p>
                            </div>
                            : null
                        }
                        <div className="reg-input-comp2">
                            <RiLockPasswordFill />
                            <div className="reg-comp-pass">
                                <p>Create Pasword</p>
                                <input 
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                type={showPassword? "text": "password"} />
                            </div>
                            {
                                showPassword ? <FaRegEyeSlash onClick={()=> setShowPassword(!showPassword)} /> :
                                <FaRegEye onClick={()=> setShowPassword(!showPassword)} />
                            }
                        </div>
                        {
                            error.isError && error.type === "password" ||
                            error.isError && error.type === "password lenght" ||
                            error.isError && error.type === "password valid" ||
                            error.isError && error.type === "virus"
                            ?
                            <div className="mobile-input-error">
                                <p>{error.message}</p>
                            </div>
                            : null
                        }
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
                                    loading? <BeatLoader color="white" />:
                                    (isVerified ? <FaCheckCircle /> : <TfiControlForward />)
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
