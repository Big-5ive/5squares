import { useState } from 'react';
import './resetpassword.css'
import { GiCheckMark } from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const navigate = useNavigate()
    const [sucess, setSuccess] = useState(false)
    return(
        <div className="change-password-parent">
            <div className="change-password-head">
                <p>Password Reset</p>
            </div>
            <div className="identify-step">
                <div className="steps">
                    <div className="shapes">
                        <div className='one'><p>1</p></div>
                        <div className='line1 line1x'></div>
                        <div className='two twox'><p>2</p></div>
                        <div className='line1'></div>
                        <div className={`two ${sucess? "done" : null}`}><GiCheckMark /></div>
                    </div>
                    <div className="step-write">
                        <p style={{color: "orangered"}}>verify</p>
                        <p style={{color: "orangered"}}>Reset Password</p>
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
                        <input type="text" />
                    </div>
                </div>
                <div className="error-pass">
                    <p>* new password must be more than 6 characters</p>
                </div>
                <div className="change-pass">
                    <div className="pass-name">
                        <p>Confirm New Password:</p>
                    </div>
                    <div className="pass-inp">
                        <input type="text" />
                    </div>
                </div>
                <div className="error-pass">
                <p>* confirm password must be same with new password</p>
                </div>
                <div className="change-pass">
                    <div className="pass-name">
                        {/* <p>Confirm New Password:</p> */}
                    </div>
                    <div className="pass-inp">
                        <button onClick={()=> setSuccess(true)}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
            }
            
        </div>
    )
}

export default ChangePassword