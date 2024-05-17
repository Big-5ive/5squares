import React from "react";

const Typography = ({ children, ms, type }) => {

    const text1 = {
      fontSize: "1rem",
      fontWeight: 300,
      fontFamily: "Roboto",
      color: "gray",
      textAlign: "center",
    };
    const text2= {
      fontSize: "1.5rem",
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
      return <span style={{ ...text1, ...ms }}>{children}</span>;
    case "text2":
      return <span style={{ ...text2, ...ms }}>{children}</span>;
    case "text3":
      return <span style={{ ...text3, ...ms }}>{children}</span>;
    case "text4":
      return <span style={{ ...text4, ...ms }}>{children}</span>;
    case "text4":
      return <span style={{ ...text5, ...ms }}>{children}</span>;
    default:
      return <></>;
  }
};

export default Typography;
