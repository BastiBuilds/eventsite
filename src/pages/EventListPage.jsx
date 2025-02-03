import "react";
import EventCard from "../components/EventCard";

const EventListPage = () => {
    const events = [
        { id: 1, title: "Concert in Basel", date: "2025-02-01" },
        { id: 2, title: "Art Exhibit in Zürich", date: "2025-02-05" },
    ];

    return (
        <div className="event-list-page">
            <h2>Upcoming Events</h2>
            <div className="event-list">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventListPage;
