import React from "react";

export default function Container({ children }) {
  const styles = {
    body: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return <main style={styles.body}>{children}</main>;
}

export function Wrapper({ children, ms }) {
  const styles = {
    body: {
      width: "90%",
      height: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    //   backgroundColor: "red",
    },
  };

  return <main style={{ ...styles.body, ...ms }}>{children}</main>;
}

