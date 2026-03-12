import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage";

import Home from "./pages/Home";
import AboutHospital from "./pages/AboutHospital";
import Contact from "./pages/Contact";
import DepartmentsPublic from "./pages/Departments";
import Doctors from "./pages/Doctors";

import Login from "./pages/Login";
import Signup from "./pages/Sihnup";

import Admin from "./pages/Admin";
import Patient from "./pages/patient";


// ADMIN PAGES
import ManageDoctors from "./pages/ManageDoctors";
import ManagePatients from "./pages/ManagePatients";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports";
import Departments from "./pages/Departments";


// DOCTOR PAGES
import DoctorDashboard from "./pages/Doctor";
import DoctorAppointments from "./pages/DoctorAppointments";
import PatientRecords from "./pages/PatientRecords";
import DoctorProfile from "./pages/DoctorProfile";


// PATIENT PAGES
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import MedicalHistory from "./pages/MedicalHistory";
import PatientProfile from "./pages/PatientProfile";







// Protected Route
const ProtectedRoute = ({ children, role }) => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (role && currentUser.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />}>

          {/* PUBLIC */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutHospital />} />
          <Route path="contact" element={<Contact />} />
          <Route path="departments" element={<DepartmentsPublic />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />


          {/* ADMIN */}
          <Route path="admin"
            element={
              <ProtectedRoute role="ADMIN">
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route path="admin/doctors"
            element={
              <ProtectedRoute role="ADMIN">
                <ManageDoctors />
              </ProtectedRoute>
            }
          />

          <Route path="admin/patients"
            element={
              <ProtectedRoute role="ADMIN">
                <ManagePatients />
              </ProtectedRoute>
            }
          />

          <Route path="admin/departments"
            element={
              <ProtectedRoute role="ADMIN">
                <Departments />
              </ProtectedRoute>
            }
          />

          <Route path="admin/appointments"
            element={
              <ProtectedRoute role="ADMIN">
                <Appointments />
              </ProtectedRoute>
            }
          />

          <Route path="admin/reports"
            element={
              <ProtectedRoute role="ADMIN">
                <Reports />
              </ProtectedRoute>
            }
          />


          {/* DOCTOR */}
          <Route path="doctor"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="doctor/appointments"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorAppointments />
              </ProtectedRoute>
            }
          />

          <Route path="doctor/patients"
            element={
              <ProtectedRoute role="DOCTOR">
                <PatientRecords />
              </ProtectedRoute>
            }
          />

          <Route path="doctor/profile"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorProfile />
              </ProtectedRoute>
            }
          />


          {/* PATIENT DASHBOARD */}
          <Route path="patient"
            element={
              <ProtectedRoute role="PATIENT">
                <Patient />
              </ProtectedRoute>
            }
          />


          {/* PATIENT PAGES */}

          <Route path="patient/book"
            element={
              <ProtectedRoute role="PATIENT">
                <BookAppointment />
              </ProtectedRoute>
            }
          />

          <Route path="patient/appointments"
            element={
              <ProtectedRoute role="PATIENT">
                <MyAppointments />
              </ProtectedRoute>
            }
          />

          <Route path="patient/history"
            element={
              <ProtectedRoute role="PATIENT">
                <MedicalHistory />
              </ProtectedRoute>
            }
          />

          <Route path="patient/profile"
            element={
              <ProtectedRoute role="PATIENT">
                <PatientProfile />
              </ProtectedRoute>
            }
          />

          


        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;
