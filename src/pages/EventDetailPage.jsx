import { useParams } from 'react-router-dom';

function EventDetailPage() {
    const { id } = useParams();
    return (
        <div>
            <h2>Event Details</h2>
            <p>Details for event ID: {id}</p>
        </div>
    );
}

export default EventDetailPage;
