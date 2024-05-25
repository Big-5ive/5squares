import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginErrorMssg from "../MobileView/LoginErrorMssg";
import { Link } from "react-router-dom";

const LoginCard = () => {
  const [showNumber, setShowNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const urlEmail = "https://fivesquare-api.onrender.com/api/loginE";
  const urlPhone = "https://fivesquare-api.onrender.com/api/loginP";

  const handleShowMobileNumber = () => {
    setShowEmail(false);
    setShowNumber(true);
  };

  const handleShowEmail = () => {
    setShowEmail(true);
    setShowNumber(false);
  };

  const validateForm = () => {
    if (showEmail && !email) {
      setError("Email is required");
      return false;
    }
    if (showNumber && !phoneNumber) {
      setError("Phone number is required");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = showEmail
      ? { email, password }
      : { phoneNumber, password };
    const url = showEmail ? urlEmail : urlPhone;
    
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful login (e.g., save token, redirect)
        console.log(result);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[45%] h-max bg-white shadow-custom flex justify-center py-10 ">
      <div className="w-[90%] flex flex-col  ">
        <form onSubmit={handleSubmit} className="w space-y-4">
          <div className="relative">
            {error && <LoginErrorMssg message={error} />}
            <label className="w-full flex justify-between items-end ">
              {showEmail ? (
                <span className="font-medium text-[#222222] text-sm ">
                  Account:
                </span>
              ) : (
                <span className="font-medium text-[#222222] text-sm ">
                  Mobile Phone Number:
                </span>
              )}
              <img src="/images/QR.png" alt="" srcSet="" />{" "}
            </label>
            {showEmail ? (
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full h-6 border-gray-300 border-[1px] text-sm px-2 outline-none "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <div className="w-full h-6 border-gray-300 border-[1px] flex">
                <select
                  name="countryCode"
                  id=""
                  className="flex outline-none border-none bg-transparent text-sm"
                >
                  <option value="+234">+234 Nigeria</option>
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  maxLength={11}
                  className="outline-none bg-transparent border-none flex-1"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="w-full space-y-1">
            <div>
              <label className="w-full flex justify-between items-end ">
                <span className="font-medium text-[#222222] text-sm">
                  Password:
                </span>
                <Link
                  to="/forget-pass"
                  className="text-[#1c31e2] text-sm font-medium cursor-pointer "
                >
                  Forgot Password?
                </Link>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-6 border-gray-300 border-[1px] text-sm px-2 outline-none "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-x-2">
              <input
                type="checkbox"
                name="Stayed signed in"
                id="Stayed signed in"
                value="Stayed signed in"
                className="text-black"
                defaultChecked
              />
              <label
                htmlFor="Stayed signed in"
                className="font-medium text-[#222222] text-sm"
              >
                Stayed signed in
              </label>{" "}
            </div>
          </div>
          <div className="w-full space-y-1">
            <button
              type="submit"
              className={`w-full h-8 rounded font-bold text-white ${
                loading ? "bg-[#ff6b08cf]" : "bg-[#ff6b08] hover:bg-[#ff6b08cf]"
              }`}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <label className="w-full flex justify-between items-end ">
              {showEmail ? (
                <p
                  className="text-[#1c31e2] text-sm font-medium cursor-pointer"
                  onClick={handleShowMobileNumber}
                >
                  Mobile number sign in
                </p>
              ) : (
                <p
                  className="text-[#1c31e2] text-sm font-medium cursor-pointer"
                  onClick={handleShowEmail}
                >
                  Email sign in
                </p>
              )}
              <Link
                to="/register"
                className="text-[#1c31e2] text-sm font-medium cursor-pointer "
              >
                Create account
              </Link>
            </label>
          </div>
        </form>
        <hr className="w my-4" />
        <div className="flex space-x-4 items-center">
          <p>Sign in with:</p>
          <div className="flex space-x-4">
            <div className="rounded w-10 h-10  flex-center facebook">
              <FaFacebookF style={{ color: "white", fontSize: "20px" }} />
            </div>
            <div className="w-10 h-10 rounded flex-center google">
              <FcGoogle style={{ fontSize: "20px" }} />
            </div>
            <div className="w-10 h-10 rounded flex-center linkedin">
              <FaLinkedinIn style={{ color: "white", fontSize: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;











// import React, { useState } from "react";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import LoginErrorMssg from "../MobileView/LoginErrorMssg";
// import { Link } from "react-router-dom";

// const LoginCard = () => {
//   const [showNumber, setShowNumber] = useState(false);
//   const [showEmail, setShowEmail] = useState(true);
//   const url = "https://fivesquare-api.onrender.com/api/loginE";
//   const handleShowMobileNumber = () => {
//     setShowEmail(false);
//     setShowNumber(true);
//   };
//   const handleShowEmail = () => {
//     setShowEmail(true);
//     setShowNumber(false);
//   };
//   return (
//     <div className="w-[45%] h-max bg-white shadow-custom flex justify-center py-10 ">
//       <div className="w-[90%] flex flex-col  ">
//         <form action="" method="post" className="w space-y-4">
//           <div className="relative">
//             <LoginErrorMssg message={"Warning"} />
//             <label className="w-full flex justify-between items-end ">
//              {showEmail?  <span className="font-medium text-[#222222] text-sm ">
//                 Account:
//               </span>: <span className="font-medium text-[#222222] text-sm ">
//                 Mobile Phone Number:
//               </span>}
//               <img src="/images/QR.png" alt="" srcset="" />{" "}
//             </label>
//             {showEmail && (
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="w-full h-6 border-gray-300 border-[1px] text-sm px-2 outline-none "
//               />
//             )}
//             {showNumber && (
//               <div className="w-full h-6 border-gray-300 border-[1px] flex">
//                 <select
//                   name=""
//                   id=""
//                   className="flex outline-none border-none bg-transparent text-sm"
//                 >
//                   <option value="+234 Nigeria">+234 Nigeria</option>
//                 </select>
//                 <input
//                   type="number"
//                   name="number"
//                   maxLength={11}
//                   className="outline-none bg-transparent border-none"
//                 />
//               </div>
//             )}
//           </div>
//           <div className="w-full space-y-1">
//             <div>
//               <label className="w-full flex justify-between items-end ">
//                 <span className="font-medium text-[#222222] text-sm">
//                   Password:
//                 </span>
//                 <Link
//                   to="/forget-pass"
//                   className="text-[#1c31e2] text-sm font-medium cursor-pointer "
//                 >
//                   Forgot Password?
//                 </Link>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="w-full h-6 border-gray-300 border-[1px] text-sm px-2 outline-none "
//               />
//             </div>
//             <div className="space-x-2">
//               <input
//                 type="checkbox"
//                 name="Stayed signed in"
//                 id="Stayed signed in"
//                 value="Stayed signed in"
//                 className="text-black"
//                 checked
//               />
//               <label
//                 for="Stayed signed in"
//                 className="font-medium text-[#222222] text-sm"
//               >
//                 Stayed signed in
//               </label>{" "}
//             </div>
//           </div>
//           <div className="w-full space-y-1">
//             <button className="w-full h-8 bg-[#ff6b08] hover:bg-[#ff6b08cf] rounded font-bold text-white ">
//               Sign In
//             </button>
//             <label className="w-full flex justify-between items-end ">
//               {showEmail ? (
//                 <p
//                   className="text-[#1c31e2] text-sm font-medium cursor-pointer"
//                   onClick={handleShowMobileNumber}
//                 >
//                   Mobile number sign in
//                 </p>
//               ) : (
//                 <p
//                   className="text-[#1c31e2] text-sm font-medium cursor-pointer"
//                   onClick={handleShowEmail}
//                 >
//                   Email sign in
//                 </p>
//               )}
//               <Link
//                 to="/register"
//                 className="text-[#1c31e2] text-sm font-medium cursor-pointer "
//               >
//                 Create account
//               </Link>
//             </label>
//           </div>
//         </form>
//         <hr className="w my-4" />
//         <div className="flex space-x-4 items-center">
//           <p>Sign in with:</p>
//           <div className="flex space-x-4">
//             <div className="rounded w-10 h-10  flex-center facebook">
//               <FaFacebookF style={{ color: "white", fontSize: "20px" }} />
//             </div>
//             <div className="w-10 h-10 rounded flex-center google">
//               <FcGoogle style={{ fontSize: "20px" }} />
//             </div>
//             <div className="w-10 h-10 rounded flex-center linkedin">
//               <FaLinkedinIn style={{ color: "white", fontSize: "20px" }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginCard;
