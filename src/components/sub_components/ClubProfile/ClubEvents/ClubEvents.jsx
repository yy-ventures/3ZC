import React from 'react';
import "./ClubEvents.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ClubEvents = () => {
    return (
        <div className="club-events px-5 pt-4 pb-5 my-5">
            <div className="mt-3 club-events-header py-3">
                <h6>Club Events</h6>
            </div>
            <div className="event-list mt-4 pb-4">
                <h5>Event Name</h5>
                <h6>Event Date</h6>
            </div>
            <div className="event-list mt-4 pb-4">
                <h5>Event Name</h5>
                <h6>Event Date</h6>
            </div>
            <div className="event-list mt-4 pb-4">
                <h5>Event Name</h5>
                <h6>Event Date</h6>
            </div>
            <div className="event-list mt-4 pb-4">
                <h5>Event Name</h5>
                <h6>Event Date</h6>
            </div>
            <button><FontAwesomeIcon icon={faChevronDown} /></button>
        </div>
    );
};

export default ClubEvents;