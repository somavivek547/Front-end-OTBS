import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
const savedBookings =
  JSON.parse(localStorage.getItem("bookings")) || [];

const loggedInUser =
  JSON.parse(localStorage.getItem("loggedInUser"));

const userBookings = savedBookings.filter(
  (booking) =>
    booking.userEmail === loggedInUser?.email
);

setBookings(userBookings);
  }, []);

  const clearBookings = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all bookings?"
    );

    if (confirmDelete) {
      localStorage.removeItem("bookings");
      setBookings([]);
    }
  };

  return (
    <div className="my-bookings-page">

      <div className="my-bookings-header">
        <h1>My Bookings</h1>
        <p>View your booked tickets</p>
      </div>

      {bookings.length === 0 ? (
        <div className="no-bookings">
          <h2>🎟️ No Bookings Found</h2>

          <p>
            You haven't booked any tickets yet.
          </p>

          <button
            className="book-btn"
            onClick={() => navigate("/events")}
          >
            Browse Events
          </button>
        </div>
      ) : (
        <div className="bookings-container">

          <div className="bookings-top">
            <h2>
              Total Bookings: {bookings.length}
            </h2>

            <button
              className="clear-btn"
              onClick={clearBookings}
            >
              Clear Bookings
            </button>
          </div>

          <div className="bookings-grid">

            {bookings.map((booking, index) => (

              <div
                className="booking-card"
                key={booking.bookingId || index}
              >

                <div className="booking-card-header">

                  <h2>{booking.eventName}</h2>

                  <span className="status">
                    {booking.status}
                  </span>

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
                    <strong>Seats Count:</strong>{" "}
                    {booking.seats.length}
                  </p>

                  <p>
                    <strong>Payment:</strong>{" "}
                    {booking.paymentMethod}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {booking.bookingDate}
                  </p>

                  <p className="booking-price">
                    <strong>Total:</strong>{" "}
                    ₹{booking.totalAmount}
                  </p>

                </div>

                <button
                  className="view-ticket-btn"
                  onClick={() => {
                    localStorage.setItem(
                      "latestTicket",
                      JSON.stringify(booking)
                    );

                    navigate(
                      `/ticket/${booking.bookingId}`
                    );
                  }}
                >
                  View Ticket
                </button>

              </div>

            ))}

          </div>

        </div>
      )}

    </div>
  );
}

export default MyBookings;