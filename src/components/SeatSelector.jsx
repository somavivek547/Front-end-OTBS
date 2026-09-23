import { useState } from "react";

function SeatSelector({ onSeatsChange }) {
  const seats = Array.from({ length: 30 }, (_, index) => index + 1);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      const updatedSeats = selectedSeats.filter(
        (seat) => seat !== seatNumber
      );

      setSelectedSeats(updatedSeats);
      onSeatsChange(updatedSeats);
    } else {
      const updatedSeats = [...selectedSeats, seatNumber];

      setSelectedSeats(updatedSeats);
      onSeatsChange(updatedSeats);
    }
  };

  return (
    <div className="seat-section">

      <h2>Select Your Seats</h2>

      <div className="screen">
        SCREEN
      </div>

      <div className="seat-grid">
        {seats.map((seat) => (
          <button
            key={seat}
            className={
              selectedSeats.includes(seat)
                ? "seat selected"
                : "seat"
            }
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>

      <div className="seat-info">
        <span>
          <span className="legend available"></span>
          Available
        </span>

        <span>
          <span className="legend selected-legend"></span>
          Selected
        </span>
      </div>

    </div>
  );
}

export default SeatSelector;