import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleOrder = () => {
    const [order, setOrder] = useState({});
    const [updateStatus, setUpdateStatus] = useState()
    const {id} = useParams();

    useEffect(()=> {
        fetch(`https://obscure-lake-30164.herokuapp.com/orderList/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrder(data[0])
        })
    }, [id])

    console.log(order );

    const handleClick = (id) => {
        fetch(`https://obscure-lake-30164.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }

    const handleChange = (e) => {
        const newData = {...updateStatus}
        newData[e.target.name] = e.target.value;
        setUpdateStatus(newData)
    }

    return (
        <div className="text-center mt-5">
            <h3>Service Name: {order.selectedService?.name}</h3>
            <select defaultValue={order.status} onChange={handleChange} name="status" id="">
                <option value="pending">Pending</option>
                <option value="onGoing">On Going</option>
                <option value="shipped">Shipped</option>
            </select>
            <button onClick={() => handleClick(order._id)} className="btn-info rounded text-white">Update</button>
        </div>
    );
};

export default SingleOrder;