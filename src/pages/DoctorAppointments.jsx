import React from "react";

export default function DoctorAppointments() {

  const styles = {

    page: {
      padding: "20px",
      fontFamily: "Inter, Segoe UI, sans-serif",
      background: "#f8fafc",
      minHeight: "100vh"
    },

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



    /* SUMMARY CARDS */

    summaryContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      marginBottom: "30px"
    },

    summaryCard: {
      flex: "1",
      minWidth: "200px",
      background: "#ffffff",
      padding: "18px",
      borderRadius: "14px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      borderLeft: "5px solid #0ea5e9"
    },

    summaryLabel: {
      fontSize: "13px",
      color: "#64748b"
    },

    summaryValue: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a",
      marginTop: "6px"
    },



    /* TABLE CARD */

    tableCard: {
      background: "#ffffff",
      borderRadius: "14px",
      padding: "20px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
    },

    tableTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "15px",
      color: "#0f172a"
    },

    table: {
      width: "100%",
      borderCollapse: "collapse"
    },

    th: {
      textAlign: "left",
      padding: "14px",
      fontSize: "13px",
      color: "#64748b",
      borderBottom: "2px solid #e2e8f0"
    },

    td: {
      padding: "14px",
      fontSize: "14px",
      borderBottom: "1px solid #f1f5f9"
    },



    /* STATUS BADGES */

    scheduled: {
      background: "#dbeafe",
      color: "#1e40af",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    },

    completed: {
      background: "#dcfce7",
      color: "#166534",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600"
    },

    pending: {
      background: "#fef3c7",
      color: "#92400e",
      padding: "6px 12px",
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
          View and manage your patient appointments
        </div>

      </div>



      {/* SUMMARY */}

      <div style={styles.summaryContainer}>

        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Today's Appointments</div>
          <div style={styles.summaryValue}>8</div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Completed</div>
          <div style={styles.summaryValue}>124</div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Pending</div>
          <div style={styles.summaryValue}>3</div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Total Patients</div>
          <div style={styles.summaryValue}>56</div>
        </div>

      </div>



      {/* TABLE */}

      <div style={styles.tableCard}>

        <div style={styles.tableTitle}>
          Appointment Schedule
        </div>

        <table style={styles.table}>

          <thead>

            <tr>

              <th style={styles.th}>Patient</th>

              <th style={styles.th}>Date</th>

              <th style={styles.th}>Time</th>

              <th style={styles.th}>Department</th>

              <th style={styles.th}>Status</th>

            </tr>

          </thead>


          <tbody>

            <tr>

              <td style={styles.td}>Karthik Reddy</td>

              <td style={styles.td}>20 Feb 2026</td>

              <td style={styles.td}>10:00 AM</td>

              <td style={styles.td}>Cardiology</td>

              <td style={styles.td}>
                <span style={styles.scheduled}>
                  Scheduled
                </span>
              </td>

            </tr>



            <tr>

              <td style={styles.td}>Kareemullah</td>

              <td style={styles.td}>20 Feb 2026</td>

              <td style={styles.td}>12:00 PM</td>

              <td style={styles.td}>Neurology</td>

              <td style={styles.td}>
                <span style={styles.completed}>
                  Completed
                </span>
              </td>

            </tr>



            <tr>

              <td style={styles.td}>Sai Teja</td>

              <td style={styles.td}>21 Feb 2026</td>

              <td style={styles.td}>02:30 PM</td>

              <td style={styles.td}>General Medicine</td>

              <td style={styles.td}>
                <span style={styles.pending}>
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
