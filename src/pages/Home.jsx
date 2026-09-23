import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Book Your Tickets Easily</h1>

          <p>
            Discover movies, concerts and sports events.
            Select your seats and book your tickets online.
          </p>

          <Link to="/events" className="btn">
            Browse Events
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose TicketBook?</h2>

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