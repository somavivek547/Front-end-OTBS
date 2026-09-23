import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const savedBooking = localStorage.getItem("currentBooking");

    if (savedBooking) {
      setBooking(JSON.parse(savedBooking));
    }
  }, []);

  const handlePayment = () => {
    if (!booking) {
      alert("No booking found.");
      navigate("/events");
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      const loggedInUser =
  JSON.parse(localStorage.getItem("loggedInUser"));

const bookingWithDetails = {
  ...booking,
  bookingId: "TB" + Date.now(),
  userId: loggedInUser?.id,
  userName: loggedInUser?.name,
  userEmail: loggedInUser?.email,
  paymentMethod: paymentMethod,
  bookingDate: new Date().toLocaleString(),
  status: "Confirmed"
};

      const oldBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      oldBookings.push(bookingWithDetails);

      localStorage.setItem(
        "bookings",
        JSON.stringify(oldBookings)
      );

      localStorage.setItem(
        "latestTicket",
        JSON.stringify(bookingWithDetails)
      );

      localStorage.removeItem("currentBooking");

      setProcessing(false);

      navigate(
        `/ticket/${bookingWithDetails.bookingId}`
      );
    }, 1500);
  };

  if (!booking) {
    return (
      <div className="empty-payment">
        <h2>No booking found</h2>
        <button
          className="proceed-btn"
          onClick={() => navigate("/events")}
        >
          Browse Events
        </button>
      </div>
    );
  }

  return (
    <div className="payment-page">

      <div className="payment-container">

        <div className="payment-box">

          <h1>Payment</h1>

          <p className="payment-subtitle">
            Complete your booking payment
          </p>

          <div className="payment-summary">

            <h2>{booking.eventName}</h2>

            <p>
              <strong>Seats:</strong>{" "}
              {booking.seats.join(", ")}
            </p>

            <p>
              <strong>Number of Seats:</strong>{" "}
              {booking.seats.length}
            </p>

            <p>
              <strong>Price per Seat:</strong>{" "}
              ₹{booking.pricePerSeat}
            </p>

            <hr />

            <h2>
              Total Amount: ₹{booking.totalAmount}
            </h2>

          </div>

          <h3>Select Payment Method</h3>

          <div className="payment-methods">

            <label>
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Debit / Credit Card
            </label>

            <label>
              <input
                type="radio"
                value="Net Banking"
                checked={paymentMethod === "Net Banking"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Net Banking
            </label>

          </div>

          <button
            className="pay-btn"
            onClick={handlePayment}
            disabled={processing}
          >
            {processing
              ? "Processing Payment..."
              : `Pay ₹${booking.totalAmount}`}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Payment;