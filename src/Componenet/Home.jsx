import React from 'react';

export default function Home() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#top">TechNova</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#top">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Who We Are</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">What We Do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Reach Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div className="container px-3">
          <h1 className="display-3 fw-bold">Innovate. Build. Inspire.</h1>
          <p className="lead mt-3">We craft intelligent solutions for tomorrow’s world.</p>
          <button className="btn btn-outline-light btn-lg mt-4">Explore Our Vision</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold">Who We Are</h2>
          <p className="mt-3 text-muted">
            TechNova is a passionate team of engineers and creators dedicated to pushing the boundaries of technology.
            From startups to enterprises, we deliver impactful solutions with purpose and clarity.
          </p>
        </div>
      </section>

      {/* Features Section */}
      {/* Features Section */}
<section id="features" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">What We Do</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow text-center p-4 hover-scale">
          <div className="card-body">
            <i className="fas fa-robot fa-3x text-primary mb-3"></i>
            <h5 className="card-title">Intelligent Automation</h5>
            <p className="card-text">
              We automate repetitive tasks using AI, freeing up time and boosting productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow text-center p-4 hover-scale">
          <div className="card-body">
            <i className="fas fa-laptop-code fa-3x text-primary mb-3"></i>
            <h5 className="card-title">Product Engineering</h5>
            <p className="card-text">
              From MVP to full-scale product, we design and develop robust digital solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow text-center p-4 hover-scale">
          <div className="card-body">
            <i className="fas fa-handshake fa-3x text-primary mb-3"></i>
            <h5 className="card-title">Tech Partnership</h5>
            <p className="card-text">
              We act as your long-term technology partner, aligned with your growth vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Reach Out</h2>
          <form className="mx-auto bg-white p-4 shadow rounded" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Full Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Work Email Address" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Let's Connect</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; {new Date().getFullYear()} TechNova. Innovating with Purpose.</p>
      </footer>

      {/* Custom CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .hero-section {
          height: 100vh;
          padding-top: 80px; /* Prevent content from hiding behind navbar */
          background: linear-gradient(to right, #667eea, #764ba2);
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.5rem;
          }
          .hero-section p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
