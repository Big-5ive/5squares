import React from "react";

const Button = ({ type, ms, title, onClick }) => {
  const button1 = {
    width: "100%",
    height: "7vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    border: "none",
    outline: "none",
    boxShadow:"box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  const buttonText = {
    color: "#EF5A5A",
  };
  const buttonText2 = {
    color: "#fff",
    fontFamily: "inter",
    fontSize: "1.2rem",
    // letterSpacing: "0.1rem",
  };
  const button2 = {
    backgroundColor: "#EF5A5A",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 4,
    boxShadow:"box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  switch (type) {
    case "CreateAcc":
      return (
        <button style={[...button1, ...ms]} onClick={onClick}>
          <p type="text3" ms={styles.buttonText}>
            {" "}
            {title}{" "}
          </p>
        </button>
      );
    case "login":
      return (
        <button style={{ ...button1, ...button2, ...ms }} onClick={onClick}>
          <p type="text3" style={{ ...buttonText2 }}>
            {title}
          </p>
        </button>
      );
    default:
      return <></>;
  }
};

export default Button;
