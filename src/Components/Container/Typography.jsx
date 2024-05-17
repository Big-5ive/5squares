import React from "react";

const Typography = ({ children, ms, type, onClick }) => {

    const text1 = {
      fontSize: "0.8rem",
      fontWeight: 300,
      fontFamily: "inter",
      color: "gray",
      textAlign: "center",
    };
    const text2= {
      fontSize: "1.2rem",
      fontFamily: "inter",
      fontWeight: 500,
      color:"#333333",
    };
    const text3 = {
      fontSize: "3.5rem",
      fontFamily: "inter",
      fontWeight: 400,
    };
    const text4= {
      fontSize: "5.5rem",
      fontWeight: 600,
      fontFamily: "inter",
      color: "#535353",
      textAlign: "center",
    };
    const text5= {
      fontSize: "6.5rem",
      fontWeight: 700,
      fontFamily: "inter",
      color: "#222222",
    };


  switch (type) {
    case "text1":
      return <span style={{ ...text1, ...ms }} onClick={onClick}>{children}</span>;
    case "text2":
      return <span style={{ ...text2, ...ms }} onClick={onClick}>{children}</span>;
    case "text3":
      return <span style={{ ...text3, ...ms }} onClick={onClick}>{children}</span>;
    case "text4":
      return <span style={{ ...text4, ...ms }} onClick={onClick}>{children}</span>;
    case "text4":
      return <span style={{ ...text5, ...ms }} onClick={onClick}>{children}</span>;
    default:
      return <></>;
  }
};

export default Typography;