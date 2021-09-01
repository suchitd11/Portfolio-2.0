/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./about.css";
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <br/>
                <div className="about-info">
                    Hello 👋, I'm <br/><span className="info-name"> Suchit Deshmukh</span>  <br/> <br/> 
                    A curious web developer, enthusiatic learner and occasionally a competitive programmer! I'm always looking for better, easier and accessible ways to solve the common problems that we face <br/> day-to-day with the help of ever-evolving technologies around us.
                </div> <br/>
                {/* <div className="contact-me btn btn-outline-light">
                    <a href="mailto:dsuchit111@gmail.com">GET IN TOUCH</a>
                </div> <br/> */}
                <div className="about-photo">
                    <img src={require("../../../assets/about-img.png").default} className="picture"/>
                </div>
            </div> <br/>
            <div className="contact-me btn btn-outline-light">
                    <a href="mailto:dsuchit111@gmail.com">GET IN TOUCH</a>
            </div>
        </div>
    );
}

export default About;