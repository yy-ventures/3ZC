import React from 'react';
import "./ClubBulletin.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import bulletinImg from "/images/about_focus.png";

const ClubBulletin = () => {
    return (
        <div className="club-bulletin p-5 mt-4 mb-5">
            <div className="club-bulletin-header d-flex justify-content-between align-items-center">
                <h6>Club Bulletin Board</h6>
                <button><FontAwesomeIcon icon={faPlus} /> Add New Bulletin</button>
            </div>
            <div className="club-bulletin-collection mt-4">
                <div className="club-bulletin-post">
                    <div className="row">
                        <div className="col-md-4 bulletin-post-image">
                            <img src={bulletinImg} alt="bulletin"/>
                        </div>
                        <div className="col-md-8 p-4">
                            <div className="bulletin-post-profile">
                                <div className="bulletin-post-profile-header d-flex justify-content-between">
                                    <div>
                                        <img src={bulletinImg} alt="bulletin" />
                                    </div>
                                    <div>
                                        <h5>John Doe</h5>
                                        <span>2100088999</span> | <span>dd-mm-yy</span>
                                    </div>
                                </div>
                                <div>
                                    <h4>Social Business basic - How to Establish a Sustainable Social Business</h4>
                                </div>
                                <div>
                                    <a href="/">Read More <FontAwesomeIcon icon={faChevronRight} /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="club-bulletin-post mt-4">
                    <div className="row">
                        <div className="col-md-4 bulletin-post-image">
                            <img src={bulletinImg} alt="bulletin"/>
                        </div>
                        <div className="col-md-8 p-4">
                            <div className="bulletin-post-profile">
                                <div className="bulletin-post-profile-header d-flex justify-content-between">
                                    <div>
                                        <img src={bulletinImg} alt="bulletin" />
                                    </div>
                                    <div>
                                        <h5>John Doe</h5>
                                        <span>2100088999</span> | <span>dd-mm-yy</span>
                                    </div>
                                </div>
                                <div>
                                    <h4>Social Business basic - How to Establish a Sustainable Social Business</h4>
                                </div>
                                <div>
                                    <a href="/">Read More <FontAwesomeIcon icon={faChevronRight} /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom arrow button */}
            <div className="bottom-arrow-button">
                <button><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
        </div>
    );
};

export default ClubBulletin;
