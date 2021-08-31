import React from 'react';
import "./ClubDesc.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ClubDesc = () => {
    return (
        <div className="club-desc p-5">
            <div className="club-basic-info">
                <div className="club-basic-info-header">
                    <h6>Basic Information</h6>
                    <a href="/">Edit info <FontAwesomeIcon icon={faChevronRight} /></a>
                </div>
                <div className="mt-4 club-basic-info-list">
                    <label>Area of Focus</label>
                    <h6>Social Business</h6>
                </div>
                <div className="mt-4 club-basic-info-list">
                    <label>3ZERO Club Goal</label>
                    <h6>Zero Unemployment by Unleashing Entrepreneurship in All.</h6>
                </div>
                <div className="mt-4 club-basic-info-list">
                    <label>Club Description</label>
                    <h6>We work toward a better future by raising awareness and helping new social businesses achieve their goals</h6>
                </div>
            </div>
            <div className="club-member-info mt-5">
                <div className="club-member-info-header">
                    <h6>Membership Information</h6>
                    <a href="/">Edit info <FontAwesomeIcon icon={faChevronRight} /></a>
                </div>
                <div className="mt-4 club-member-info-list">
                    <label>Key person</label>
                    <div className="club-member-description d-flex justify-content-between w-50">
                        <h5>Name of KP</h5>
                        <h5>E-Mail Address</h5>
                    </div>
                </div>
                <div className="mt-4 club-member-info-list">
                    <label>Deputy Key person</label>
                    <div className="club-member-description d-flex justify-content-between w-50">
                        <h5>Name of DKP</h5>
                        <h5>E-Mail Address</h5>
                    </div>
                </div>
                <div className="mt-4 club-member-info-list">
                    <label>Remaining Members</label>
                    <div className="club-member-description d-flex justify-content-between w-50">
                        <h5>Member's Name</h5>
                        <h5>E-Mail Address</h5>
                    </div>
                    <div className="club-member-description d-flex justify-content-between w-50">
                        <h5>Member's Name</h5>
                        <h5>E-Mail Address</h5>
                    </div>
                    <div className="club-member-description d-flex justify-content-between w-50">
                        <h5>Member's Name</h5>
                        <h5>E-Mail Address</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubDesc;