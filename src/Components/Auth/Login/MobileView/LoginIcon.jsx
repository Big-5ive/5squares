import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiTwitterAlt } from "react-icons/tfi";

const LoginIcon = () => {
  return (
    <div className='IconContainer'>
        <div className="circle iconHolder flex-center facebook"><FaFacebookF style={{color:"white",fontSize:"20px"}} /></div>
        <div className="circle iconHolder flex-center google"><FcGoogle style={{fontSize:"20px"}} /></div>
        <div className="circle iconHolder flex-center linkedin"><FaLinkedinIn style={{color:"white",fontSize:"20px"}} /></div>
        <div className="circle iconHolder flex-center twitter"><TfiTwitterAlt style={{color:"white",fontSize:"20px"}} /></div>
    </div>
  )
}

export default LoginIcon