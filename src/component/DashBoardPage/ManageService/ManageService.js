import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';
import SideBar from '../SideBar/SideBar';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`https://obscure-lake-30164.herokuapp.com/serviceList`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data)
        })
    },[])

    console.log(services);

    const handleClick = (id) =>{
        console.log(id)
        fetch(`https://obscure-lake-30164.herokuapp.com/delete/${id}`,{
          method: 'DELETE'
        })
        .then(response => response.json())
      }

    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
            <table className="table table-info mt-5">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                  services.map((service, index) =>       
                    <tr key={service._id}>
                        <td>{index+1}</td>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                        <td><button onClick={()=>handleClick(service._id)} className="btn-danger rounded">Delete</button></td>

                    </tr>
                    )
                }
            </tbody>
        </table>
            </div>
        </div>
    );
};

export default ManageService;