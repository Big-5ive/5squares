import './identityverify.css'
import { PiWarningCircleFill } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import IdentityverifyMobile from './identifymobile/identifyMobile';

const Identify = () => {
    const navigate = useNavigate()
    return(
        <div className="identity-parent">
            <div className="identify-head">
                <h1>identity verification</h1>
            </div>
            <div className="identify-step">
                <div className="steps">
                    <div className="shapes">
                        <div className='one'><p>1</p></div>
                        <div className='line1'></div>
                        <div className='two'><p>2</p></div>
                        <div className='line1'></div>
                        <div className='two'><GiCheckMark /></div>
                    </div>
                    <div className="step-write">
                        <p style={{color: "orangered"}}>verify identity</p>
                        <p>retrieve password</p>
                        <p>finished</p>
                    </div>
                </div>
            </div>
            <div className="identity-body">
                <div className="identify-warn">
                    <PiWarningCircleFill color='#68b5e2'/>
                    <p> You are currently using Email Verification , please follow these steps</p>
                </div>
                <div className="identity-input-hold">
                    <div className="verify-email-hold">
                        <p>Email adress: </p>
                        <select name="select" id="select">
                            <option value="jer***@gmail.com">jer***@gmail.com</option>
                        </select>
                    </div>
                    <div className="verification-code">
                        <p>verification code:</p>
                        <div className="code-itself">
                            <input
                                className='code-num'
                                placeholder='6 digits'
                                type="text"
                            />
                             <button
                             className='receive-code'
                             >
                                Click here to receive verification code
                            </button>
                        </div>
                    </div>
                    <div className="verification-codeerror">
                        <p style={{width: "19%"}}></p>
                        <div className="code-itself">
                             <div className="error-code">
                                <ImCancelCircle />
                                <p>Please input the code</p>
                             </div>
                        </div>
                    </div>
                    <div className="verification-code">
                        <p style={{width: "18%"}}></p>
                        <div className="code-itself">
                             <button
                             onClick={()=>navigate("/changepass")}
                             className='submit-code'
                             >
                                submit
                            </button>
                            <p></p>
                        </div>
                    </div>
                    <div className="code-notice">
                        <div className="code-notice-write">
                            <h1>Did not receive email verification code?</h1>
                            <p>
                                1.Your email code may take up to 10 minutes to arrive (depending on your email service provider), please do not repeat clicking.
                            </p>
                            <p>
                                2. Please check if your mailbox works or if it goes to trash/spam folder or your mail inbox is full.
                            </p>
                            <p>
                                3. Network anomalies may cause loss of messages, please re-submit request or try again later with different browsers or with browser cookies cleared.
                            </p>
                            <p>
                                4.Check with your email operator to see if verification code email has been blocked
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="identify-mobile">
                <IdentityverifyMobile />
            </div>
        </div>
    )
}

export default Identify