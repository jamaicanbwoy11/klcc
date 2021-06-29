import React from 'react';
import { Link } from 'react-router-dom';
import './ContactSection.css';

function ContactSection() {
    return(
        <div className="contact-section">
            <div className="container p-5">
                <div>
                    <h2>Contact us</h2>
                    <p>You can find us at our office in Malaysia.</p>
                    <div id="contact-phone">
                        <p>Call us</p>
                        <a href="tel:000 000 000">000 000 000</a>
                    </div>
                    <div id="contact-email">
                        <p>Email us</p>
                        <a href="mailto:klcc.agency@gmail.com">klcc.agency@gmail.com</a>
                    </div>
                </div>
                <Link to="/contact">
                    <button>Contact us</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactSection;