import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const role = currentUser?.role;


  const handleLogout = () => {

    localStorage.removeItem("currentUser");

    navigate("/login");

    window.location.reload();

  };


  const styles = {

    sidebar: {

      position: "fixed",

      top: "70px",

      left: 0,

      width: "240px",

      height: "calc(100vh - 70px)",

      background: "linear-gradient(180deg, #0f172a, #1e293b)",  // ✅ slightly lighter

      color: "#e2e8f0",

      padding: "20px",

      boxSizing: "border-box",

      overflowY: "auto",

      borderRight: "1px solid rgba(255,255,255,0.08)",

      boxShadow: "4px 0 12px rgba(0,0,0,0.25)",

      zIndex: 1000

    },


    title: {

      marginBottom: "25px",

      borderBottom: "1px solid rgba(255,255,255,0.08)",

      paddingBottom: "12px",

      fontSize: "18px",

      fontWeight: "600",

      color: "#f1f5f9"

    },


    ul: {

      listStyle: "none",

      padding: 0,

      margin: 0

    },


    link: {

      display: "block",

      padding: "12px 15px",

      marginBottom: "6px",

      textDecoration: "none",

      color: "#cbd5e1",

      borderRadius: "8px",

      fontSize: "15px",

      transition: "all 0.2s ease"

    },


    activeLink: {

      background: "linear-gradient(90deg, #2563eb, #38bdf8)",

      color: "#ffffff",

      fontWeight: "600",

      boxShadow: "0 2px 8px rgba(37,99,235,0.4)"

    },


    logoutBtn: {

      marginTop: "25px",

      width: "100%",

      padding: "12px",

      background: "linear-gradient(90deg, #dc2626, #ef4444)",

      border: "none",

      color: "white",

      borderRadius: "8px",

      cursor: "pointer",

      fontSize: "15px",

      fontWeight: "500",

      boxShadow: "0 3px 10px rgba(239,68,68,0.4)"

    }

  };


  const getLinkStyle = ({ isActive }) => {

    return isActive
      ? { ...styles.link, ...styles.activeLink }
      : styles.link;

  };


  return (

    <aside style={styles.sidebar}>


      <div style={styles.title}>
        Navigation
      </div>



      <ul style={styles.ul}>


        {/* PUBLIC */}

        {!role && (

          <>

            <li>
              <NavLink to="/" style={getLinkStyle} end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" style={getLinkStyle}>
                About Hospital
              </NavLink>
            </li>

            <li>
              <NavLink to="/departments" style={getLinkStyle}>
                Departments
              </NavLink>
            </li>

            <li>
              <NavLink to="/doctors" style={getLinkStyle}>
                Doctors
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" style={getLinkStyle}>
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="/login" style={getLinkStyle}>
                Login
              </NavLink>
            </li>

          </>

        )}



        {/* ADMIN */}

        {role === "ADMIN" && (

          <>

            <li>
              <NavLink to="/admin" style={getLinkStyle} end>
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/doctors" style={getLinkStyle}>
                Manage Doctors
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/patients" style={getLinkStyle}>
                Manage Patients
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/departments" style={getLinkStyle}>
                Departments
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/appointments" style={getLinkStyle}>
                Appointments
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/reports" style={getLinkStyle}>
                Reports
              </NavLink>
            </li>

          </>

        )}



        {/* DOCTOR */}

        {role === "DOCTOR" && (

          <>

            <li>
              <NavLink to="/doctor" style={getLinkStyle} end>
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/doctor/appointments" style={getLinkStyle}>
                My Appointments
              </NavLink>
            </li>

            <li>
              <NavLink to="/doctor/patients" style={getLinkStyle}>
                Patient Records
              </NavLink>
            </li>

            <li>
              <NavLink to="/doctor/profile" style={getLinkStyle}>
                Profile
              </NavLink>
            </li>

          </>

        )}



        {/* PATIENT */}

        {role === "PATIENT" && (

          <>

            <li>
              <NavLink to="/patient" style={getLinkStyle} end>
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/patient/book" style={getLinkStyle}>
                Book Appointment
              </NavLink>
            </li>

            <li>
              <NavLink to="/patient/appointments" style={getLinkStyle}>
                My Appointments
              </NavLink>
            </li>

            <li>
              <NavLink to="/patient/history" style={getLinkStyle}>
                Medical History
              </NavLink>
            </li>

            <li>
              <NavLink to="/patient/profile" style={getLinkStyle}>
                Profile
              </NavLink>
            </li>

          </>

        )}

      </ul>



      {/* LOGOUT */}

      {role && (

        <button
          style={styles.logoutBtn}
          onClick={handleLogout}
        >
          Logout
        </button>

      )}

    </aside>

  );

};

export default Sidebar;
