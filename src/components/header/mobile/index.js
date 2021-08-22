import React from 'react';
import "./mobile.css";

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={ ()=> setIsOpen(!isOpen) }>
            <i class="fi-rr-cross"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#skills">
                        skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#projects">
                        projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#education">
                        education
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#experience">
                        experience
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        contact
                    </a>
                </div>
            </div>
        </div>
    );
    
}

export default Mobile
