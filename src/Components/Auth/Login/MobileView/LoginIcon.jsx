import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiTwitterAlt } from "react-icons/tfi";

const LoginIcon = () => {
  return (
    <div className="IconContainer my-9">
      <a href="">
        <div className="circle iconHolder flex-center facebook">
          <FaFacebookF style={{ color: "white", fontSize: "20px" }} />
        </div>
      </a>
      <a href="https://fivesquare-api.onrender.com/googlelogin">
      <div className="circle iconHolder flex-center google">
        <FcGoogle style={{ fontSize: "20px" }} />
      </div>
      </a>
     <a href="https://fivesquare-api.onrender.com/linkedinlogin">
     <div className="circle iconHolder flex-center linkedin">
        <FaLinkedinIn style={{ color: "white", fontSize: "20px" }} />
      </div>
     </a>
     <a href="https://fivesquare-api.onrender.com/twitterlogin">
     <div className="circle iconHolder flex-center twitter">
        <TfiTwitterAlt style={{ color: "white", fontSize: "20px" }} />
      </div>
     </a>
    </div>
  );
};

export default LoginIcon;
