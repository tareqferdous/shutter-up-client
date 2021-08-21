import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import RouteManager from '../RouteManager/RouteManager';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    return (        
        <div className=" row">
            <SideBar></SideBar>
        </div>
    );
};

export default DashBoard;