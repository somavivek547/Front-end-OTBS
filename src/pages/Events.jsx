
import { useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const imageBase = `${import.meta.env.BASE_URL}images/`;

  const defaultEvents = [
    {
      id: 1,
      title: "Kalki 2898 AD",
      category: "Movie",
      date: "25 September 2026",
      location: "PVR Cinemas, Vijayawada",
      price: 250,
      emoji: "🎬",
      image: `${imageBase}kalki.jpj.jpeg`
    },
    {
      id: 2,
      title: "Music Fest 2026",
      category: "Concert",
      date: "28 September 2026",
      location: "KL University Ground",
      price: 500,
      emoji: "🎵",
      image: `${imageBase}fest.jpj.jpeg`
    },
    {
      id: 3,
      title: "Cricket Championship",
      category: "Sports",
      date: "30 September 2026",
      location: "Vijayawada Stadium",
      price: 750,
      emoji: "🏏",
      image: `${imageBase}circket.jpg`
    },
    {
      id: 4,
      title: "Salaar",
      category: "Movie",
      date: "30 September 2026",
      location: "PVR Cinemas, Vijayawada",
      price: 250,
      emoji: "🎬",
      image: `${imageBase}salaar.jpj.jpeg`
    },
    {
      id: 5,
      title: "Comedy Show 2026",
      category: "Comedy",
      date: "5 October 2026",
      location: "KL University Auditorium",
      price: 300,
      emoji: "😂",
      image: `${imageBase}comedy.jpg`
    }
  ];

  const [events] = useState(() => {
    const savedEvents = localStorage.getItem("events");

    if (!savedEvents) {
      localStorage.setItem("events", JSON.stringify(defaultEvents));
      return defaultEvents;
    }

    const parsedEvents = JSON.parse(savedEvents);
    const updatedEvents = [...parsedEvents];

    defaultEvents.forEach((defaultEvent) => {
      const exists = updatedEvents.some(
        (event) => event.id === defaultEvent.id
      );

      if (!exists) {
        updatedEvents.push(defaultEvent);
      }
    });

    const finalEvents = updatedEvents.map((event) => {
      const defaultEvent = defaultEvents.find(
        (item) => item.id === event.id
      );

      if (defaultEvent) {
        return {
          ...event,
          image: defaultEvent.image
        };
      }

      return event;
    });

    localStorage.setItem("events", JSON.stringify(finalEvents));

    return finalEvents;
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
              <div className="event-card" key={event.id}>

                <div className="event-image">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <span>{event.emoji || "🎟️"}</span>
                  )}
                </div>

                <div className="event-content">
                  <span className="event-category">
                    {event.category}
                  </span>

                  <h2>{event.title}</h2>

                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>

                  <div className="event-bottom">
                    <strong>₹{event.price}</strong>

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
