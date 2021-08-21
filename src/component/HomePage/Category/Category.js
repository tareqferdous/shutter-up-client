import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = () => {
    const categoryData = [
        {
            title: 'Weeding Photography',
            description: "Wedding photography is the nuanced art of capturing one of the most important days in a person's life.",
            pic: 'https://i.ibb.co/Jp7z5r9/weeding-1.jpg'
        },
        {
            title: 'Commercial photography',
            description: "Commercial photography is photography that is used to sell or promote a product or service for making money",
            pic: 'https://i.ibb.co/pj8BbBK/commercial.jpg'
        },
        {
            title: 'Fashion Photography',
            description: "Fashion photography is a genre of photography which is devoted to displaying clothing and other fashion items",
            pic: 'https://i.ibb.co/F0JCHbP/fashion4.jpg'
        }
    ]
    return (
        <section className="py-5">
        <div className="text-center">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>Photography Categories</h2>
            <p>Explore our exclusive categories, find photographers you would <br/> love to explore and hire.</p>
        </div>
        <div className="container mt-5">
            <div className="row">
                {
                    categoryData.map((category) => <CategoryDetails key={category.id} category={category} />)
                }
               
            </div>
        </div>
    </section>
    );
};

export default Category;