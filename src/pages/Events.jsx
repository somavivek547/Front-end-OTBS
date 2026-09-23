import { useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const defaultEvents = [
    {
      id: 1,
      title: "Kalki 2898 AD",
      category: "Movie",
      date: "25 September 2026",
      location: "PVR Cinemas, Vijayawada",
      price: 250,
      emoji: "🎬"
    },
    {
      id: 2,
      title: "Music Fest 2026",
      category: "Concert",
      date: "28 September 2026",
      location: "KL University Ground",
      price: 500,
      emoji: "🎵"
    },
    {
      id: 3,
      title: "Cricket Championship",
      category: "Sports",
      date: "30 September 2026",
      location: "Vijayawada Stadium",
      price: 750,
      emoji: "🏏"
    }
  ];

  const [events] = useState(() => {
    const savedEvents = localStorage.getItem("events");

    if (savedEvents) {
      return JSON.parse(savedEvents);
    }

    localStorage.setItem(
      "events",
      JSON.stringify(defaultEvents)
    );

    return defaultEvents;
  });

  return (
    <div>

      <section className="events-header">
        <h1>Available Events</h1>
        <p>Choose an event and book your tickets.</p>
      </section>

      <section className="events-container">

        {events.length === 0 ? (
          <div className="no-bookings">
            <h2>No Events Available</h2>
            <p>Please check again later.</p>
          </div>
        ) : (
          <div className="events-grid">

            {events.map((event) => (
              <div
                className="event-card"
                key={event.id}
              >

                <div className="event-image">
                  <span>
                    {event.emoji || "🎟️"}
                  </span>
                </div>

                <div className="event-content">

                  <span className="event-category">
                    {event.category}
                  </span>

                  <h2>{event.title}</h2>

                  <p>
                    📅 {event.date}
                  </p>

                  <p>
                    📍 {event.location}
                  </p>

                  <div className="event-bottom">

                    <strong>
                      ₹{event.price}
                    </strong>

                    <Link
                      to={`/booking/${event.id}`}
                      className="book-btn"
                    >
                      Book Now
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

    </div>
  );
}

export default Events;