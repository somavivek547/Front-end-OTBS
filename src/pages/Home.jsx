
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero hero-cinema">
        <div className="cinema-overlay"></div>

        <div className="hero-content">
          <span className="hero-label">
            🎬 YOUR ENTERTAINMENT DESTINATION
          </span>

          <h1>
            Book Your Tickets <span>Easily</span>
          </h1>

          <p>
            Discover movies, concerts and sports events.
            Select your seats and book your tickets online.
          </p>

          <Link to="/events" className="btn browse-btn">
            Browse Events →
          </Link>

          <div className="hero-decoration">
            🎟️ &nbsp; 🍿 &nbsp; 🎥
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose TicketBook?</h2>

        <p className="features-subtitle">
          Everything you need for an amazing entertainment experience.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🎬 Movies</h3>
            <p>Book tickets for your favorite movies.</p>
          </div>

          <div className="feature-card">
            <h3>🎵 Concerts</h3>
            <p>Find and book exciting live concerts.</p>
          </div>

          <div className="feature-card">
            <h3>🏏 Sports</h3>
            <p>Book tickets for your favorite sports events.</p>
          </div>

          <div className="feature-card">
            <h3>🎟️ Digital Tickets</h3>
            <p>Get your ticket instantly after booking.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
