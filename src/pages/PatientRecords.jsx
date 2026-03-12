import React from "react";

export default function PatientRecords() {

  const styles = {

    page: {
      padding: "24px",
      background: "#f3f6fb",
      fontFamily: "Segoe UI, sans-serif",
      minHeight: "100vh"
    },

    header: {
      marginBottom: "20px"
    },

    title: {
      fontSize: "30px",
      fontWeight: "700",
      color: "#1e293b"
    },

    subtitle: {
      color: "#64748b",
      marginTop: "4px"
    },



    /* PATIENT LIST CONTAINER */

    listContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    },



    /* PATIENT CARD */

    patientCard: {
      background: "#ffffff",
      borderRadius: "16px",
      padding: "18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      borderLeft: "6px solid #2563eb"
    },



    /* LEFT SIDE */

    patientLeft: {
      display: "flex",
      alignItems: "center",
      gap: "16px"
    },

    avatar: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "#2563eb",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
      fontSize: "18px"
    },

    patientInfo: {},

    patientName: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#0f172a"
    },

    patientDetails: {
      fontSize: "13px",
      color: "#64748b",
      marginTop: "3px"
    },



    /* RIGHT SIDE */

    patientRight: {
      textAlign: "right"
    },

    lastVisit: {
      fontSize: "13px",
      color: "#64748b"
    },



    /* STATUS */

    stable: {
      marginTop: "6px",
      display: "inline-block",
      padding: "5px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      background: "#dcfce7",
      color: "#166534"
    },

    treatment: {
      marginTop: "6px",
      display: "inline-block",
      padding: "5px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      background: "#dbeafe",
      color: "#1e40af"
    },

    critical: {
      marginTop: "6px",
      display: "inline-block",
      padding: "5px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      background: "#fee2e2",
      color: "#991b1b"
    }

  };


  return (

    <div style={styles.page}>

      <div style={styles.header}>

        <div style={styles.title}>
          Patient Records
        </div>

        <div style={styles.subtitle}>
          Electronic Medical Record overview
        </div>

      </div>



      <div style={styles.listContainer}>


        {/* PATIENT 1 */}

        <div style={styles.patientCard}>

          <div style={styles.patientLeft}>

            <div style={styles.avatar}>
              S
            </div>

            <div style={styles.patientInfo}>

              <div style={styles.patientName}>
                Showkath Ali
              </div>

              <div style={styles.patientDetails}>
                Age 45 • Heart Disease
              </div>

            </div>

          </div>


          <div style={styles.patientRight}>

            <div style={styles.lastVisit}>
              Last Visit: 15 Feb 2026
            </div>

            <div style={styles.stable}>
              Stable
            </div>

          </div>

        </div>



        {/* PATIENT 2 */}

        <div style={styles.patientCard}>

          <div style={styles.patientLeft}>

            <div style={styles.avatar}>
              C
            </div>

            <div>

              <div style={styles.patientName}>
                Sai Charan
              </div>

              <div style={styles.patientDetails}>
                Age 32 • Migraine
              </div>

            </div>

          </div>


          <div style={styles.patientRight}>

            <div style={styles.lastVisit}>
              Last Visit: 18 Feb 2026
            </div>

            <div style={styles.treatment}>
              Under Treatment
            </div>

          </div>

        </div>



        {/* PATIENT 3 */}

        <div style={styles.patientCard}>

          <div style={styles.patientLeft}>

            <div style={styles.avatar}>
              K
            </div>

            <div>

              <div style={styles.patientName}>
                Kareemullah Khan
              </div>

              <div style={styles.patientDetails}>
                Age 58 • Hypertension
              </div>

            </div>

          </div>


          <div style={styles.patientRight}>

            <div style={styles.lastVisit}>
              Last Visit: 17 Feb 2026
            </div>

            <div style={styles.stable}>
              Stable
            </div>

          </div>

        </div>



        {/* PATIENT 4 */}

        <div style={styles.patientCard}>

          <div style={styles.patientLeft}>

            <div style={styles.avatar}>
              R
            </div>

            <div>

              <div style={styles.patientName}>
                Ravi Teja
              </div>

              <div style={styles.patientDetails}>
                Age 50 • Cardiac Arrhythmia
              </div>

            </div>

          </div>


          <div style={styles.patientRight}>

            <div style={styles.lastVisit}>
              Last Visit: 19 Feb 2026
            </div>

            <div style={styles.critical}>
              Critical
            </div>

          </div>

        </div>


      </div>

    </div>

  );

}
