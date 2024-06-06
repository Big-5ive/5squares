import './myProfile.css'
import { IoIosArrowBack } from "react-icons/io";
import { RiQrCodeLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const MyOwnProfile = () => {
    const navigate = useNavigate()
    return(
        <div className="myown-profile-parent">
            <div className="myown-profile-head">
                <div className="myown-head-hold">
                    <IoIosArrowBack fontSize={"40px"} onClick={()=>navigate("/profile")} />
                    <p>My profile</p>
                </div>
            </div>
            <div className="myown-profile-main-head">
                <div className="myown-profile-pic"></div>
                <div className="myown-profile-name">
                    <h1>Ekele Jeremiah</h1>
                    <p>Young Collections</p>
                </div>
                <div className="qr-code">
                    <RiQrCodeLine />
                </div>
            </div>
            <div className="myown-account-information">
                <p>Account information</p>
            </div>
            <div className="myown-info">
                <div className="myown-full-name">
                    <p>Full name</p>
                    <h1>Ekele Jeremiah</h1>
                </div>
                <p>Edit</p>
            </div>
            <div className="myown-info">
                <div className="myown-full-name">
                    <p>Registered email</p>
                    <h1>off***@gmail.com</h1>
                </div>
                <p>Edit</p>
            </div>
            <div className="myown-info">
                <div className="myown-full-name">
                    <p>Mobile number</p>
                    <h1>incomplete</h1>
                </div>
                <p>Edit</p>
            </div>
            <div className="myown-account-information">
                <p>Bussiness information</p>
            </div>
            <div className="myown-info2">
                <div className="myown-full-name">
                    <p>Bussiness type</p>
                    <h1>Wholesaler</h1>
                </div>
                {/* <p>Edit</p> */}
            </div>
            <div className="myown-info2">
                <div className="myown-full-name">
                    <p>Bussiness name</p>
                    <h1>Young collections</h1>
                </div>
                {/* <p>Edit</p> */}
            </div>
            <div className="myown-info2">
                <div className="myown-full-name">
                    <p>Bussiness address</p>
                    <h1>Lekki Ajah Lagos</h1>
                </div>
                <p>Edit</p>
            </div>
            <div className="myown-info2">
                <div className="myown-full-name">
                    <p>Job title</p>
                    <h1>Manager</h1>
                </div>
                {/* <p>Edit</p> */}
            </div>
            <div className="myown-info2">
                <div className="myown-full-name">
                    <p>company website</p>
                    <h1>Manager</h1>
                </div>
                {/* <p>Edit</p> */}
            </div>
            <div className="myown-info2">
                <div className="myown-full-name">
                    <p>Bussiness card</p>
                    <h1>incomplete</h1>
                </div>
                {/* <p>Edit</p> */}
            </div>
            <div className="myown-account-information">
                <p>Sourcing Prefrences</p>
            </div>
            <div className="myown-info">
                <div className="myown-full-name">
                    <p>Purchasing frequency</p>
                    <h1>incomplete</h1>
                </div>
                <p>Edit</p>
            </div>
            <div className="myown-info">
                <div className="myown-full-name">
                    <p>Product prefrence</p>
                    <h1>incomplete</h1>
                </div>
                <p>Edit</p>
            </div>
            <div className="myown-info">
                <div className="myown-full-name">
                    <p>Anual purchasing amount</p>
                    <h1>incomplete</h1>
                </div>
                <p>Edit</p>
            </div>
        </div>
    )
}

export default MyOwnProfile