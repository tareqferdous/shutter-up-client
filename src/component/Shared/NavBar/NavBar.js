import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav style={{backgroundColor: '#0a192E'}}>
            <input id="nav-toggle" type="checkbox"/>
            <div style={{color: 'LimeGreen'}} class="logo">Shutter<strong>UP</strong></div>
            <ul class="links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/dashboard">DashBoard</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <label for="nav-toggle" class="icon-burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
        </nav >
        </div>
    );
};

export default NavBar;