import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <style>{`

      .home-container{
        padding:40px;
        background:linear-gradient(180deg,#eef2f7 0%,#e0e7ff 100%);
        min-height:100vh;
        font-family:'Segoe UI',system-ui;
      }

      /* HERO */

      .home-hero{
        background:linear-gradient(135deg,#0f172a,#2563eb);
        color:white;
        padding:60px 40px;
        border-radius:16px;
        box-shadow:0 20px 50px rgba(0,0,0,0.25);
        margin-bottom:40px;
      }

      .home-hero h1{
        font-size:38px;
        margin-bottom:10px;
        font-weight:700;
        letter-spacing:0.5px;
      }

      .home-hero p{
        font-size:16px;
        opacity:0.9;
        max-width:600px;
      }

      /* SECTION */

      .section{
        margin-top:40px;
      }

      .section-title{
        font-size:24px;
        font-weight:700;
        color:#0f172a;
        margin-bottom:20px;
      }

      /* GRID */

      .grid{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
        gap:25px;
      }

      /* PREMIUM CARD */

      .card{
        background:rgba(255,255,255,0.75);
        backdrop-filter:blur(12px);
        border-radius:14px;
        padding:28px;
        box-shadow:
        0 8px 20px rgba(0,0,0,0.08),
        inset 0 0 0 1px rgba(255,255,255,0.4);
        transition:all 0.25s ease;
      }

      .card:hover{
        transform:translateY(-6px);
        box-shadow:
        0 18px 40px rgba(0,0,0,0.15),
        inset 0 0 0 1px rgba(255,255,255,0.6);
      }

      /* PORTAL */

      .portal-icon{
        font-size:32px;
        margin-bottom:10px;
      }

      .portal-title{
        font-size:18px;
        font-weight:600;
        margin-bottom:8px;
        color:#0f172a;
      }

      .portal-desc{
        font-size:14px;
        color:#475569;
        margin-bottom:18px;
      }

      .portal-btn{
        background:#2563eb;
        color:white;
        border:none;
        padding:10px 18px;
        border-radius:8px;
        font-weight:600;
        text-decoration:none;
        display:inline-block;
        transition:0.2s;
      }

      .portal-btn:hover{
        background:#1e40af;
      }

      /* STATS */

      .stat-number{
        font-size:30px;
        font-weight:700;
        color:#2563eb;
      }

      .stat-label{
        font-size:14px;
        color:#64748b;
      }

      /* RATINGS */

      .rating{
        display:flex;
        justify-content:space-between;
        margin:10px 0;
      }

      .stars{
        color:#facc15;
        font-size:18px;
      }

      /* TESTIMONIAL */

      .testimonial-text{
        font-size:14px;
        color:#334155;
        line-height:1.5;
        margin-bottom:10px;
      }

      .testimonial-author{
        font-size:13px;
        font-weight:600;
        color:#2563eb;
      }

      /* FEATURES */

      .feature-item{
        font-size:15px;
        font-weight:600;
        color:#0f172a;
        padding:8px 0;
      }

      /* RESPONSIVE */

      @media(max-width:768px){

        .home-container{
          padding:20px;
        }

        .home-hero{
          padding:40px 25px;
        }

        .home-hero h1{
          font-size:28px;
        }

      }

      `}</style>

      <div className="home-container">

        {/* HERO */}

        <div className="home-hero">
          <h1>Hospital Management System</h1>
          <p>
            Enterprise-grade healthcare platform for managing hospital
            operations, patient care, and medical workflows efficiently.
          </p>
        </div>


        {/* PORTALS */}

        <div className="section">

          <div className="section-title">
            Access Portals
          </div>

          <div className="grid">

            <div className="card">
              <div className="portal-icon">🏥</div>
              <div className="portal-title">Admin Portal</div>
              <div className="portal-desc">
                Full control over hospital system, doctors, and analytics.
              </div>
              <Link to="/login" className="portal-btn">
                Admin Login
              </Link>
            </div>

            <div className="card">
              <div className="portal-icon">🩺</div>
              <div className="portal-title">Doctor Portal</div>
              <div className="portal-desc">
                Manage patients, appointments, and medical records.
              </div>
              <Link to="/login" className="portal-btn">
                Doctor Login
              </Link>
            </div>

            <div className="card">
              <div className="portal-icon">👤</div>
              <div className="portal-title">Patient Portal</div>
              <div className="portal-desc">
                Book appointments and view prescriptions securely.
              </div>
              <Link to="/signup" className="portal-btn">
                Patient Login
              </Link>
            </div>

          </div>

        </div>


        {/* STATS */}

        <div className="section">

          <div className="section-title">
            System Statistics
          </div>

          <div className="grid">

            <div className="card">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Overall Rating</div>
            </div>

            <div className="card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Doctors</div>
            </div>

            <div className="card">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Patients</div>
            </div>

            <div className="card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Support</div>
            </div>

          </div>

        </div>


        {/* RATINGS */}

        <div className="section">

          <div className="section-title">
            Patient Satisfaction
          </div>

          <div className="card">

            <div className="rating">
              Care Quality <span className="stars">★★★★★</span>
            </div>

            <div className="rating">
              Doctor Expertise <span className="stars">★★★★★</span>
            </div>

            <div className="rating">
              System Efficiency <span className="stars">★★★★☆</span>
            </div>

          </div>

        </div>


        {/* TESTIMONIAL */}

        <div className="section">

          <div className="section-title">
            Testimonials
          </div>

          <div className="grid">

            <div className="card">
              <div className="testimonial-text">
                Excellent hospital system. Fast and reliable.
              </div>
              <div className="testimonial-author">
                — Patient
              </div>
            </div>

            <div className="card">
              <div className="testimonial-text">
                Makes managing patients extremely easy.
              </div>
              <div className="testimonial-author">
                — Doctor
              </div>
            </div>

            <div className="card">
              <div className="testimonial-text">
                Very secure and professionally designed platform.
              </div>
              <div className="testimonial-author">
                — Administrator
              </div>
            </div>

          </div>

        </div>


        {/* FEATURES */}

        <div className="section">

          <div className="section-title">
            Platform Features
          </div>

          <div className="card">

            <div className="feature-item">🔒 Secure Medical Records</div>
            <div className="feature-item">⚡ Fast Appointment Booking</div>
            <div className="feature-item">📊 Real-time Dashboard</div>
            <div className="feature-item">🌐 Cloud-based Access</div>

          </div>

        </div>


      </div>
    </>
  );
};

export default Home;