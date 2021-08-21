import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { userContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({})
    const[loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleChange = (e) => {
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }

    const handleClick = () =>{
        fetch(`https://obscure-lake-30164.herokuapp.com/addAdmin`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <h2>Admin Access</h2>

                <input onChange={handleChange} type="text" name="admin" />
                <br />
                <button className="btn-info mt-2  rounded" onClick={handleClick}>Add Admin</button>
            </div>
        </div>
    );
};

export default AddAdmin;