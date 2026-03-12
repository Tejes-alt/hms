import React from "react";

const Footer = () => {

  const styles = {

    footer: {

      position: "fixed",

      bottom: 0,

      left: 0,          // FULL WIDTH (over sidebar)

      right: 0,

      height: "50px",

      background: "linear-gradient(90deg, #020617, #0f172a, #020617)",

      color: "#cbd5f5",

      display: "flex",

      alignItems: "center",

      justifyContent: "space-between",

      padding: "0 25px",

      fontSize: "13px",

      borderTop: "1px solid rgba(255,255,255,0.08)",

      boxShadow: "0 -4px 18px rgba(0,0,0,0.35)",

      zIndex: 2000

    },



    left: {

      fontWeight: "500"

    },



    right: {

      opacity: "0.8"

    }

  };


  return (

    <footer style={styles.footer}>

      <div style={styles.left}>
        Hospital Management System
      </div>

      <div style={styles.right}>
        © 2026 All Rights Reserved
      </div>

    </footer>

  );

};

export default Footer;
