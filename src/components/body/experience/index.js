import React from 'react';
import Separator from '../../common/separator';
import { WorkData } from '../../data/experience';
import ExperienceCard from './experience-card';
import "./experience.css";

function Experience() {
    const data = WorkData;
    return (
        <div className="work">
            <Separator/>
            <label className="section-title">
                Experience
            </label>
            <div className="work-list">
                {data.map((item)=>{
                    return (
                        <ExperienceCard item={item} />
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;
// data-aos="fade-left" data-aos-offset="400" data-aos-easing="ease-in-sine"