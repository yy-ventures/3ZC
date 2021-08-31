import React from 'react';
import ClubBulletin from './ClubBulletin/ClubBulletin';
import ClubDesc from './ClubDesc/ClubDesc';
import ClubEvents from './ClubEvents/ClubEvents';
import ClubInfo from './ClubInfo/ClubInfo';
import "./ClubProfile.scss";

const ClubProfile = () => {
    return (
        <section className="club-profile">
            <div className="three-zero-container">
                <div className="row club-profile-header py-5">
                    <h1>3ZERO Club - Club Profile</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ClubInfo />
                        <ClubEvents />
                    </div>
                    <div className="col-md-8">
                        <ClubDesc />
                        <ClubBulletin />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClubProfile;
