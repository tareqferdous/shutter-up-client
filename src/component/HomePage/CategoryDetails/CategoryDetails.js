import React from 'react';

const CategoryDetails = ({category}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid" src={category.pic} alt="" />
            <h5 className="mt-3 mb-3">{category.title}</h5>
            <p className="text-secondary">{category.description}</p>
        </div>
    );
};

export default CategoryDetails;