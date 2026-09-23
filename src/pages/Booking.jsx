import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SeatSelector from "../components/SeatSelector";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);

  const defaultEvents = [
    {
      id: 1,
      title: "Kalki 2898 AD",
      category: "Movie",
      date: "25 September 2026",
      location: "PVR Cinemas, Vijayawada",
      price: 250
    },
    {
      id: 2,
      title: "Music Fest 2026",
      category: "Concert",
      date: "28 September 2026",
      location: "KL University Ground",
      price: 500
    },
    {
      id: 3,
      title: "Cricket Championship",
      category: "Sports",
      date: "30 September 2026",
      location: "Vijayawada Stadium",
      price: 750
    }
  ];

  const savedEvents = localStorage.getItem("events");

  const events = savedEvents
    ? JSON.parse(savedEvents)
    : defaultEvents;

  const event = events.find(
    (item) => item.id === Number(id)
  );

  if (!event) {
    return (
      <div className="no-bookings">
        <h1>Event Not Found</h1>

        <button
          className="book-btn"
          onClick={() => navigate("/events")}
        >
          Back to Events
        </button>
      </div>
    );
  }

  const totalAmount =
    selectedSeats.length * Number(event.price);

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    const bookingData = {
      eventId: event.id,
      eventName: event.title,
      category: event.category,
      date: event.date,
      location: event.location,
      seats: selectedSeats,
      pricePerSeat: Number(event.price),
      totalAmount: totalAmount
    };

    localStorage.setItem(
      "currentBooking",
      JSON.stringify(bookingData)
    );

    navigate("/payment");
  };

  return (
    <div className="booking-page">

      <div className="booking-header">
        <h1>{event.title}</h1>

        <p>
          {event.category} | {event.date}
        </p>

        <p>
          📍 {event.location}
        </p>
      </div>

      <div className="booking-container">

        <SeatSelector
          onSeatsChange={setSelectedSeats}
        />

        <div className="booking-summary">

          <h2>Booking Summary</h2>

          <p>
            <strong>Event:</strong>{" "}
            {event.title}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {event.category}
          </p>

          <p>
            <strong>Selected Seats:</strong>{" "}
            {selectedSeats.length === 0
              ? "None"
              : selectedSeats.join(", ")}
          </p>

          <p>
            <strong>Number of Seats:</strong>{" "}
            {selectedSeats.length}
          </p>

          <p>
            <strong>Price per Seat:</strong>{" "}
            ₹{event.price}
          </p>

          <hr />

          <h2>
            Total: ₹{totalAmount}
          </h2>

          <button
            className="proceed-btn"
            onClick={handleProceed}
          >
            Proceed to Payment
          </button>

        </div>

      </div>

    </div>
  );
}

export default Booking;