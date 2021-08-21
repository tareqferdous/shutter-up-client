import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/HomePage/Home/Home';
import DashBoard from './component/DashBoardPage/DashBoard/DashBoard';
import NavBar from './component/Shared/NavBar/NavBar';
import ManageService from './component/DashBoardPage/ManageService/ManageService';
import AddService from './component/DashBoardPage/AddService/AddService';
import Shipment from './component/Shipment/Shipment';
import CheckOut from './component/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import { useContext } from 'react';
import OrderList from './component/OrderList/OrderList';
import SingleOrder from './component/SingleOrder/SingleOrder';
import AddAdmin from './component/DashBoardPage/AddAdmin/AddAdmin';
import Review from './component/DashBoardPage/Review/Review';
import Login from './component/Login/Login';
import PrivateRoute from './component/Login/PrivateRoute';

export const userContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({})
  return (
    <userContext.Provider value={[userInfo, setUserInfo]}>
        <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageService">
              <ManageService></ManageService>
          </Route>
          <Route path="/shipment">
              <Shipment></Shipment>
          </Route>
          <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut> 
          </PrivateRoute>
          <Route path="/orderList">
              <OrderList></OrderList>
          </Route>
          <Route path="/singleOrder/:id">
            <SingleOrder></SingleOrder>
          </Route>
          <Route path="/admin">
              <AddAdmin></AddAdmin>
          </Route>
          <Route path="/review">
              <Review></Review>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
