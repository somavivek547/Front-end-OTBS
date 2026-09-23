import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <div>
          <h1>🎟️ Admin Dashboard</h1>
          <p>Manage your Online Ticket Booking System</p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="admin-grid">

        <div className="admin-card">
          <h2>🎬 Manage Events</h2>

          <p>
            Add, edit and delete movies,
            concerts and sports events.
          </p>

          <button
            className="admin-btn"
            onClick={() => navigate("/admin/events")}
          >
            Manage Events
          </button>
        </div>

        <div className="admin-card">
          <h2>🎟️ Manage Bookings</h2>

          <p>
            View all customer bookings
            and booking details.
          </p>

          <button
            className="admin-btn"
            onClick={() => navigate("/admin/bookings")}
          >
            Manage Bookings
          </button>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;