import "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
    const { id } = useParams();
    const event = { id, title: "Concert in Basel", date: "2025-02-01", description: "A great concert!" };

    return (
        <div className="event-detail-page">
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
        </div>
    );
};

export default EventDetailPage;
