import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  });

  const handleDelete = (bookingId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedBookings = bookings.filter(
      (booking) => booking.bookingId !== bookingId
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <div>
          <h1>🎟️ Manage Bookings</h1>
          <p>View and manage customer bookings</p>
        </div>

        <button
          className="admin-btn"
          onClick={() => navigate("/admin/dashboard")}
        >
          Dashboard
        </button>
      </div>

      <div className="admin-form-card">

        <h2>
          Total Bookings: {bookings.length}
        </h2>

        {bookings.length === 0 ? (
          <div className="no-bookings">
            <h2>📭 No Bookings Found</h2>
            <p>
              There are currently no customer bookings.
            </p>
          </div>
        ) : (
          <div className="admin-bookings">

            {bookings.map((booking) => (
              <div
                className="admin-booking-card"
                key={booking.bookingId}
              >

                <div className="booking-card-header">

                  <div>
                    <h2>{booking.eventName}</h2>

                    <span className="status">
                      {booking.status}
                    </span>
                  </div>

                  <strong>
                    ₹{booking.totalAmount}
                  </strong>

                </div>

                <div className="booking-info">

                  <p>
                    <strong>Booking ID:</strong>{" "}
                    {booking.bookingId}
                  </p>

                  <p>
                    <strong>Seats:</strong>{" "}
                    {booking.seats.join(", ")}
                  </p>

                  <p>
                    <strong>Number of Seats:</strong>{" "}
                    {booking.seats.length}
                  </p>

                  <p>
                    <strong>Payment:</strong>{" "}
                    {booking.paymentMethod}
                  </p>

                  <p>
                    <strong>Booking Date:</strong>{" "}
                    {booking.bookingDate}
                  </p>

                </div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(booking.bookingId)
                  }
                >
                  Delete Booking
                </button>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default ManageBookings;