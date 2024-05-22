import { useNavigate } from 'react-router-dom'
import './identifymobile.css'

const IdentityverifyMobile = () => {
    const navigate = useNavigate()
    return(
        <div className="identify-mobile">
            <div className="identify-mobile-head">
                <div className="identify-mobile-head-wrap">
                    <p>We have alresdy sent a verification code to your email:</p>
                    <p>jer***#@gmail.com</p>
                </div>
            </div>
            <div className="identify-mobile-input">
                <div className="identify-mobile-input-hold">
                    <div className="identify-mobile-input-input">
                        <input type="text" placeholder='code' />
                        <button>Get code</button>
                    </div>
                    <div className="identify-mobile-input-button">
                        <button onClick={()=> navigate("/changepass")}>Next</button>
                    </div>
                </div>
            </div>
            <div className="identify-mobile-notice">
                <div className="identify-mobile-notice-hold">
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
    )
}

export default IdentityverifyMobile