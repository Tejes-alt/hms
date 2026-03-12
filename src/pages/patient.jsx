import React from "react";

export default function PatientDashboard() {

  const styles = {

    page: {
      padding: "24px",
      background: "#f0f4f8",
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif"
    },



    /* WELCOME BANNER */

    banner: {
      background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
      borderRadius: "18px",
      padding: "25px",
      color: "white",
      marginBottom: "25px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
    },

    welcome: {
      fontSize: "26px",
      fontWeight: "700"
    },

    bannerSub: {
      marginTop: "6px",
      opacity: "0.9"
    },



    /* STAT TILES */

    statsRow: {
      display: "flex",
      gap: "18px",
      flexWrap: "wrap",
      marginBottom: "30px"
    },

    statTile: {
      flex: "1",
      minWidth: "200px",
      background: "#ffffff",
      borderRadius: "14px",
      padding: "18px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      position: "relative",
      overflow: "hidden"
    },

    statNumber: {
      fontSize: "30px",
      fontWeight: "700",
      color: "#0f172a"
    },

    statLabel: {
      fontSize: "14px",
      color: "#64748b",
      marginTop: "4px"
    },



    /* APPOINTMENT TIMELINE */

    section: {
      background: "#ffffff",
      borderRadius: "16px",
      padding: "22px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
    },

    sectionTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "18px",
      color: "#0f172a"
    },

    appointmentItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px",
      borderRadius: "12px",
      background: "#f8fafc",
      marginBottom: "12px"
    },

    appointmentLeft: {},

    doctor: {
      fontWeight: "600",
      color: "#0f172a"
    },

    dept: {
      fontSize: "13px",
      color: "#64748b",
      marginTop: "2px"
    },

    dateTime: {
      fontSize: "13px",
      color: "#475569"
    },



    /* STATUS */

    status: {
      background: "#dbeafe",
      color: "#1e40af",
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    }

  };


  return (

    <div style={styles.page}>


      {/* WELCOME */}

      <div style={styles.banner}>

        <div style={styles.welcome}>
          Welcome back, Tejes
        </div>

        <div style={styles.bannerSub}>
          Here's an overview of your health and appointments
        </div>

      </div>



      {/* STATS */}

      <div style={styles.statsRow}>


        <div style={styles.statTile}>
          <div style={styles.statNumber}>2</div>
          <div style={styles.statLabel}>Upcoming Appointments</div>
        </div>


        <div style={styles.statTile}>
          <div style={styles.statNumber}>12</div>
          <div style={styles.statLabel}>Total Visits</div>
        </div>


        <div style={styles.statTile}>
          <div style={styles.statNumber}>5</div>
          <div style={styles.statLabel}>Medical Reports</div>
        </div>


        <div style={styles.statTile}>
          <div style={styles.statNumber}>3</div>
          <div style={styles.statLabel}>Active Prescriptions</div>
        </div>


      </div>



      {/* APPOINTMENT LIST */}

      <div style={styles.section}>

        <div style={styles.sectionTitle}>
          Upcoming Appointments
        </div>



        <div style={styles.appointmentItem}>

          <div style={styles.appointmentLeft}>

            <div style={styles.doctor}>
              Dr. Sai Charan
            </div>

            <div style={styles.dept}>
              Cardiology
            </div>

          </div>


          <div style={styles.dateTime}>
            20 Feb 2026 • 10:00 AM
          </div>


          <div style={styles.status}>
            Scheduled
          </div>

        </div>



        <div style={styles.appointmentItem}>

          <div>

            <div style={styles.doctor}>
              Dr. Kumar
            </div>

            <div style={styles.dept}>
              Neurology
            </div>

          </div>


          <div style={styles.dateTime}>
            25 Feb 2026 • 02:00 PM
          </div>


          <div style={styles.status}>
            Scheduled
          </div>

        </div>


      </div>


    </div>

  );

}
