import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section class="contact-area pt-5 pb-5" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="section-title text-center">
                        <h1 className="text-white">Contact Us</h1>
                        <p className="w-50 pt-2 pb-2" style={{margin: '0 auto', color:'lightgray'}}>The professional photographer's directory comes to you where you can find professional photographers in quick, convenient, & efficient manner.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xxl-12">
                    <div class="contact-form">
                        <form action="">
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ContactUs;