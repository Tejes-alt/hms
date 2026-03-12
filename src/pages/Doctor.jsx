import React from "react";

export default function DoctorDashboard() {

  const styles = {

    container: {
      padding: "0px",
      fontFamily: "Segoe UI, Arial"
    },

    header: {
      marginBottom: "25px"
    },

    title: {
      fontSize: "28px",
      fontWeight: "600",
      color: "#111827"
    },

    subtitle: {
      color: "#6b7280",
      marginTop: "5px"
    },

    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "30px"
    },

    card: {
      background: "white",
      padding: "22px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
    },

    cardTitle: {
      fontSize: "15px",
      color: "#374151",
      marginBottom: "8px"
    },

    number: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#2563eb",
      marginBottom: "4px"
    },

    label: {
      fontSize: "13px",
      color: "#6b7280"
    },

    tableCard: {
      background: "white",
      padding: "22px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "12px"
    },

    th: {
      background: "#2563eb",
      color: "white",
      padding: "12px",
      textAlign: "left",
      fontSize: "14px"
    },

    td: {
      padding: "12px",
      borderBottom: "1px solid #e5e7eb",
      fontSize: "14px"
    },

    badgeScheduled: {
      background: "#2563eb",
      color: "white",
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "12px"
    },

    badgeCompleted: {
      background: "#16a34a",
      color: "white",
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "12px"
    },

    badgePending: {
      background: "#f59e0b",
      color: "white",
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "12px"
    }

  };


  return (

    <div style={styles.container}>

      <div style={styles.header}>

        <div style={styles.title}>
          Doctor Dashboard
        </div>

        <div style={styles.subtitle}>
          Welcome back, Dr. Sai Charan. Here is today's overview.
        </div>

      </div>



      {/* Dashboard Cards */}

      <div style={styles.cardContainer}>


        <div style={styles.card}>
          <div style={styles.cardTitle}>
            Today's Appointments
          </div>
          <div style={styles.number}>
            14
          </div>
          <div style={styles.label}>
            Scheduled for today
          </div>
        </div>



        <div style={styles.card}>
          <div style={styles.cardTitle}>
            Total Patients
          </div>
          <div style={styles.number}>
            186
          </div>
          <div style={styles.label}>
            Under your care
          </div>
        </div>



        <div style={styles.card}>
          <div style={styles.cardTitle}>
            Pending Reports
          </div>
          <div style={styles.number}>
            7
          </div>
          <div style={styles.label}>
            Awaiting review
          </div>
        </div>



        <div style={styles.card}>
          <div style={styles.cardTitle}>
            Completed Appointments
          </div>
          <div style={styles.number}>
            342
          </div>
          <div style={styles.label}>
            Successfully treated
          </div>
        </div>


      </div>



      {/* Schedule Table */}

      <div style={styles.tableCard}>

        <h2>Today's Schedule</h2>

        <table style={styles.table}>

          <thead>

            <tr>

              <th style={styles.th}>Patient Name</th>

              <th style={styles.th}>Time</th>

              <th style={styles.th}>Department</th>

              <th style={styles.th}>Status</th>

            </tr>

          </thead>


          <tbody>

            <tr>

              <td style={styles.td}>Ravi Kumar</td>

              <td style={styles.td}>09:30 AM</td>

              <td style={styles.td}>Cardiology</td>

              <td style={styles.td}>
                <span style={styles.badgeScheduled}>
                  Scheduled
                </span>
              </td>

            </tr>


            <tr>

              <td style={styles.td}>Sanjay Reddy</td>

              <td style={styles.td}>11:00 AM</td>

              <td style={styles.td}>Neurology</td>

              <td style={styles.td}>
                <span style={styles.badgeCompleted}>
                  Completed
                </span>
              </td>

            </tr>


            <tr>

              <td style={styles.td}>Harsha Vardhan</td>

              <td style={styles.td}>01:45 PM</td>

              <td style={styles.td}>Orthopedics</td>

              <td style={styles.td}>
                <span style={styles.badgePending}>
                  Pending
                </span>
              </td>

            </tr>


            <tr>

              <td style={styles.td}>Karthik Varma</td>

              <td style={styles.td}>03:15 PM</td>

              <td style={styles.td}>General Medicine</td>

              <td style={styles.td}>
                <span style={styles.badgeScheduled}>
                  Scheduled
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>


    </div>

  );

}
