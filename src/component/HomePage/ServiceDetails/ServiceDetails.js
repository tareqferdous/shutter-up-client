import React from 'react';

const ServiceDetails = ({service, handleClick}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid" src={service.imageUrl}  alt="" />
            <h5 className="mt-3 mb-3">Package: {service.name}</h5>
            <h5 className="mt-3 mb-3"> Price: {service.price + ' taka'} </h5>
            <p className="text-secondary">{service.description}</p>
            <button onClick={()=> handleClick(service._id)} className="btn-info rounded text-white p-1">Buy Now</button>
        </div>
    );
};

export default ServiceDetails;