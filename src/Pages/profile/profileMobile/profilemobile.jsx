import './profilemobile.css'
import { TbSettings2 } from "react-icons/tb";
import { PiUserLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { TbMessageQuestion } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import { CiViewTimeline } from "react-icons/ci";
import { LiaBlackTie } from "react-icons/lia";

const MobileProfile = () => {
    const navigate = useNavigate()
    return(
        <div className="profile-mobile-parent">
            <div className="profile-mobile-head">
                <div className="mobile-settings-hold">
                    <p>Lagos</p>
                    <TbSettings2 onClick={()=> navigate("/settings-mobile")}/>
                </div>
            </div>
            <div className="mobile-profile-owner-hold" onClick={()=> navigate("/ownprofile")}>
                <div className="profile-mobile-pic-hold">
                    <PiUserLight />
                </div>
                <div className="profile-mobile-name-hold">
                    <div className="mobile-owner-name">
                        <p>Ekele Jeremiah</p>
                    </div>
                    <div className="mobile-owner-edit">
                        <p>profile 50% complete <span>Edit</span></p>
                    </div>
                </div>
            </div>
            <div className="profile-mobile-body">
                <div className="my-order-hold">
                    <p>My orders</p>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className="essentials">
                <div className="essential-items">
                    <h1>Essentials</h1>
                </div>
                <div className="essential-items">
                    <FiHeart fontSize={"27px"}/>
                    <p>My favourite</p>
                </div>
                <div className="essential-items">
                    <CiViewTimeline fontSize={"27px"}/>
                    <p>Viewed</p>
                </div>
                <div className="essential-items">
                    <CiFaceSmile fontSize={"27px"}/>
                    <p>Sourcing preferences</p>
                </div>
                <div className="essential-items">
                    <SlLocationPin fontWeight={"bold"} fontSize={"27px"}/>
                    <p>Shiping adress</p>
                </div>
                <div className="essential-items">
                    <VscGitPullRequestGoToChanges fontSize={"27px"}/>
                    <p>Request for Quotation</p>
                </div>
                <div className="essential-items">
                    <TbMessageQuestion fontSize={"27px"}/>
                    <p>Inquiries</p>
                </div>
            </div>
            <div className='essentials'>
                <div className="essential-items">
                    <h1>Services</h1>
                </div>
                <div className="essential-items">
                    <BsQuestionCircle fontSize={"27px"}/>
                    <p>Help center</p>
                </div>
                <div className="essential-items">
                    <LiaBlackTie fontSize={"27px"}/>
                    <p>Start selling on 5squares</p>
                </div>
            </div>
        </div>
    )
}

export default MobileProfile