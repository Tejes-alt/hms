import React from "react";

export default function MyAppointments() {

  const styles = {

    page: {
      padding: "24px",
      background: "#f4f7fb",
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif"
    },



    /* HEADER */

    header: {
      marginBottom: "25px"
    },

    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a"
    },

    subtitle: {
      fontSize: "14px",
      color: "#64748b",
      marginTop: "4px"
    },



    /* APPOINTMENT CARD */

    appointmentCard: {
      background: "#ffffff",
      borderRadius: "16px",
      padding: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
    },



    /* DATE BLOCK */

    dateBlock: {
      background: "#2563eb",
      color: "white",
      padding: "12px",
      borderRadius: "12px",
      textAlign: "center",
      width: "70px"
    },

    day: {
      fontSize: "20px",
      fontWeight: "700"
    },

    month: {
      fontSize: "12px"
    },



    /* DOCTOR INFO */

    doctorSection: {
      flex: "1",
      marginLeft: "18px"
    },

    doctorName: {
      fontWeight: "600",
      fontSize: "16px",
      color: "#0f172a"
    },

    dept: {
      fontSize: "13px",
      color: "#64748b",
      marginTop: "3px"
    },

    time: {
      fontSize: "13px",
      color: "#475569",
      marginTop: "3px"
    },



    /* STATUS */

    statusScheduled: {
      background: "#dbeafe",
      color: "#1e40af",
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    },

    statusCompleted: {
      background: "#dcfce7",
      color: "#166534",
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    },

    statusCancelled: {
      background: "#fee2e2",
      color: "#991b1b",
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    }

  };


  return (

    <div style={styles.page}>


      {/* HEADER */}

      <div style={styles.header}>

        <div style={styles.title}>
          My Appointments
        </div>

        <div style={styles.subtitle}>
          Track your upcoming and past visits
        </div>

      </div>



      {/* APPOINTMENT 1 */}

      <div style={styles.appointmentCard}>

        <div style={styles.dateBlock}>

          <div style={styles.day}>20</div>

          <div style={styles.month}>FEB</div>

        </div>


        <div style={styles.doctorSection}>

          <div style={styles.doctorName}>
            Dr. Sai Charan
          </div>

          <div style={styles.dept}>
            Cardiology Department
          </div>

          <div style={styles.time}>
            10:00 AM
          </div>

        </div>


        <div style={styles.statusScheduled}>
          Scheduled
        </div>

      </div>



      {/* APPOINTMENT 2 */}

      <div style={styles.appointmentCard}>

        <div style={{ ...styles.dateBlock, background: "#16a34a" }}>


          <div style={styles.day}>18</div>

          <div style={styles.month}>FEB</div>

        </div>


        <div style={styles.doctorSection}>

          <div style={styles.doctorName}>
            Dr. Kumar
          </div>

          <div style={styles.dept}>
            Neurology Department
          </div>

          <div style={styles.time}>
            02:30 PM
          </div>

        </div>


        <div style={styles.statusCompleted}>
          Completed
        </div>

      </div>



      {/* APPOINTMENT 3 */}

      <div style={styles.appointmentCard}>

<div style={{ ...styles.dateBlock, background: "#dc2626" }}>

          <div style={styles.day}>15</div>

          <div style={styles.month}>FEB</div>

        </div>


        <div style={styles.doctorSection}>

          <div style={styles.doctorName}>
            Dr. Karthik Reddy
          </div>

          <div style={styles.dept}>
            Orthopedics Department
          </div>

          <div style={styles.time}>
            11:15 AM
          </div>

        </div>


        <div style={styles.statusCancelled}>
          Cancelled
        </div>

      </div>


    </div>

  );

}
