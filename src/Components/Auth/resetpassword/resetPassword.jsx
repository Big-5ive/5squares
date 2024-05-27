import { useState } from 'react';
import './resetpassword.css'
import { GiCheckMark } from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const navigate = useNavigate()
    const [sucess, setSuccess] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        isError: false,
        type: "",
        message: ""
    })

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

    const handleSubmit = () => {
        setLoading(true)
        if(!password) {
            setLoading(false)
            setError({
                isError: true,
                type: "password",
                message: "you can't leave this field empty"
            })
        }else if(passwordValidator() === false){
            setLoading(false)
            setError({
                isError: true,
                type: "passwordValid",
                message: "password must be at least 7 characters long and must contain uppercase, lowercase and special characters"
            })
        }else if(password.length < 7) {
            setLoading(false)
            setError({
                isError: true,
                type: "passwordLength",
                message: "password must be at lest 7 characters long"
            })
        }else if(!confirmPassword){
            setLoading(false)
            setError({
                isError: true,
                type: "confirmPassword",
                message: "you can't leave this field empty"
            })
        }else if(password !== confirmPassword){
            setLoading(false)
            setError({
                isError: true,
                type: "passwordCheck",
                message: "password and confirmPassword must match"
            })
        }else{
            const userId = JSON.parse(localStorage.getItem("userData"))
            const dataObject = {
                password: password,
                confirmPassword: confirmPassword
            }
            const url = `https://fivesquare-api.onrender.com/api/reset-user/${userId.id}`
            axios.post(url, dataObject)
            .then(Response => {
                setLoading(false)
                setSuccess(true)
                console.log(Response)
            })
            .catch(error => {
                setLoading(false)
                setError({
                    isError: true,
                    type: "server",
                    message: error.response.data.message
                })
                console.log(error)
            })
        }
    }
    return(
        <div className="change-password-parent">
            <div className="change-password-head">
                <p>Password Reset</p>
            </div>
            <div className="identify-step">
                <div className="steps">
                    <div className="shapes">
                        <div className='one'><p>1</p></div>
                        <div className='line1 line1xx'></div>
                        <div className='two twox'><p>2</p></div>
                        <div className='line1'></div>
                        <div className={`two ${sucess? "done" : null}`}><GiCheckMark /></div>
                    </div>
                    <div className="step-write">
                        <p style={{color: "orangered"}}>verify</p>
                        <p style={{color: sucess ? "orangered" : null}}>Reset Password</p>
                        <p style={{color: sucess ? "orangered" : null}}>Done</p>
                    </div>
                </div>
            </div>
            {
                sucess? 
                <div className="sucess-message">
                <div className="message-hold">
                    <div className="sucess-icon">
                        <FaRegCheckCircle />
                    </div>
                    <div className="talk">
                        <h1>Reset successful, please keep in mind your new password</h1>
                        <p onClick={()=>navigate("/")}>Sign in now</p>
                    </div>
                </div>
            </div>:
            <div className="change-wrap">
            <div className="change-wrap-hold">
                <div className="change-pass">
                    <div className="pass-name">
                        <p>New Password:</p>
                    </div>
                    <div className="pass-inp">
                        <input 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="text" 
                        />
                    </div>
                </div>
                {
                    error.isError && error.type === "password" ||
                    error.isError && error.type === "passwordValid" ||
                    error.isError && error.type === "passwordLength"?
                    <div className="error-pass">
                        <p>* {error.message}</p>
                    </div>: null
                }
                <div className="change-pass">
                    <div className="pass-name">
                        <p>Confirm New Password:</p>
                    </div>
                    <div className="pass-inp">
                        <input 
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        type="text" 
                        />
                    </div>
                </div>
                {
                    error.isError && error.type === "confirmPassword" ||
                    error.isError && error.type === "passwordCheck" ||
                    error.isError && error.type === "server" 
                    ?
                    <div className="error-pass">
                        <p>* {error.message}</p>
                    </div>: null
                }
                <div className="change-pass">
                    <div className="pass-name">
                        {/* <p>Confirm New Password:</p> */}
                    </div>
                    <div className="pass-inp">
                        <button onClick={handleSubmit}>
                            {
                                loading ? <BeatLoader color='white' /> : "Submit"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
            }
            
        </div>
    )
}

export default ChangePassword