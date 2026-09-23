import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Ticket() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const savedTicket = localStorage.getItem("latestTicket");

    if (savedTicket) {
      setTicket(JSON.parse(savedTicket));
    }
  }, []);

  if (!ticket) {
    return (
      <div className="empty-ticket">
        <h2>Ticket not found</h2>

        <button
          className="book-btn"
          onClick={() => navigate("/events")}
        >
          Browse Events
        </button>
      </div>
    );
  }

  return (
    <div className="ticket-page">

      <div className="ticket-card">

        <div className="ticket-top">
          <div>
            <h1>🎟️ TicketBook</h1>
            <p>Digital Event Ticket</p>
          </div>

          <div className="confirmed">
            ✓ CONFIRMED
          </div>
        </div>

        <div className="ticket-divider"></div>

        <div className="ticket-content">

          <h2>{ticket.eventName}</h2>

          <div className="ticket-details">

            <div>
              <span>Booking ID</span>
              <strong>{ticket.bookingId}</strong>
            </div>

            <div>
              <span>Seats</span>
              <strong>{ticket.seats.join(", ")}</strong>
            </div>

            <div>
              <span>Number of Seats</span>
              <strong>{ticket.seats.length}</strong>
            </div>

            <div>
              <span>Payment Method</span>
              <strong>{ticket.paymentMethod}</strong>
            </div>

            <div>
              <span>Booking Date</span>
              <strong>{ticket.bookingDate}</strong>
            </div>

            <div>
              <span>Total Amount</span>
              <strong>₹{ticket.totalAmount}</strong>
            </div>

          </div>

        </div>

        <div className="ticket-divider"></div>

        <div className="ticket-footer">

          <p>
            Please show this digital ticket at the venue.
          </p>

          <button
            className="book-btn"
            onClick={() => navigate("/my-bookings")}
          >
            View My Bookings
          </button>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default Ticket;