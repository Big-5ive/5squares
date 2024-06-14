import { useState } from "react"
import Identify from "../../Components/Auth/identityVerification/identityVerify"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"

const VerifyOtp = () => {
    const [otp, setOtp] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    const profile = useSelector((e) => e.persistedReducer.userProfile)

    const handleInputChange =(e)=>{
        setOtp(e.target.value)
    }

    const handleSendOTP = () =>{
        setLoading(true)
        if (!otp) {
            setError(true)
            setLoading(false)
            setErrorMessage("pls input the code")
        } else{
            const dataObject = {
             userInput: otp
            }
            const url = import.meta.env.VITE_OTP_VERIFY_API;
            const url2 = `${url}/${profile?.id}`
            axios.post(url2, dataObject)
          .then(Response => {
            console.log(Response)
            setLoading(false)
            setErrorMessage("")
            navigate("/")
          })
          .catch(virus => {
            setLoading(false)
            console.log(virus)
            setError(true)
            setErrorMessage(virus.response.data.message)
          })
        }
    }
    const handleResendOTP = () =>{
        setLoading2(true)
            setError(false)
            const url = import.meta.env.VITE_RESEND_OTP_API
            const url2 = `${url}/${profile?.id}`
            axios.post(url2)
          .then(Response => {
            console.log(Response)
            setLoading2(false)
          })
          .catch(virus => {
            console.log(virus)
            setError(true)
            setErrorMessage(virus.response.data)
            setLoading2(false)
          })
    }

    return(
        <>
            <Identify
             value={otp}
             onchange={handleInputChange}
             placeholder={"otp"}
             loading={loading}
             handleSend={handleSendOTP}
             write={"a One Time Password has been sent to your email enter the code here"}
             resend={"resend otp"}
             resendMobile={"resend otp"}
             resendCode={handleResendOTP}
             inputError={error}
             inputErrorMessage={errorMessage}
             resendLoading={loading2}
             maskedemail={profile?.maskedEmail}
             />
        </>
    )
}

export default VerifyOtp