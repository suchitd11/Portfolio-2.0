import React from 'react'
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';
import "./contact.css";
function Contact() {
    return (
        <div className="contact">
            <Separator/>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>You can also contact me on any of the social media platform.</p>
                    <SocialContact/>
                </div>
                <div className="download">
                    <a download href={require("../../../assets/resume.pdf").default}>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
// data-aos="fade-right" data-aos-easing="ease-in-sine"