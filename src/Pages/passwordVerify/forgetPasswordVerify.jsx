import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
// import { BeatLoader } from "react-spinners";
import Identify from "../../Components/Auth/identityVerification/identityVerify";
import { useSelector } from "react-redux";

const PasswordVerify = () => {
    const [value, setValue] = useState()
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [inputError, setInputError] = useState(false)
    const [inputErrorMessage, setInputErrorMessage] = useState("")

    const navigate = useNavigate()
    const profile = useSelector((e) => e.persistedReducer.userProfile)
    console.log(profile)

    const handleSendOTP = () => {
        setLoading(true)
        setInputErrorMessage("")
        if (!value){
            setLoading(false)
            setInputError(true)
            setInputErrorMessage("you can't leave this field empty")
        }else{
            // const userId = JSON.parse(localStorage.getItem("userData"))
            const url = import.meta.env.VITE_OTP_VERIFY_API;
            const url2 = `${url}/${profile?.id}`
            const dataObject = {
                userInput: value
            }
            axios.post(url2, dataObject)
            .then(Response => {
            console.log(Response)
            setLoading(false)
            setInputErrorMessage("")
            navigate("/changepass")
            })
            .catch(virus => {
            setLoading(false)
            console.log(virus)
            setInputError(true)
            setInputErrorMessage(virus.response.data.message)
            })
        }
    }

    const handleResendOTP = () => {
        setLoading2(true)
             const url = import.meta.env.VITE_RESEND_OTP_API;
            const url2 = `${url}/${profile?.id}`
            axios.post(url2)
            .then(Response => {
            console.log(Response)
            setLoading2(false)
            setInputErrorMessage("")
            })
            .catch(virus => {
            setLoading2(false)
            console.log(virus)
            setInputError(true)
            setInputErrorMessage(virus.response.data)
            })
    }

    return(
        <Identify 
        value={value}
        onchange={(e)=>setValue(e.target.value)}
        type={"forgetPassword"}
        write={"A One Time Password has been sent to your email , please follow these steps"}
        loading={loading}
        resendLoading={loading2}
        inputError={inputError}
        inputErrorMessage={inputErrorMessage}
        resend={"resend code"}
        resendCode={handleResendOTP}
        placeholder={"code"}
        handleSend={handleSendOTP}
        maskedemail={profile?.maskedemail}
        />
    )
}

export default PasswordVerify