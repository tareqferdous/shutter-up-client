import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';

const CheckOut = () => {
    const [userInfo, setUserInfo] = useContext(userContext);
    const[checkOut, setCheckOut] = useState({})
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://obscure-lake-30164.herokuapp.com/serviceList/${id}`)
        .then(res => res.json())
        .then(data => {
            setCheckOut(data[0]);
            const newData = {...userInfo}
            newData.selectedService = data[0];
            setUserInfo(newData);
        })
    }, [id])

    console.log(userInfo);

    return (
        <div className="container">
            <div className="row">
                <table  className=" w-75 m-auto table table-secondary mt-5">
                    <thead>
                        <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>{checkOut.name}</td>
                        <td>{checkOut.price}</td>
                    </tr>
                    </tbody>
                    <Link to="/shipment"><button className="btn-danger mt-2 p-1 rounded">Go To Shipment</button></Link>
                </table>
            </div>
            
        </div>
    );
};

export default CheckOut;