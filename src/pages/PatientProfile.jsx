import React from "react";

export default function PatientProfile() {

  const styles = {

    page: {
      padding: "24px",
      background: "#f3f7fb",
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif"
    },



    /* PROFILE CONTAINER */

    container: {
      maxWidth: "800px",
      background: "#ffffff",
      borderRadius: "18px",
      overflow: "hidden",
      boxShadow: "0 12px 30px rgba(0,0,0,0.08)"
    },



    /* HEADER */

    header: {
      background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
      padding: "28px",
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "18px"
    },

    avatar: {
      width: "75px",
      height: "75px",
      borderRadius: "50%",
      background: "white",
      color: "#2563eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px",
      fontWeight: "700"
    },

    name: {
      fontSize: "24px",
      fontWeight: "700"
    },

    email: {
      fontSize: "14px",
      opacity: "0.9",
      marginTop: "4px"
    },



    /* BODY */

    body: {
      padding: "28px"
    },



    /* SECTION */

    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "18px",
      color: "#0f172a"
    },



    /* GRID */

    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px"
    },



    /* INFO CARD */

    infoCard: {
      background: "#f8fafc",
      padding: "16px",
      borderRadius: "12px"
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



    /* HEALTH BADGE */

    bloodBadge: {
      display: "inline-block",
      background: "#fee2e2",
      color: "#b91c1c",
      padding: "6px 16px",
      borderRadius: "20px",
      fontWeight: "600",
      marginTop: "5px"
    }

  };


  return (

    <div style={styles.page}>


      <div style={styles.container}>


        {/* HEADER */}

        <div style={styles.header}>

          <div style={styles.avatar}>
            E
          </div>

          <div>

            <div style={styles.name}>
              Eswar
            </div>

            <div style={styles.email}>
              patient@gmail.com
            </div>

          </div>

        </div>



        {/* BODY */}

        <div style={styles.body}>

          <div style={styles.sectionTitle}>
            Personal Information
          </div>



          <div style={styles.grid}>


            <div style={styles.infoCard}>

              <div style={styles.label}>
                Age
              </div>

              <div style={styles.value}>
                32 Years
              </div>

            </div>



            <div style={styles.infoCard}>

              <div style={styles.label}>
                Gender
              </div>

              <div style={styles.value}>
                Male
              </div>

            </div>



            <div style={styles.infoCard}>

              <div style={styles.label}>
                Phone Number
              </div>

              <div style={styles.value}>
                +91 9876543210
              </div>

            </div>



            <div style={styles.infoCard}>

              <div style={styles.label}>
                Blood Group
              </div>

              <div style={styles.bloodBadge}>
                O+
              </div>

            </div>



            <div style={styles.infoCard}>

              <div style={styles.label}>
                Patient ID
              </div>

              <div style={styles.value}>
                PAT-IND-45872
              </div>

            </div>



            <div style={styles.infoCard}>

              <div style={styles.label}>
                Status
              </div>

              <div style={styles.value}>
                Active Patient
              </div>

            </div>


          </div>


        </div>


      </div>


    </div>

  );

}
