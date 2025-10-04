import React from 'react';
import { MdCall, MdLocationOn, MdMail } from 'react-icons/md';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact-Cont">
            <h2 className='cont-h2'>CONTACT ME</h2>

            {/* Contact Form */}
            <div className='cont-form'>
                <h3 className='form-h'>Just Say Hello</h3>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                <input type="text" placeholder='Your Subject' />
                <textarea className="txt-msg" placeholder="Your Message"></textarea>
                <button className='cont-btn'>Send Message</button>
            </div>

            {/* Contact Info */}
            <div className='cont-card'>
                <h3 className='card-h'>Contact Info</h3>
                <p className='card-p'>Get in touch by phone, email, or in person—I’d love to hear from you!</p>

                <div className="info-item">
                    <MdMail className="icon" />
                    <div>
                        <span>Email</span>
                        <p>ejazahmad@gmail.com</p>
                    </div>
                </div>

                <div className="info-item">
                    <MdCall className="icon" />
                    <div>
                        <span>Phone</span>
                        <p>+91 8877372425</p>
                    </div>
                </div>

                <div className="info-item">
                    <MdLocationOn className="icon" />
                    <div>
                        <span>Address</span>
                        <p>Visit my social profile and get connected</p>
                    </div>
                </div>

                <div className="social-btns">
                    <button className='frm-btn'>LinkedIn</button>
                    <button className='frm-btn'>Github</button>
                    <button className='frm-btn'>Instagram</button>
                    <button className='frm-btn'>WhatsApp</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
