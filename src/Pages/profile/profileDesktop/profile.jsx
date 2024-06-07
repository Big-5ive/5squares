import "./profile.css"
import { PiUserLight } from "react-icons/pi";
import MobileProfile from "../profileMobile/profilemobile";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    const navigate = useNavigate()
    return(
        <div className="profile-parent">
            <div className="profile-head"></div>
            <div className="profile-body-hold">
                <div className="profile-body">
                    <div className="profile-body-head">
                        <div className="photo-upload">
                            <div className="photo-hold">
                                <PiUserLight />
                            </div>
                            <p>upload photo</p>
                        </div>
                        <div className="other-profile">
                            <div className="role1">
                                <p>Email:</p>
                                <p>Linked Mobile:</p>
                            </div>
                            <div className="role1">
                                <p>off***@gmail.com</p>
                                <p >Enter Mobile Number</p>
                            </div>
                            <div className="role1">
                                <p>Change email address</p>
                                <p>Change Mobile Number</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-body-content-hold">
                        <div className="profile-body-content">
                            <div className="profile-info">
                                <div className="personal-info">
                                    <p>Personal Information</p>
                                </div>
                                <div className="personal-info-content">
                                    <p onClick={()=>navigate("/ownprofile")}>My profile</p>
                                    <p>Upload my photo</p>
                                    <p>Privacy settings</p>
                                    <p>Email prefrences</p>
                                </div>
                            </div>
                            <div className="profile-info">
                                <div className="personal-info">
                                    <p>Account security</p>
                                </div>
                                <div className="personal-info-content">
                                    <p>Change email address</p>
                                    <p>Change Password</p>
                                    <p>Set security question</p>
                                    <p>Manage my connected account</p>
                                </div>
                            </div>
                            <div className="profile-info">
                                <div className="personal-info">
                                    <p>Finance account</p>
                                </div>
                                <div className="personal-info-content">
                                    <p>My transactionss</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="itMobileHold">
                <MobileProfile />
            </div>
            <div className="small-footer"></div>
        </div>
    )
}

export default MyProfile