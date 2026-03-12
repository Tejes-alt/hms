import React, { useState } from "react";

export default function PatientPayment() {

  const [paymentMethod, setPaymentMethod] = useState("");
  const [paid, setPaid] = useState(false);

  // Demo appointment info
  const appointment = {
    id: "APT1024",
    doctor: "Dr. Sai Charan",
    department: "Cardiology",
    date: "25 Feb 2026",
    time: "10:30 AM",
    fee: 500
  };

  const handlePayment = () => {

    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    const payments =
      JSON.parse(localStorage.getItem("payments")) || [];

    payments.push({

      paymentId: "PAY" + Date.now(),

      appointmentId: appointment.id,

      doctor: appointment.doctor,

      amount: appointment.fee,

      method: paymentMethod,

      date: new Date().toLocaleDateString(),

      status: "Paid"

    });

    localStorage.setItem(
      "payments",
      JSON.stringify(payments)
    );

    setPaid(true);
  };


  const styles = {

    container: {

      padding: "30px",

      background: "#f1f5f9",

      minHeight: "100vh"

    },

    card: {

      maxWidth: "600px",

      margin: "auto",

      background: "white",

      padding: "30px",

      borderRadius: "12px",

      boxShadow: "0 8px 25px rgba(0,0,0,0.1)"

    },

    title: {

      fontSize: "24px",

      fontWeight: "700",

      marginBottom: "20px",

      color: "#0f172a"

    },

    section: {

      marginBottom: "20px"

    },

    label: {

      fontWeight: "600",

      color: "#334155"

    },

    value: {

      marginTop: "5px",

      color: "#64748b"

    },

    fee: {

      fontSize: "22px",

      fontWeight: "700",

      color: "#16a34a",

      marginTop: "10px"

    },

    select: {

      width: "100%",

      padding: "10px",

      marginTop: "10px",

      borderRadius: "8px",

      border: "1px solid #cbd5e1"

    },

    payBtn: {

      width: "100%",

      padding: "12px",

      background: "linear-gradient(90deg,#16a34a,#22c55e)",

      color: "white",

      border: "none",

      borderRadius: "8px",

      fontSize: "16px",

      fontWeight: "600",

      cursor: "pointer",

      marginTop: "20px"

    },

    success: {

      marginTop: "20px",

      padding: "15px",

      background: "#dcfce7",

      color: "#166534",

      borderRadius: "8px",

      fontWeight: "600"

    }

  };


  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <div style={styles.title}>
          Appointment Payment
        </div>


        <div style={styles.section}>

          <div style={styles.label}>
            Appointment ID
          </div>

          <div style={styles.value}>
            {appointment.id}
          </div>

        </div>


        <div style={styles.section}>

          <div style={styles.label}>
            Doctor
          </div>

          <div style={styles.value}>
            {appointment.doctor}
          </div>

        </div>


        <div style={styles.section}>

          <div style={styles.label}>
            Department
          </div>

          <div style={styles.value}>
            {appointment.department}
          </div>

        </div>


        <div style={styles.section}>

          <div style={styles.label}>
            Date & Time
          </div>

          <div style={styles.value}>
            {appointment.date} at {appointment.time}
          </div>

        </div>


        <div style={styles.section}>

          <div style={styles.label}>
            Consultation Fee
          </div>

          <div style={styles.fee}>
            ₹{appointment.fee}
          </div>

        </div>


        <div style={styles.section}>

          <div style={styles.label}>
            Payment Method
          </div>

          <select
            style={styles.select}
            value={paymentMethod}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          >

            <option value="">
              Select Payment Method
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Credit Card">
              Credit Card
            </option>

            <option value="Debit Card">
              Debit Card
            </option>

            <option value="Net Banking">
              Net Banking
            </option>

          </select>

        </div>


        <button
          style={styles.payBtn}
          onClick={handlePayment}
        >
          Pay ₹{appointment.fee}
        </button>


        {paid && (

          <div style={styles.success}>
            Payment Successful!
          </div>

        )}

      </div>

    </div>

  );

}
