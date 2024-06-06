import './myprofileDesktop.css'
import { BiEdit } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import MyOwnProfile from '../../profileMobile/myProfile/myProfile';

const MyProfileDesktopVersion = () =>{
    return(
        <div className="profile-desktop-parent">
            <div className="myprofile-desktop-head"></div>
            <div className="myprofile-desktop-body-hold">
                <div className="myprofile-desktop-body-hold-pic"></div>
                <div className="myprofile-desktop-body-cont">
                    <div className="myprofile-desktop-body-cont1">
                        <div className="myprofile-desktop-pic-hold">
                            <div className="myprofile-desktop-pic"></div>
                        </div>
                        <div className="myprofile-desktop-own-detail">
                            <h1>Ekele Jeremiah</h1>
                            <p>Lagos</p>
                            <p>at <span id='myprofile-comp'>Young collections</span></p>
                            <p>Email <span>officiallyyoung01@gmail.com: <span id='verify-profile-desk'>[verified]</span></span></p>
                        </div>
                        <div className="myprofile-desktop-yearjoin">
                            <div className="myprofile-desktop-yearjoin-hold">
                                <p>Joined 5square.com in <span>2024</span></p>
                                <p>Main products are</p>
                            </div>
                        </div>
                        <div className="myprofile-desktop-edit-hold">
                            <div className="myprofile-desktop-edit">
                                <BiEdit className='x3x'/> 
                                <p className='x3x'>Edit</p>
                            </div>
                        </div>
                    </div>
                    <div className="myprofile-desktop-body-cont2">
                        <div className="profile-desktop-contact">
                            <p>Contact Information</p>
                            <div className="myprofile-desktop-edit2">
                                <BiEdit className='x3x'/> 
                                <p className='x3x'>Edit</p>
                            </div>
                        </div>

                        <div className="myprofile-desktop-item">
                            <div className="item1"><p>Email :</p></div>
                            <div className="item2">
                                <p>officiallyyoung01@gmail.com<span id='verify-profile-desk'>[verified]</span></p>
                            </div>
                            <div className="item3">
                                <p>Fax :</p>
                            </div>
                            <div className="item4">
                                <p>none</p>
                            </div>
                        </div>
                        <div className="myprofile-desktop-item-others">
                            <div className="item1"><p>Alternative Email :</p></div>
                            <div className="item2">
                                <p>none</p>
                            </div>
                            <div className="item3">
                                <p>Telephone :</p>
                            </div>
                            <div className="item4">
                                <p>none</p>
                            </div>
                        </div>
                        <div className="myprofile-desktop-item-others">
                            <div className="item1"><p>Social Links :</p></div>
                            <div className="item2">
                                <p>none</p>
                            </div>
                            <div className="item3">
                                <p>Mobile :</p>
                            </div>
                            <div className="item4">
                                <p>none</p>
                            </div>
                        </div>
                    </div>
                    <div className="myprofile-desktop-body-cont1x">
                        <div className="profile-desktop-contact">
                            <p>Company Informations</p>
                            <div className="myprofile-desktop-edit2">
                                <BiEdit className='x3x'/> 
                                <p className='x3x'>Edit</p>
                            </div>
                        </div>
                        <div className="myprofile-desktop-item">
                            <div className="item1"><p>Company Name :</p></div>
                            <div className="item2">
                                <p>Young Collections<span id='verify-profile-desk'>[verified]</span></p>
                            </div>
                            <div className="item3">
                                <p>Year Established :</p>
                            </div>
                            <div className="item4">
                                <p>none</p>
                            </div>
                        </div>
                        <div className="myprofile-desktop-item-others">
                            <div className="item1"><p>Main Products :</p></div>
                            <div className="item2">
                                <p>none</p>
                            </div>
                            <div className="item3">
                                <p>Registered Adress :</p>
                            </div>
                            <div className="item4">
                                <p>none</p>
                            </div>
                        </div>
                        <div className="myprofile-desktop-item-others">
                            <div className="item1"><p>Bussiness Type :</p></div>
                            <div className="item2">
                                <p>Distributor/Wholesaler</p>
                            </div>
                            <div className="item3">
                                <p>Operational Adress :</p>
                            </div>
                            <div className="item4">
                                <p>Lekki Lagos Nigeria</p>
                            </div>
                        </div>
                    </div>
                    <div className="myprofile-desktop-body-cont2">
                        <div className="profile-desktop-contact">
                            <p>Sourcing Informations</p>
                            <div className="myprofile-desktop-edit2">
                                <BiEdit className='x3x'/> 
                                <p className='x3x'>Edit</p>
                            </div>
                        </div>
                        <div className="myprofile-desktop-item">
                            <div className="item1"><p>Annual Purchasing Volume :</p></div>
                            <div className="item2">
                                <p>Bellow </p> <div style={{display: "flex", alignItems: "center", paddingLeft:"10px"}}><TbCurrencyNaira /><p>1,000,000</p></div>
                            </div>
                            <div className="item3">
                                <p>Prefered Industries :</p>
                            </div>
                            <div className="item4">
                                <p>none</p>
                            </div>
                        </div>
                        <div className="myprofile-desktop-item">
                            <div className="item1"><p>Primary sourcing purpose :</p></div>
                            <div className="item2">
                                <p>none</p>
                            </div>
                            <div className="item3">
                                <p>Sourcing frequency :</p>
                            </div>
                            <div className="item4">
                                <p>none</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="myprofile-mobile-own">
                <MyOwnProfile />
            </div>
            <div className="myprofile-desktop-footer"></div>
        </div>
    )
}

export default MyProfileDesktopVersion