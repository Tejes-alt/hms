import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));


  const handleLogout = () => {

    localStorage.removeItem("currentUser");

    navigate("/login");

    window.location.reload();

  };


  const getInitial = () => {

    if (!currentUser?.email) return "?";

    return currentUser.email.charAt(0).toUpperCase();

  };


  const styles = {

    header: {

      position: "fixed",

      top: 0,

      left: 0,

      right: 0,

      height: "70px",

      background: "linear-gradient(90deg, #020617, #0f172a, #020617)",

      display: "flex",

      justifyContent: "space-between",

      alignItems: "center",

      padding: "0 30px",

      boxShadow: "0 4px 18px rgba(0,0,0,0.35)",

      zIndex: 2000

    },



    /* LEFT */

    titleBox: {

      display: "flex",

      flexDirection: "column"

    },



    mainTitle: {

      fontSize: "22px",

      fontWeight: "700",

      color: "#f8fafc",

      letterSpacing: "0.4px"

    },



    /* RIGHT */

    rightSection: {

      display: "flex",

      alignItems: "center",

      gap: "14px"

    },



    userCard: {

      display: "flex",

      alignItems: "center",

      gap: "10px",

      background: "rgba(255,255,255,0.08)",

      padding: "6px 12px",

      borderRadius: "20px",

      border: "1px solid rgba(255,255,255,0.08)"

    },



    avatar: {

      width: "34px",

      height: "34px",

      borderRadius: "50%",

      background: "#38bdf8",

      color: "#020617",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      fontWeight: "600",

      fontSize: "14px"

    },



    userInfo: {

      display: "flex",

      flexDirection: "column"

    },



    userEmail: {

      fontSize: "13px",

      fontWeight: "600",

      color: "#f1f5f9"

    },



    userRole: {

      fontSize: "11px",

      color: "#94a3b8"

    },



    logoutBtn: {

      padding: "7px 16px",

      background: "#ef4444",

      color: "white",

      border: "none",

      borderRadius: "8px",

      cursor: "pointer",

      fontWeight: "500"

    },



    loginBtn: {

      padding: "7px 18px",

      background: "#38bdf8",

      color: "#020617",

      border: "none",

      borderRadius: "8px",

      cursor: "pointer",

      fontWeight: "600"

    }

  };


  return (

    <header style={styles.header}>


      {/* LEFT */}

      <div style={styles.titleBox}>

        <div style={styles.mainTitle}>
          Hospital Management System
        </div>

      </div>



      {/* RIGHT */}

      <div style={styles.rightSection}>


        {!currentUser ? (

          <button
            style={styles.loginBtn}
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        ) : (

          <>

            <div style={styles.userCard}>

              <div style={styles.avatar}>
                {getInitial()}
              </div>

              <div style={styles.userInfo}>

                <div style={styles.userEmail}>
                  {currentUser.email}
                </div>

                <div style={styles.userRole}>
                  {currentUser.role}
                </div>

              </div>

            </div>



            <button
              style={styles.logoutBtn}
              onClick={handleLogout}
            >
              Logout
            </button>

          </>

        )}

      </div>


    </header>

  );

};

export default Header;
