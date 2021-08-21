import React from 'react';
import Category from '../Category/Category';
import ContactUs from '../ContactUS/ContactUs';
import HeaderMain from '../HeaderMain/HeaderMain';
import Footer from '../../Shared/Footer/Footer';
import ShowService from '../ShowService/ShowService';

const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Category></Category>
            <ShowService></ShowService>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;