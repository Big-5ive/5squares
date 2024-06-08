import { useNavigate } from 'react-router-dom';
import './settingsmobile.css'
import { IoIosArrowBack } from "react-icons/io";

const MobileSettings = () => {
    const navigate = useNavigate()
    return(
        <div className="mobile-settings-parent">
            <div className="mobile-setting-head">
                <IoIosArrowBack onClick={()=> navigate("/profile")} fontSize={"27px"} />
                <p>Settings</p>
            </div>
            <div className="settings-content">
                <p>Deliver to</p>
                <p>Lagos</p>
            </div>
            <div className="settings-content">
                <p>Currency</p>
                <p>Naira</p>
            </div>
            <div className="settings-content">
                <p>Change password</p>
                {/* <p>Naira</p> */}
            </div>
            <div className="settings-content">
                <p>Delete account</p>
                {/* <p>Naira</p> */}
            </div>
            <div className="settings-content">
                <p>Privacy policy</p>
                {/* <p>Naira</p> */}
            </div>
            <div className="settings-content">
                <button>sign out</button>
            </div>
        </div>
    )
}

export default MobileSettings