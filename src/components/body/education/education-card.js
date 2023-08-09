import React from 'react';
import "./education-card.css";

function EducationCard({item}) {
    return (
        <div className="education-card">
            <div className="education-info">
                <label className="institute-name">{item.institute}</label> <br/>
                <label className="course-name">{item.course}</label> <br/>
                <label className="course-duration">{item.duration}</label> <br/>
                <label className="marks">{item.marks}</label> <br/>

            </div> <br/>
            {/* <div className="education-info">
                <label className="course-name">{item.course}</label>
            </div>
            <div className="education-info">
                <label className="course-duration">{item.duration}</label>
            </div> <br/> */}
        </div> 
    );
}

export default EducationCard
