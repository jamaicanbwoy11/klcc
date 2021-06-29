import React from 'react';
import Layout from '../../components/Layout/Layout';
import office from '../../images/office.jpg';
import './Contact.css';

function Contact() {
    return(
        <div>
            <Layout>
                <div className="contact container">
                    <div id="office-image-div">
                        <img id="office-image" src={office} alt="office"/>
                    </div>
                    <div id="office-details-div">
                        <h1>Contact us</h1>
                        <div id="contact-page-phone">
                            <h5>Call us</h5>
                            <a href="tel:000 000 000">000 000 000</a>
                        </div>
                        <div id="contact-page-email">
                            <h5>Email us</h5>
                            <a href="mailto:klcc.agency@gmail.com">klcc.agency@gmail.com</a>
                        </div>
                        <h5>Our address</h5>
                        <p>Kuala Lumpur Malaysia</p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Contact;
