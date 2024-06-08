import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { PiCaretLeftThin, PiCaretDownThin, PiPlusThin } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Feedback = () => {
  const [selectedOption, setSelectedOption] = useState("Account");
  const [selectedOption1, setSelectedOption1] = useState("Select a reason");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [email, setEmail] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = [
    "Account",
    "Finding products/suppliers",
    "Messenger",
    "Order",
    "Checkout",
    "Return & Refund",
    "Others",
  ];

  const options1 = [
    "Verification code expired",
    "Did not receive verification",
    "Number of SMS verification codes sent has exceeded the daily limit",
    "Unable to change email address",
    "Password retrieval failed",
    "Account registration failed",
    "Unable to login to the current account",
    "Others",
  ];

  const handleAccount = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownOpen1(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
    setDropdownOpen1(false);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, imgIndex) => imgIndex !== index));
  };

  const validateForm = () => {
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    if (selectedOption === "Account") {
      toast.error("Please select an account option");
      return false;
    }
    if (selectedOption1 === "Select a reason") {
      toast.error("Please select a reason");
      return false;
    }
    if (images.length === 0) {
      toast.error("Please upload at least one image");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("Account", selectedOption);
    formData.append("selectAreason", selectedOption1);
    formData.append("writeMore", additionalInfo);
    formData.append("email", email);
    images.forEach((image, index) => {
      formData.append("image", image);
    });

    try {
      const response = await axios.post('https://fivesquare-api.onrender.com/api/bugform', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        toast.success("Message sent successfully");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Error sending message");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full h-auto">
      <ToastContainer />
      <div className="flex flex-col items-center w-full h-auto">
        <div className="flex items-center justify-between w-[93%] h-auto py-3 sticky top-0 left-0 right-0 z-20 bg-white">
          <PiCaretLeftThin className="text-2xl" />
          <p className="text-xl font-bold text-[#333]">Bug/Suggestion</p>
          <div className="">{""}</div>
        </div>
        <div className="flex flex-col items-center w-full h-auto py-4 bg-[#f7f7f7]">
          <div className="flex flex-col w-[93%] space-y-2">
            <h1 className="text-xl text-[#333]">How can we do better?</h1>
            <p className="text-[#333] text-[1.001rem]">
              Our developers are working hard to improve the app experience!
              Please quickly tell us here a{" "}
              <span className="font-bold text-[#5a5a5a]">
                bug/app suggestion.
              </span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full mt-4"
          >
            <label className="w-[93%] my-2 text-lg font-bold text-[#333]">
              Please let us know about the issue
            </label>
            <div className="relative w-[93%]">
              <div
                className="flex items-center justify-between w-full h-10 px-4 py-2 bg-white cursor-pointer"
                onClick={handleAccount}
              >
                <span className="text-sm">{selectedOption}</span>
                <PiCaretDownThin className="text-sm" />
              </div>
              {dropdownOpen && (
                <div className="absolute left-0 right-0 z-10 -mt-1 bg-white ">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative w-[93%] mt-4">
              <div
                className="flex items-center justify-between w-full h-10 px-4 py-2 bg-white cursor-pointer"
                onClick={() => setDropdownOpen1(!dropdownOpen1)}
              >
                <span className="text-sm">{selectedOption1}</span>
                <PiCaretDownThin className="text-sm" />
              </div>
              {dropdownOpen1 && (
                <div className="absolute left-0 right-0 z-10 -mt-1 bg-white">
                  {options1.map((option1, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOptionClick1(option1)}
                    >
                      {option1}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative w-[93%] mt-4 h-36">
              <textarea
                className="w-full h-full p-2 border border-gray-300 rounded-md resize-none text-sm outline-none border-none"
                maxLength="120"
                placeholder="Write a bit more to help us understand the issue. (Optional)"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
              <div className="absolute bottom-0 right-0 text-xs text-gray-500 p-2">
                {additionalInfo.length}/120
              </div>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-[93%] mt-4 h-10 px-4 py-2 border border-gray-300 rounded-md text-sm outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="w-[93%] text-sm text-[#999] my-1">
              It will only be used to follow up on the report
            </p>
            <div className="flex w-[93%] flex-wrap gap-2 mt-4">
              {images.map((image, index) => (
                <div key={index} className="w-14 h-14 relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Uploaded ${index}`}
                    className="w-full h-full object-cover border-dashed border-2 border-gray-400"
                  />
                  <div
                    className="w-4 h-4 flex-center border-2 border-white absolute top-[-5px] right-[-4px] text-lg font-bold text-white bg-[#434343] rounded-full cursor-pointer"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <MdClose />
                  </div>
                </div>
              ))}
              <label
                htmlFor="file-upload"
                className="w-14 h-14 border-dashed border-2 border-gray-400 flex items-center justify-center cursor-pointer"
              >
                <PiPlusThin className="text-[#222] text-xl font-bold " />
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <button className="w-[93%] h-10 rounded-full text-white bg-[#f0be9c] mt-10" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;




// import React, { useState } from "react";
// import { MdClose } from "react-icons/md";
// import { PiCaretLeftThin } from "react-icons/pi";
// import { PiCaretDownThin } from "react-icons/pi";
// import { PiPlusThin, PiXThin } from "react-icons/pi";

// const Feedback = () => {
//   const [selectedOption, setSelectedOption] = useState("Account");
//   const [selectedOption1, setSelectedOption1] = useState("Select a reason");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [dropdownOpen1, setDropdownOpen1] = useState(false);
//   const [additionalInfo, setAdditionalInfo] = useState("");
//   const [images, setImages] = useState([]);

//   const options = [
//     "Account",
//     "Finding products/suppliers",
//     "Messenger",
//     "Order",
//     "Checkout",
//     "Return & Refund",
//     "Others",
//   ];

//   const options1 = [
//     "Verification code expired",
//     "Did not receive verification",
//     "Number of SMS verification codes sent has exceeded the daily limit",
//     "Unable to change email address",
//     "Password retrieval failed",
//     "Account registration failed",
//     "Unable to login to the current account",
//     "Others",
//   ];

//   const handleAccount = () => {
//     setDropdownOpen(!dropdownOpen);
//     setDropdownOpen1(false);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setDropdownOpen(false);
//   };

//   const handleOptionClick1 = (option) => {
//     setSelectedOption1(option);
//     setDropdownOpen1(false);
//   };

//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     const newImages = Array.from(files).map((file) =>
//       URL.createObjectURL(file)
//     );
//     setImages([...images, ...newImages]);
//   };

//   const handleRemoveImage = (image) => {
//     setImages(images.filter((img) => img !== image));
//   };

//   return (
//     <div className="flex justify-center w-full h-auto">
//       <div className="flex flex-col items-center w-full h-auto">
//         <div className="flex items-center justify-between w-[93%] h-auto py-3 sticky top-0 left-0 right-0 z-20 bg-white">
//           <PiCaretLeftThin className="text-2xl" />
//           <p className="text-xl font-bold text-[#333]">Bug/Suggestion</p>
//           <div className="">{""}</div>
//         </div>
//         <div className="flex flex-col items-center w-full h-auto py-4 bg-[#f7f7f7]">
//           <div className="flex flex-col w-[93%] space-y-2">
//             <h1 className="text-xl text-[#333]">How can we do better?</h1>
//             <p className="text-[#333] text-[1.001rem]">
//               Our developers are working hard to improve the app experience!
//               Please quickly tell us here a{" "}
//               <span className="font-bold text-[#5a5a5a]">
//                 bug/app suggestion.
//               </span>
//             </p>
//           </div>
//           <form
//             action=""
//             method="post"
//             className="flex flex-col items-center w-full mt-4"
//           >
//             <label className="w-[93%] my-2 text-lg font-bold text-[#333]">
//               Please let us know about the issue
//             </label>
//             <div className="relative w-[93%]">
//               <div
//                 className="flex items-center justify-between w-full h-10 px-4 py-2 bg-white cursor-pointer"
//                 onClick={handleAccount}
//               >
//                 <span className="text-sm">{selectedOption}</span>
//                 <PiCaretDownThin className="text-sm" />
//               </div>
//               {dropdownOpen && (
//                 <div className="absolute left-0 right-0 z-10 -mt-1 bg-white ">
//                   {options.map((option, index) => (
//                     <div
//                       key={index}
//                       className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
//                       onClick={() => handleOptionClick(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="relative w-[93%] mt-4">
//               <div
//                 className="flex items-center justify-between w-full h-10 px-4 py-2 bg-white cursor-pointer"
//                 onClick={() => setDropdownOpen1(!dropdownOpen1)}
//               >
//                 <span className="text-sm">{selectedOption1}</span>
//                 <PiCaretDownThin className="text-sm" />
//               </div>
//               {dropdownOpen1 && (
//                 <div className="absolute left-0 right-0 z-10 -mt-1 bg-white">
//                   {options1.map((option1, index) => (
//                     <div
//                       key={index}
//                       className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
//                       onClick={() => handleOptionClick1(option1)}
//                     >
//                       {option1}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="relative w-[93%] mt-4 h-36">
//               <textarea
//                 className="w-full h-full p-2 border border-gray-300 rounded-md resize-none text-sm outline-none border-none"
//                 maxLength="120"
//                 placeholder="Write a bit more to help us understand the issue. (Optional)"
//                 value={additionalInfo}
//                 onChange={(e) => setAdditionalInfo(e.target.value)}
//               />
//               <div className="absolute bottom-0 right-0 text-xs text-gray-500 p-2">
//                 {additionalInfo.length}/120
//               </div>
//             </div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               className="w-[93%] mt-4 h-10 px-4 py-2 border border-gray-300 rounded-md text-sm outline-none"
//             />
//             <p className="w-[93%] text-sm text-[#999] my-1">
//               It will only be used to follow up on the report
//             </p>
//             <div className="flex w-[93%] flex-wrap gap-2 mt-4">
//               {images.map((image, index) => (
//                 <div key={index} className="w-14 h-14 relative">
//                   <img
//                     src={image}
//                     alt={`Uploaded ${index}`}
//                     className="w-full h-full object-cover border-dashed border-2 border-gray-400"
//                   />
//                   <div
//                     className="w-4 h-4 flex-center border-2 border-white absolute top-[-5px] right-[-4px] text-lg font-bold text-white bg-[#434343] rounded-full cursor-pointer"
//                     onClick={() => handleRemoveImage(image)}
//                   >
//                     <MdClose />
//                   </div>
//                 </div>
//               ))}
//               <label
//                 htmlFor="file-upload"
//                 className="w-14 h-14 border-dashed border-2 border-gray-400 flex items-center justify-center cursor-pointer"
//               >
//                 <PiPlusThin className="text-[#222] text-xl font-bold " />
//                 <input
//                   id="file-upload"
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />
//               </label>
//             </div>
//             <button className="w-[93%] h-10 rounded-full text-white bg-[#f0be9c] mt-10">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;
