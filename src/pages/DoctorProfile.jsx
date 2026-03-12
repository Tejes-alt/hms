import React from "react";

export default function DoctorProfile() {

  const styles = {

    page: {
      padding: "24px",
      background: "#f4f7fb",
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif"
    },

    container: {
      background: "#ffffff",
      borderRadius: "18px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      overflow: "hidden",
      maxWidth: "800px"
    },



    /* TOP PROFILE HEADER */

    header: {
      background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
      padding: "30px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      color: "white"
    },

    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      background: "white",
      color: "#2563eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      fontWeight: "bold"
    },

    doctorName: {
      fontSize: "24px",
      fontWeight: "700"
    },

    doctorDept: {
      opacity: "0.9",
      marginTop: "4px"
    },



    /* INFO SECTION */

    body: {
      padding: "30px"
    },

    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "20px",
      color: "#0f172a"
    },

    infoGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px"
    },

    infoBox: {
      background: "#f8fafc",
      padding: "15px",
      borderRadius: "10px"
    },

    label: {
      fontSize: "13px",
      color: "#64748b"
    },

    value: {
      fontSize: "16px",
      fontWeight: "600",
      marginTop: "4px",
      color: "#0f172a"
    },



    /* STATUS BADGE */

    statusActive: {
      display: "inline-block",
      background: "#dcfce7",
      color: "#166534",
      padding: "6px 16px",
      borderRadius: "20px",
      fontSize: "13px",
      fontWeight: "600",
      marginTop: "5px"
    }

  };


  return (

    <div style={styles.page}>


      <div style={styles.container}>


        {/* PROFILE HEADER */}

        <div style={styles.header}>

          <div style={styles.avatar}>
            T
          </div>

          <div>

            <div style={styles.doctorName}>
              Dr. Tejes
            </div>

            <div style={styles.doctorDept}>
              Cardiology Specialist
            </div>

          </div>

        </div>



        {/* PROFILE BODY */}

        <div style={styles.body}>

          <div style={styles.sectionTitle}>
            Professional Information
          </div>


          <div style={styles.infoGrid}>


            <div style={styles.infoBox}>

              <div style={styles.label}>
                Email Address
              </div>

              <div style={styles.value}>
                doctor@gmail.com
              </div>

            </div>



            <div style={styles.infoBox}>

              <div style={styles.label}>
                Phone Number
              </div>

              <div style={styles.value}>
                +91 9876543210
              </div>

            </div>



            <div style={styles.infoBox}>

              <div style={styles.label}>
                Department
              </div>

              <div style={styles.value}>
                Cardiology
              </div>

            </div>



            <div style={styles.infoBox}>

              <div style={styles.label}>
                Experience
              </div>

              <div style={styles.value}>
                10 Years
              </div>

            </div>



            <div style={styles.infoBox}>

              <div style={styles.label}>
                Status
              </div>

              <div style={styles.statusActive}>
                Active
              </div>

            </div>



            <div style={styles.infoBox}>

              <div style={styles.label}>
                License Number
              </div>

              <div style={styles.value}>
                MED-IND-45872
              </div>

            </div>


          </div>


        </div>


      </div>


    </div>

  );

}
