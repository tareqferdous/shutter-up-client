import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageUrl: imageUrl,
        };
        
        const url = `https://obscure-lake-30164.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    } 

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2fcb3e4a487e3faff20e9074db8dbc9e')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            console.log(response.data.data.display_url)
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });      
    }

    return (
    <section className="container-fluid row">
        <SideBar></SideBar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h4 style={{color: 'darkcyan', marginLeft:'100px'}}>Add A New Event</h4>
            <form className="search-box text-center ml-5" onSubmit={handleSubmit(onSubmit)}>
                <input onChange={handleImageUpload} placeholder="Image" type="file" name="image" /> <br/>
                <input placeholder="Title" type="text" name="name" {...register("name")} /> <br/>
                <input placeholder="Price" type="number" name="price" {...register("price")} />
                <br/>
                <textarea className="form-control mb-4" rows="5" cols="72" placeholder="Description" type="text" name="description" {...register("description")} />        
                <input className="btn-primary" type="submit" />
            </form>
        </div>
    </section>
    );
};

export default AddService;