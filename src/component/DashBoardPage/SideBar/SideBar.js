import React from 'react';
import { Link, useRouteMatch} from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faCommentDots, faPlus, faUserPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../../App';
import { useContext } from 'react';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    
    const[userInfo, setUserInfo] = useState(userContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(()=>{
        fetch(`https://obscure-lake-30164.herokuapp.com/getAdmin`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // const isAdmin = data.find(singleData => singleData.admin === userInfo?.email)
        })
    },[])
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"90vh"}}>
            <ul className="list-unstyled">
                <li>
                    <h3  style={{color: 'darkgray', fontWeight: 'bold'}}>SHUTTER UP</h3>
                </li>       
                <li>
                    <Link to='/orderList' className="text-white">
                        Order List
                    </Link>
                </li>
               
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span> 
                    </Link>
                </li>
               
                   <div>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Manage Service</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/admin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>
                   </div>
             
            </ul>
            
        </div>
    );
};

export default SideBar;