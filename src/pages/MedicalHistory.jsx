import React from "react";

export default function MedicalHistory() {

  const styles = {

    page: {
      padding: "24px",
      background: "#f6f9fc",
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif"
    },



    /* HEADER */

    header: {
      marginBottom: "30px"
    },

    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a"
    },

    subtitle: {
      color: "#64748b",
      marginTop: "4px"
    },



    /* TIMELINE */

    timeline: {
      position: "relative",
      paddingLeft: "30px",
      borderLeft: "3px solid #2563eb"
    },



    /* RECORD ITEM */

    record: {
      background: "#ffffff",
      padding: "18px",
      borderRadius: "14px",
      marginBottom: "18px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      position: "relative"
    },



    /* DOT */

    dot: {
      width: "14px",
      height: "14px",
      background: "#2563eb",
      borderRadius: "50%",
      position: "absolute",
      left: "-38px",
      top: "20px"
    },



    /* CONTENT */

    date: {
      fontSize: "13px",
      color: "#64748b",
      marginBottom: "6px"
    },

    doctor: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#0f172a"
    },

    diagnosis: {
      marginTop: "6px",
      fontSize: "14px",
      color: "#334155"
    },

    treatment: {
      marginTop: "6px",
      fontSize: "13px",
      background: "#f1f5f9",
      padding: "6px 12px",
      borderRadius: "8px",
      display: "inline-block",
      color: "#475569"
    }

  };


  return (

    <div style={styles.page}>


      {/* HEADER */}

      <div style={styles.header}>

        <div style={styles.title}>
          Medical History
        </div>

        <div style={styles.subtitle}>
          Your previous diagnoses and treatments
        </div>

      </div>



      {/* TIMELINE */}

      <div style={styles.timeline}>


        {/* RECORD 1 */}

        <div style={styles.record}>

          <div style={styles.dot}></div>

          <div style={styles.date}>
            10 Feb 2026
          </div>

          <div style={styles.doctor}>
            Dr. Hemanth — Cardiology
          </div>

          <div style={styles.diagnosis}>
            Diagnosis: Heart Checkup
          </div>

          <div style={styles.treatment}>
            Treatment: Medication Prescribed
          </div>

        </div>



        {/* RECORD 2 */}

        <div style={styles.record}>

          <div style={styles.dot}></div>

          <div style={styles.date}>
            05 Jan 2026
          </div>

          <div style={styles.doctor}>
            Dr. Hartheik — Neurology
          </div>

          <div style={styles.diagnosis}>
            Diagnosis: Migraine
          </div>

          <div style={styles.treatment}>
            Treatment: Pain Management Therapy
          </div>

        </div>



        {/* RECORD 3 */}

        <div style={styles.record}>

          <div style={styles.dot}></div>

          <div style={styles.date}>
            12 Dec 2025
          </div>

          <div style={styles.doctor}>
            Dr. Sai Charan — General Medicine
          </div>

          <div style={styles.diagnosis}>
            Diagnosis: Routine Health Check
          </div>

          <div style={styles.treatment}>
            Treatment: No issues detected
          </div>

        </div>


      </div>


    </div>

  );

}
