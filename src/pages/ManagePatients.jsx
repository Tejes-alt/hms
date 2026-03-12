import React, { useEffect, useState } from "react";

export default function Appointments() {

  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const doctorList = users.filter(u => u.role === "DOCTOR");
    const patientList = users.filter(u => u.role === "PATIENT");

    setDoctors(doctorList);
    setPatients(patientList);

    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setAppointments(storedAppointments);
  };

  const addAppointment = () => {

    if (!selectedDoctor || !selectedPatient || !date) {
      alert("Please fill all fields");
      return;
    }

    const doctor = doctors.find(d => d.email === selectedDoctor);
    const patient = patients.find(p => p.email === selectedPatient);

    const newAppointment = {
      id: Date.now(),
      doctorEmail: doctor.email,
      doctorName: doctor.name || doctor.email,
      patientEmail: patient.email,
      patientName: patient.name || patient.email,
      date,
      status: "Scheduled"
    };

    const updatedAppointments = [...appointments, newAppointment];

    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    setSelectedDoctor("");
    setSelectedPatient("");
    setDate("");

    loadData();
  };

  const deleteAppointment = (id) => {

    if (!window.confirm("Delete this appointment?"))
      return;

    const updatedAppointments =
      appointments.filter(a => a.id !== id);

    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    loadData();
  };


  const styles = {

    container: {
      padding: "30px",
      background: "#f4f6f9",
      minHeight: "100vh",
      fontFamily: "Arial"
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "25px"
    },

    count: {
      background: "#2563eb",
      color: "white",
      padding: "8px 15px",
      borderRadius: "20px",
      fontWeight: "bold"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "350px 1fr",
      gap: "25px"
    },

    card: {
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
    },

    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc"
    },

    button: {
      width: "100%",
      padding: "10px",
      background: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold"
    },

    table: {
      width: "100%",
      borderCollapse: "collapse"
    },

    th: {
      background: "#2563eb",
      color: "white",
      padding: "12px",
      textAlign: "left"
    },

    td: {
      padding: "12px",
      borderBottom: "1px solid #eee"
    },

    badge: {
      background: "#16a34a",
      color: "white",
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold"
    },

    deleteBtn: {
      background: "#dc2626",
      color: "white",
      border: "none",
      padding: "6px 12px",
      borderRadius: "6px",
      cursor: "pointer"
    },

    noData: {
      padding: "20px",
      textAlign: "center",
      color: "gray"
    }

  };


  return (

    <div style={styles.container}>


      <div style={styles.header}>

        <h1>Hospital Appointment Management</h1>

        <div style={styles.count}>
          Total Appointments: {appointments.length}
        </div>

      </div>


      <div style={styles.grid}>


        <div style={styles.card}>

          <h2>Book New Appointment</h2>

          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            style={styles.input}
          >

            <option value="">Select Doctor</option>

            {doctors.map((doc, index) => (
              <option key={index} value={doc.email}>
                {doc.name || doc.email}
              </option>
            ))}

          </select>


          <select
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(e.target.value)}
            style={styles.input}
          >

            <option value="">Select Patient</option>

            {patients.map((pat, index) => (
              <option key={index} value={pat.email}>
                {pat.name || pat.email}
              </option>
            ))}

          </select>


          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />


          <button
            style={styles.button}
            onClick={addAppointment}
          >
            Book Appointment
          </button>

        </div>



        <div style={styles.card}>

          <h2>Appointment Records</h2>

          <table style={styles.table}>

            <thead>

              <tr>

                <th style={styles.th}>Doctor</th>

                <th style={styles.th}>Patient</th>

                <th style={styles.th}>Date</th>

                <th style={styles.th}>Status</th>

                <th style={styles.th}>Action</th>

              </tr>

            </thead>


            <tbody>

              {appointments.length === 0 ? (

                <tr>
                  <td colSpan="5" style={styles.noData}>
                    No appointments found
                  </td>
                </tr>

              ) : (

                appointments.map((appt) => (

                  <tr key={appt.id}>

                    <td style={styles.td}>
                      {appt.doctorName}
                    </td>

                    <td style={styles.td}>
                      {appt.patientName}
                    </td>

                    <td style={styles.td}>
                      {appt.date}
                    </td>

                    <td style={styles.td}>
                      <span style={styles.badge}>
                        {appt.status}
                      </span>
                    </td>

                    <td style={styles.td}>

                      <button
                        style={styles.deleteBtn}
                        onClick={() => deleteAppointment(appt.id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}
