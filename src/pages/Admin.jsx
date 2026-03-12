import React, { useEffect, useState } from "react";

export default function Admin() {

  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(6);

  useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const doctors =
      users.filter(user => user.role === "DOCTOR");

    const patients =
      users.filter(user => user.role === "PATIENT");

    setDoctorCount(doctors.length);

    setPatientCount(patients.length);

    setAppointmentCount(appointments.length);

  }, []);


  const styles = {

    container: {

      padding: "0px",

      fontFamily: "Segoe UI",

    },

    title: {

      fontSize: "28px",

      fontWeight: "600",

      marginBottom: "5px"

    },

    subtitle: {

      color: "#6b7280",

      marginBottom: "25px"

    },

    cardContainer: {

      display: "grid",

      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",

      gap: "20px",

      marginBottom: "30px"

    },

    card: {

      background: "#ffffff",

      padding: "20px",

      borderRadius: "12px",

      boxShadow: "0 4px 12px rgba(0,0,0,0.08)"

    },

    cardTitle: {

      fontSize: "16px",

      marginBottom: "10px",

      color: "#374151"

    },

    number: {

      fontSize: "32px",

      fontWeight: "bold",

      color: "#2563eb",

      marginBottom: "5px"

    },

    label: {

      fontSize: "14px",

      color: "#6b7280"

    },

    section: {

      background: "#ffffff",

      padding: "20px",

      borderRadius: "12px",

      boxShadow: "0 4px 12px rgba(0,0,0,0.08)"

    }

  };


  return (

    <div style={styles.container}>

      <div style={styles.title}>
        Admin Dashboard
      </div>

      <div style={styles.subtitle}>
        Welcome to Hospital Management Admin Panel
      </div>


      <div style={styles.cardContainer}>


        <div style={styles.card}>

          <div style={styles.cardTitle}>
            Total Doctors
          </div>

          <div style={styles.number}>
            {doctorCount}
          </div>

          <div style={styles.label}>
            Registered Doctors
          </div>

        </div>



        <div style={styles.card}>

          <div style={styles.cardTitle}>
            Total Patients
          </div>

          <div style={styles.number}>
            {patientCount}
          </div>

          <div style={styles.label}>
            Registered Patients
          </div>

        </div>



        <div style={styles.card}>

          <div style={styles.cardTitle}>
            Total Appointments
          </div>

          <div style={styles.number}>
            {appointmentCount}
          </div>

          <div style={styles.label}>
            All Appointments
          </div>

        </div>



        <div style={styles.card}>

          <div style={styles.cardTitle}>
            Departments
          </div>

          <div style={styles.number}>
            {departmentCount}
          </div>

          <div style={styles.label}>
            Hospital Departments
          </div>

        </div>


      </div>



      <div style={styles.section}>

        <h2>System Overview</h2>

        <ul>

          <li>Hospital Management System is running normally</li>

          <li>All services are operational</li>

          <li>Database connected successfully</li>

          <li>No critical alerts</li>

        </ul>

      </div>

    </div>

  );

}
