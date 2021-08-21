import React from 'react';
import './HeaderMain.css'
import banner from '../../../image/banner2.jpg'

const HeaderMain = () => {
    return (
        <div>
            <section class="banner-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="banner-content">
                                <h1>Love <span style={{color:'LimeGreen'}}>Photography?</span></h1>
                                <p>Our creative agency has years of experience in custom photography for marketing, including technology product shots, executive portraits, in-house food styling and photo shoots for Special Events </p>
                                <a href="">contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={banner} alt="" />
            </section>
        </div>
    );
};

export default HeaderMain;