import React from "react";

export default function Reports() {

  const styles = {

    container: {
      padding: "30px",
      background: "#f4f6f9",
      minHeight: "100vh",
      fontFamily: "Segoe UI, Arial"
    },

    header: {
      marginBottom: "20px"
    },

    title: {
      margin: 0,
      color: "#1f2937"
    },

    subtitle: {
      color: "#6b7280",
      marginTop: "5px"
    },

    cardsContainer: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
      flexWrap: "wrap"
    },

    card: {
      background: "white",
      padding: "20px",
      width: "240px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "0.3s"
    },

    cardTitle: {
      margin: 0,
      fontSize: "16px",
      color: "#374151"
    },

    cardNumber: {
      fontSize: "32px",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#2563eb"
    },

    cardSub: {
      color: "#6b7280",
      fontSize: "14px"
    },

    tableCard: {
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      marginTop: "30px"
    },

    tableTitle: {
      marginBottom: "15px"
    },

    table: {
      width: "100%",
      borderCollapse: "collapse"
    },

    th: {
      background: "#2563eb",
      color: "white",
      padding: "12px",
      textAlign: "left",
      fontWeight: "600"
    },

    td: {
      padding: "12px",
      borderBottom: "1px solid #e5e7eb"
    },

    badgeActive: {
      background: "#16a34a",
      color: "white",
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    },

    badgeCritical: {
      background: "#dc2626",
      color: "white",
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    }

  };


  return (

    <div style={styles.container}>

      <div style={styles.header}>

        <h1 style={styles.title}>
          Hospital Reports Dashboard
        </h1>

        <p style={styles.subtitle}>
          Overview of hospital performance and statistics
        </p>

      </div>


      {/* Summary Cards */}

      <div style={styles.cardsContainer}>


        <div style={styles.card}>

          <h3 style={styles.cardTitle}>
            Total Doctors
          </h3>

          <div style={styles.cardNumber}>
            48
          </div>

          <div style={styles.cardSub}>
            Active Doctors
          </div>

        </div>


        <div style={styles.card}>

          <h3 style={styles.cardTitle}>
            Total Patients
          </h3>

          <div style={styles.cardNumber}>
            1,284
          </div>

          <div style={styles.cardSub}>
            Registered Patients
          </div>

        </div>


        <div style={styles.card}>

          <h3 style={styles.cardTitle}>
            Appointments Today
          </h3>

          <div style={styles.cardNumber}>
            312
          </div>

          <div style={styles.cardSub}>
            Scheduled Appointments
          </div>

        </div>


        <div style={styles.card}>

          <h3 style={styles.cardTitle}>
            Departments
          </h3>

          <div style={styles.cardNumber}>
            6
          </div>

          <div style={styles.cardSub}>
            Active Departments
          </div>

        </div>


      </div>



      {/* Department Table */}

      <div style={styles.tableCard}>

        <h2 style={styles.tableTitle}>
          Department Performance
        </h2>


        <table style={styles.table}>

          <thead>

            <tr>

              <th style={styles.th}>Department</th>

              <th style={styles.th}>Doctors</th>

              <th style={styles.th}>Patients</th>

              <th style={styles.th}>Appointments</th>

              <th style={styles.th}>Status</th>

            </tr>

          </thead>


          <tbody>

            <tr>

              <td style={styles.td}>Cardiology</td>

              <td style={styles.td}>8</td>

              <td style={styles.td}>210</td>

              <td style={styles.td}>45</td>

              <td style={styles.td}>
                <span style={styles.badgeActive}>
                  Active
                </span>
              </td>

            </tr>


            <tr>

              <td style={styles.td}>Neurology</td>

              <td style={styles.td}>6</td>

              <td style={styles.td}>180</td>

              <td style={styles.td}>32</td>

              <td style={styles.td}>
                <span style={styles.badgeActive}>
                  Active
                </span>
              </td>

            </tr>


            <tr>

              <td style={styles.td}>Orthopedics</td>

              <td style={styles.td}>7</td>

              <td style={styles.td}>240</td>

              <td style={styles.td}>50</td>

              <td style={styles.td}>
                <span style={styles.badgeActive}>
                  Active
                </span>
              </td>

            </tr>


            <tr>

              <td style={styles.td}>Pediatrics</td>

              <td style={styles.td}>5</td>

              <td style={styles.td}>150</td>

              <td style={styles.td}>28</td>

              <td style={styles.td}>
                <span style={styles.badgeActive}>
                  Active
                </span>
              </td>

            </tr>


            <tr>

              <td style={styles.td}>Emergency</td>

              <td style={styles.td}>10</td>

              <td style={styles.td}>300</td>

              <td style={styles.td}>90</td>

              <td style={styles.td}>
                <span style={styles.badgeCritical}>
                  Critical
                </span>
              </td>

            </tr>


          </tbody>

        </table>

      </div>

    </div>

  );

}
