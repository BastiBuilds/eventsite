import "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import {Component} from "react";

class EventCard extends Component {
    render() {
        let {event} = this.props;
        return (
            <div className="event-card">
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <Link to={`/event/${event.id}`}>More Info</Link>
            </div>
        );
    }
}

EventCard.propTypes = {event: PropTypes.any}

export default EventCard;
