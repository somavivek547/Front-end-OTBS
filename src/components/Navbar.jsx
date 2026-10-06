import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showLocations, setShowLocations] = useState(false);

  const [location, setLocation] = useState(
    localStorage.getItem("selectedLocation") || "Vijayawada"
  );

  const locations = [
    "Vijayawada",
    "Hyderabad",
    "Visakhapatnam",
    "Bengaluru",
    "Chennai",
    "Mumbai",
    "Delhi",
  ];

  const selectLocation = (city) => {
    setLocation(city);
    localStorage.setItem("selectedLocation", city);
    setShowLocations(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        🎟️ TicketBook
      </div>

      {/* Location Selector */}
      <div className="location-container">

        <button
          className="location-button"
          onClick={() => setShowLocations(!showLocations)}
        >
          📍 {location} ▼
        </button>

        {showLocations && (
          <div className="location-dropdown">

            <h3>Select Your City</h3>

            <input
              type="text"
              placeholder="🔍 Search for your city"
              className="location-search"
            />

            <p className="popular-title">Popular Cities</p>

            {locations.map((city) => (
              <button
                key={city}
                className="city-option"
                onClick={() => selectLocation(city)}
              >
                📍 {city}
              </button>
            ))}

          </div>
        )}

      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/my-bookings">My Bookings</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/admin/login">Admin</Link>
      </div>

    </nav>
  );
}

export default Navbar;