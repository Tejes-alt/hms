import React, { useState } from "react";

export default function BookAppointment() {

  const [doctor, setDoctor] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [paymentId, setPaymentId] = useState("");

  const consultationFee = 500;


  const handlePaymentAndBooking = () => {

    if (!doctor || !department || !date || !time) {
      alert("Please fill all appointment details");
      return;
    }

    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    setPaymentStatus("processing");

    // simulate real payment delay
    setTimeout(() => {

      const newPaymentId =
        "PAY" + Math.floor(Math.random() * 1000000);

      const payment = {

        paymentId: newPaymentId,

        doctor,

        department,

        date,

        time,

        amount: consultationFee,

        method: paymentMethod,

        status: "Paid",

        paidOn: new Date().toLocaleString()

      };

      const payments =
        JSON.parse(localStorage.getItem("payments")) || [];

      payments.push(payment);

      localStorage.setItem(
        "payments",
        JSON.stringify(payments)
      );

      setPaymentId(newPaymentId);

      setPaymentStatus("success");

    }, 2000);

  };


  const styles = {

    page: {
      padding: "24px",
      background: "#f1f5f9",
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif"
    },

    header: {
      marginBottom: "20px"
    },

    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a"
    },

    subtitle: {
      color: "#64748b"
    },

    container: {
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: "24px"
    },

    formCard: {
      background: "#ffffff",
      padding: "24px",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
    },

    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "18px"
    },

    label: {
      fontSize: "14px",
      fontWeight: "500"
    },

    input: {
      width: "100%",
      padding: "12px",
      marginTop: "6px",
      marginBottom: "16px",
      borderRadius: "10px",
      border: "1px solid #cbd5e1"
    },

    feeBox: {
      background: "#ecfdf5",
      padding: "12px",
      borderRadius: "10px",
      marginBottom: "16px",
      fontWeight: "600",
      color: "#065f46"
    },

    button: {
      width: "100%",
      padding: "14px",
      background: "linear-gradient(135deg,#16a34a,#22c55e)",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontWeight: "600",
      cursor: "pointer",
      fontSize: "15px"
    },

    processingButton: {
      width: "100%",
      padding: "14px",
      background: "#64748b",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontWeight: "600"
    },

    successBox: {
      marginTop: "16px",
      padding: "16px",
      background: "#ecfdf5",
      borderRadius: "10px",
      border: "1px solid #16a34a"
    },

    successTitle: {
      fontWeight: "600",
      color: "#166534",
      marginBottom: "8px"
    },

    previewCard: {
      background: "#ffffff",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
    },

    doctorCard: {
      padding: "14px",
      borderRadius: "12px",
      background: "#f8fafc",
      marginBottom: "12px"
    }

  };


  return (

    <div style={styles.page}>

      <div style={styles.header}>

        <div style={styles.title}>
          Book Appointment & Payment
        </div>

        <div style={styles.subtitle}>
          Secure your appointment with payment confirmation
        </div>

      </div>


      <div style={styles.container}>


        {/* LEFT FORM */}

        <div style={styles.formCard}>

          <div style={styles.sectionTitle}>
            Appointment Details
          </div>


          <label style={styles.label}>
            Select Doctor
          </label>

          <select
            style={styles.input}
            onChange={(e)=>setDoctor(e.target.value)}
          >

            <option value="">
              Choose Doctor
            </option>

            <option>
              Dr. Sai Charan
            </option>

            <option>
              Dr. Ravi Kumar
            </option>

            <option>
              Dr. Karthik Reddy
            </option>

            <option>
              Dr. Prakash Reddy
            </option>

            <option>
              Dr. Suresh Reddy
            </option>

          </select>


          <label style={styles.label}>
            Department
          </label>

          <select
            style={styles.input}
            onChange={(e)=>setDepartment(e.target.value)}
          >

            <option value="">
              Choose Department
            </option>

            <option>
              Cardiology
            </option>

            <option>
              Neurology
            </option>

            <option>
              Orthopedics
            </option>

            <option>
              General Medicine
            </option>

            <option>
              Pediatric
            </option>

          </select>


          <label style={styles.label}>
            Date
          </label>

          <input
            type="date"
            style={styles.input}
            onChange={(e)=>setDate(e.target.value)}
          />


          <label style={styles.label}>
            Time
          </label>

          <input
            type="time"
            style={styles.input}
            onChange={(e)=>setTime(e.target.value)}
          />


          {/* FEE */}

          <div style={styles.feeBox}>
            Consultation Fee: ₹{consultationFee}
          </div>


          {/* PAYMENT METHOD */}

          <label style={styles.label}>
            Payment Method
          </label>

          <select
            style={styles.input}
            onChange={(e)=>setPaymentMethod(e.target.value)}
          >

            <option value="">
              Select Payment Method
            </option>

            <option>
              UPI
            </option>

            <option>
              Credit Card
            </option>

            <option>
              Debit Card
            </option>

            <option>
              Net Banking
            </option>

          </select>


          {/* BUTTON */}

          {paymentStatus === "idle" && (

            <button
              style={styles.button}
              onClick={handlePaymentAndBooking}
            >
              Pay ₹{consultationFee} & Confirm
            </button>

          )}


          {paymentStatus === "processing" && (

            <button style={styles.processingButton}>
              Processing Payment...
            </button>

          )}


          {/* RECEIPT */}

          {paymentStatus === "success" && (

            <div style={styles.successBox}>

              <div style={styles.successTitle}>
                Payment Successful
              </div>

              <div>
                Payment ID: <b>{paymentId}</b>
              </div>

              <div>
                Doctor: {doctor}
              </div>

              <div>
                Amount Paid: ₹{consultationFee}
              </div>

              <div>
                Method: {paymentMethod}
              </div>

            </div>

          )}

        </div>


        {/* RIGHT PANEL */}

        <div style={styles.previewCard}>

          <div style={styles.sectionTitle}>
            Specialists
          </div>

          <div style={styles.doctorCard}>
            Dr. Sai Charan — Cardiology
          </div>

          <div style={styles.doctorCard}>
            Dr. Tejes — Neurology
          </div>

          <div style={styles.doctorCard}>
            Dr. Karthik Reddy — Orthopedics
          </div>

        </div>


      </div>

    </div>

  );

}
