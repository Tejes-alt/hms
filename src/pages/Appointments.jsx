import React from "react";

export default function Appointments() {

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

    card: {
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      padding: "20px"
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px"
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

    rowHover: {
      cursor: "pointer"
    },

    badgeScheduled: {
      background: "#2563eb",
      color: "white",
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    },

    badgeCompleted: {
      background: "#16a34a",
      color: "white",
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    },

    badgePending: {
      background: "#f59e0b",
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
          Hospital Appointments
        </h1>

        <p style={styles.subtitle}>
          Manage and view all patient appointments
        </p>

      </div>


      <div style={styles.card}>

        <table style={styles.table}>

          <thead>

            <tr>

              <th style={styles.th}>Appointment ID</th>

              <th style={styles.th}>Patient Name</th>

              <th style={styles.th}>Doctor</th>

              <th style={styles.th}>Department</th>

              <th style={styles.th}>Date</th>

              <th style={styles.th}>Status</th>

            </tr>

          </thead>


          <tbody>

            <tr style={styles.rowHover}>

              <td style={styles.td}>A001</td>

              <td style={styles.td}>Ravi Kumar</td>

              <td style={styles.td}>Dr. Sai Charan</td>

              <td style={styles.td}>Cardiology</td>

              <td style={styles.td}>20 Feb 2026</td>

              <td style={styles.td}>
                <span style={styles.badgeScheduled}>
                  Scheduled
                </span>
              </td>

            </tr>


            <tr style={styles.rowHover}>

              <td style={styles.td}>A002</td>

              <td style={styles.td}>Sanjay Reddy</td>

              <td style={styles.td}>Dr. Anjali Devi</td>

              <td style={styles.td}>Neurology</td>

              <td style={styles.td}>21 Feb 2026</td>

              <td style={styles.td}>
                <span style={styles.badgeCompleted}>
                  Completed
                </span>
              </td>

            </tr>


            <tr style={styles.rowHover}>

              <td style={styles.td}>A003</td>

              <td style={styles.td}>Karthik Varma</td>

              <td style={styles.td}>Dr. Kareemullah</td>

              <td style={styles.td}>Orthopedics</td>

              <td style={styles.td}>22 Feb 2026</td>

              <td style={styles.td}>
                <span style={styles.badgePending}>
                  Pending
                </span>
              </td>

            </tr>


            <tr style={styles.rowHover}>

              <td style={styles.td}>A004</td>

              <td style={styles.td}>Sai Teja</td>

              <td style={styles.td}>Dr. Vamsi Krishna</td>

              <td style={styles.td}>Dermatology</td>

              <td style={styles.td}>23 Feb 2026</td>

              <td style={styles.td}>
                <span style={styles.badgeScheduled}>
                  Scheduled
                </span>
              </td>

            </tr>


            <tr style={styles.rowHover}>

              <td style={styles.td}>A005</td>

              <td style={styles.td}>Harsha Vardhan</td>

              <td style={styles.td}>Dr. Praneeth Reddy</td>

              <td style={styles.td}>General Medicine</td>

              <td style={styles.td}>24 Feb 2026</td>

              <td style={styles.td}>
                <span style={styles.badgePending}>
                  Pending
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}
