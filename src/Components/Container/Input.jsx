import React, { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

const InputField = ({ type, ms, onChange, placeholder }) => {
  const [show, setShow] = useState(true);
  const [value1, setValue1] = useState("");

  const inputContainer = {
    width:"100%",
    height: "7.4vh",
    borderWidth: 0.5,
    borderColor: "#8E8E93",
    borderRadius: 0,
    display:"flex",
    justifyContent: "center",
    alignContent: "center",
    border:"none",
    borderBottom: "1px solid #C7CBD7",
    paddingInline: "15px",
    fontFamily:"inter"

    // backgroundColor:"red",
  };

  const input = {
    height: "100%",
    width: "100%",
    fontSize: "1.2rem",
    // fontFamily: "Montserrat",
    fontFamily:"inter",
    color: "#333",
     border: "none",
    outline: "none",
  };

  const iconContainer = {
    minWidth: "20px",
    height: "20px",
    alignSelf: "center",
    backgroundColor: "transparent",
    border: "none",
  };

  const icon = {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    color:"gray",
  };

  switch (type) {
    case "name":
      return (
        <div style={{ ...inputContainer, ...ms }}>
          <input
            style={{ ...input, ...ms }}
            placeholder={placeholder}
            onChange={onChange}
            className="pI"
          />
        </div>
      );
    case "password":
      return (
        <div style={{ ...inputContainer, ...ms }}>
          <input
            type={show? "password":"text"}
            placeholder="password"
            placeholdertextcolor={"#8E8E93"}
            style={{ ...input, ...ms }}
            onChange={onChange}
            className="pI"
          />
          <button onClick={() => setShow(!show)} style={{ ...iconContainer, ...ms }}>
            {show ? (
              <FiEyeOff style={icon} />
            ) : (
              <FiEye style={icon} />
            )}
          </button>
        </div>
      );
    case "cancel":
      return (
        <div style={{ ...inputContainer, ...ms }}>
          <input
            placeholder={placeholder}
            placeholderTextColor={"#8E8E93"}
            style={{ ...input, ...ms }}
            onChange={(e) => setValue1(e.target.value)}
            value={value1}
          />
          {value1 && (
            <button onClick={() => setValue1("")} style={{ ...iconContainer, ...ms }}>
              <img style={icon} src="/icons/cancel.png" alt="Cancel" />
            </button>
          )}
        </div>
      );
    case "done":
      return (
        <div style={{ ...inputContainer, ...ms }}>
          <input
            placeholder="3ciadgr"
            placeholderTextColor={"#8E8E93"}
            style={{ ...input, ...ms }}
            onChange={onChange}
          />
          <button onClick={() => setShow(!show)} style={{ ...iconContainer, ...ms }}>
            <img style={icon} src="/icons/done.png" alt="Done" />
          </button>
        </div>
      );
    default:
      return <></>;
  }
};

export default InputField;
