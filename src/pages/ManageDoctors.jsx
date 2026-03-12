import React, { useEffect, useState } from "react";

export default function ManageDoctors() {

  const [doctors, setDoctors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    initializeDoctors();
    loadDoctors();
  }, []);

  const defaultDoctors = [

    { name: "Sai Charan", email: "saicharan@hospital.com" },
    { name: "Karthik Reddy", email: "karthik@hospital.com" },
    { name: "Ravi Teja", email: "raviteja@hospital.com" },
    { name: "Sandeep Kumar", email: "sandeep@hospital.com" },
    { name: "Vamsi Krishna", email: "vamsi@hospital.com" },
    { name: "Harsha Vardhan", email: "harsha@hospital.com" },
    { name: "Praneeth Reddy", email: "praneeth@hospital.com" },
    { name: "Nikhil Sai", email: "nikhil@hospital.com" },
    { name: "Ajay Kumar", email: "ajay@hospital.com" },
    { name: "Rahul Reddy", email: "rahul@hospital.com" },
    { name: "Teja Varma", email: "teja@hospital.com" },
    { name: "Surya Prakash", email: "surya@hospital.com" },
    { name: "Arjun Reddy", email: "arjun@hospital.com" },
    { name: "Manoj Kumar", email: "manoj@hospital.com" },
    { name: "Srinivas Rao", email: "srinivas@hospital.com" }

  ];

  const initializeDoctors = () => {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingDoctorEmails = users
      .filter(u => u.role === "DOCTOR")
      .map(u => u.email);

    defaultDoctors.forEach(doc => {

      if (!existingDoctorEmails.includes(doc.email)) {

        users.push({
          name: doc.name,
          email: doc.email,
          password: "doctor123",
          role: "DOCTOR"
        });

      }

    });

    localStorage.setItem("users", JSON.stringify(users));
  };

  const loadDoctors = () => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const doctorList = users.filter(
      user => user.role === "DOCTOR"
    );

    setDoctors(doctorList);
  };


  // ✅ WORKLOAD CALCULATION (SIMULATED)
  const getWorkload = (email) => {

    let hash = 0;

    for (let i = 0; i < email.length; i++) {
      hash += email.charCodeAt(i);
    }

    return (hash % 90) + 10; // workload between 10% and 99%
  };


  const getWorkloadColor = (percent) => {

    if (percent < 40) return "#16a34a"; // green
    if (percent < 70) return "#eab308"; // yellow
    return "#dc2626"; // red

  };


  const addDoctor = () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === email);

    if (exists) {
      alert("Doctor already exists");
      return;
    }

    users.push({
      email,
      password,
      role: "DOCTOR"
    });

    localStorage.setItem("users", JSON.stringify(users));

    setEmail("");
    setPassword("");

    loadDoctors();
  };


  const deleteDoctor = (email) => {

    if (!window.confirm("Delete this doctor?"))
      return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.filter(
      user => user.email !== email
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    loadDoctors();
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
      borderRadius: "20px"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "320px 1fr",
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
      marginBottom: "12px"
    },

    addBtn: {
      width: "100%",
      padding: "10px",
      background: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "6px"
    },

    table: {
      width: "100%",
      borderCollapse: "collapse"
    },

    th: {
      background: "#2563eb",
      color: "white",
      padding: "12px"
    },

    td: {
      padding: "12px",
      borderBottom: "1px solid #eee"
    },

    workloadBar: {
      width: "100%",
      height: "10px",
      background: "#e5e7eb",
      borderRadius: "10px",
      overflow: "hidden"
    },

    deleteBtn: {
      background: "#dc2626",
      color: "white",
      padding: "6px 12px",
      border: "none",
      borderRadius: "6px"
    }

  };


  return (

    <div style={styles.container}>

      <div style={styles.header}>

        <h1>Doctor Management</h1>

        <div style={styles.count}>
          Total Doctors: {doctors.length}
        </div>

      </div>


      <div style={styles.grid}>


        <div style={styles.card}>

          <h2>Add Doctor</h2>

          <input
            type="email"
            placeholder="Doctor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button style={styles.addBtn} onClick={addDoctor}>
            Add Doctor
          </button>

        </div>


        <div style={styles.card}>

          <h2>Doctor Directory</h2>

          <table style={styles.table}>

            <thead>

              <tr>

                <th style={styles.th}>Name</th>

                <th style={styles.th}>Email</th>

                <th style={styles.th}>Workload</th>

                <th style={styles.th}>Action</th>

              </tr>

            </thead>

            <tbody>

              {doctors.map((doctor, index) => {

                const workload = getWorkload(doctor.email);
                const color = getWorkloadColor(workload);

                return (

                  <tr key={index}>

                    <td style={styles.td}>
                      {doctor.name || "Doctor"}
                    </td>

                    <td style={styles.td}>
                      {doctor.email}
                    </td>

                    <td style={styles.td}>

                      <div style={{marginBottom:"5px"}}>
                        {workload}%
                      </div>

                      <div style={styles.workloadBar}>

                        <div
                          style={{
                            width: workload + "%",
                            height: "100%",
                            background: color
                          }}
                        />

                      </div>

                    </td>

                    <td style={styles.td}>

                      <button
                        style={styles.deleteBtn}
                        onClick={() => deleteDoctor(doctor.email)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}
