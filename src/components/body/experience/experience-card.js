/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./experience-card.css"

function ExperienceCard({item}) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} className="work-logo"/>
            <div className="work-info">
                <label className="company-name">{item.company}</label> <br/>
                <label className="company-position">{item.designation}</label> 
                <div className="work-dates">
                    <label> {item.dateJoining}</label> 
                    -<label> {item.dateEnd} </label>
                </div> <br/>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard
