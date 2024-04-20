import React from 'react';
import "./Contact.jsx";

export default function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <div className='contact-content'>
                <form className='contact-form'>
                    <div className='contact-group'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' required />
                    </div>
                    <div className=''contact-group>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='contact-group'>
                        <label htmlFor='message'>Message:</label>
                        <textarea id='message' name='message' required></textarea>
                    </div>
                    <button type='submit' className='contact-btn'>Send Message</button>
                </form>
            </div>
        </div>
    );
}
