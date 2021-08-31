import React from 'react';
import "./ClubInfo.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ClubInfo = () => {
    return (
        <div className="club-info">
            <div className="club-info-header d-flex align-items-center justify-content-center text-center">
                <h2>3ZERO Club for <br/> Social Business</h2>
            </div>
            <div className="club-info-body px-5 py-4">
                <div className="mt-4">
                    <label>Club Name</label>
                    <h6>3ZERO Club for Social Business</h6>
                </div>
                <div className="mt-4">
                    <label>Club ID</label>
                    <h6>21000008899</h6>
                </div>
                <div className="mt-4">
                    <label>Club Location</label>
                    <h6>Dhaka, Bangladesh</h6>
                </div>
                <div className="mt-4">
                    <label>Club Created On</label>
                    <h6>dd - mm - yy</h6>
                </div>
                <div className="mt-4 edit-info-link">
                    <a href="/">Edit Info <FontAwesomeIcon icon={faChevronRight} /></a>
                </div>
            </div>
        </div>
    );
};

export default ClubInfo;