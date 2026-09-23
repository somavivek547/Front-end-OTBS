import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageEvents() {
  const navigate = useNavigate();

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

  const [events, setEvents] = useState(() => {
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

  const [formData, setFormData] = useState({
    title: "",
    category: "Movie",
    date: "",
    location: "",
    price: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.date ||
      !formData.location ||
      !formData.price
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      date: formData.date,
      location: formData.location,
      price: Number(formData.price)
    };

    const updatedEvents = [...events, newEvent];

    setEvents(updatedEvents);

    localStorage.setItem(
      "events",
      JSON.stringify(updatedEvents)
    );

    setFormData({
      title: "",
      category: "Movie",
      date: "",
      location: "",
      price: ""
    });

    alert("Event added successfully!");
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedEvents = events.filter(
      (event) => event.id !== id
    );

    setEvents(updatedEvents);

    localStorage.setItem(
      "events",
      JSON.stringify(updatedEvents)
    );
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <div>
          <h1>🎬 Manage Events</h1>
          <p>Add and manage booking events</p>
        </div>

        <button
          className="admin-btn"
          onClick={() => navigate("/admin/dashboard")}
        >
          Dashboard
        </button>
      </div>

      {/* Add Event */}

      <div className="admin-form-card">

        <h2>➕ Add New Event</h2>

        <form
          className="event-form"
          onSubmit={handleAddEvent}
        >

          <div className="form-group">
            <label>Event Name</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event name"
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Movie">Movie</option>
              <option value="Concert">Concert</option>
              <option value="Sports">Sports</option>
              <option value="Event">Event</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
            />
          </div>

          <div className="form-group">
            <label>Price per Seat</label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="1"
            />
          </div>

          <button
            type="submit"
            className="admin-btn"
          >
            Add Event
          </button>

        </form>
      </div>

      {/* Event List */}

      <div className="admin-form-card">

        <h2>📋 Existing Events</h2>

        {events.length === 0 ? (
          <p>No events available.</p>
        ) : (
          <div className="admin-events">

            {events.map((event) => (
              <div
                className="admin-event-card"
                key={event.id}
              >

                <div>
                  <span className="event-category">
                    {event.category}
                  </span>

                  <h3>{event.title}</h3>

                  <p>📅 {event.date}</p>

                  <p>📍 {event.location}</p>

                  <strong>
                    ₹{event.price}
                  </strong>
                </div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(event.id)
                  }
                >
                  Delete
                </button>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default ManageEvents;