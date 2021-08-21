import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import SideBar from '../DashBoardPage/SideBar/SideBar';

const Shipment = () => {
    const [userInfo, setUserInfo] = useContext(userContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => { 
       const newData = {...userInfo}
       newData.shipmentData = data;
       newData.status = 'pending';
       setUserInfo(newData)

       if(userInfo.shipmentData){
        fetch(`https://obscure-lake-30164.herokuapp.com/placeOrder`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data){
                alert('Order Placed Successfully!')
            }
        })
       }
    }

    console.log(userInfo);

    return ( 
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h4 style={{color: 'darkcyan', marginLeft:'100px'}}>Enter Your Shipping Info</h4>
                <form className="search-box text-center ml-5" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter Your Name" type="text" name="name" {...register("name")} /> <br/>
                    <input placeholder="Email" type="email" name="email" {...register("email")} />
                    <br/>
                    <input placeholder="Address" type="text" name="address" {...register("address")} /> <br />
                    <input placeholder="Phone" type="number" name="phone" {...register("phone")} /> <br />
                    <input className="btn-primary" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default Shipment;