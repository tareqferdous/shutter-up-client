import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const ShowService = () => {
    const [services, setServices] = useState([])
    let history = useHistory()

    useEffect(() => {
        fetch(`https://obscure-lake-30164.herokuapp.com/serviceList`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data)
        })
    },[])

    const handleClick = (id) => {
        history.push(`/checkOut/${id}`)
    }

    return (
       
        <section className="py-5">
            <div className="text-center">
                <h2 className=" pb-3" style={{color: '#1CC7C1'}}>Our Exclusive Services</h2>
                <p>Explore our exclusive categories, find photographers you would <br/> love to explore and hire.</p>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {
                        services.map((service) => <ServiceDetails handleClick={handleClick} key={service._id} service={service} />)
                    }                
                </div>
            </div>
        </section>
      
    );
};

export default ShowService;