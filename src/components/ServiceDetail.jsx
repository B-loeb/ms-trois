import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, deleteItem} from '../redux/actions/index';


const ServiceDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    {/* requires a service id from the service page */}
    const servid = useParams();
    const servDetail = DATA.filter(x=>x.id == servid.id)
    const service = servDetail[0];
    console.log(service);

    //Store useDispatch in a variable
    const dispatch = useDispatch()


    const handleCart = (service) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(service))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(deleteItem(service))
            setCartBtn("Add to Cart")
        }
    }

  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto service">
                <img src={service.img} alt={service.title} height="400px" width="500px" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className="display-5 fw-bold">{service.title}</h1>
                <hr />
                <h2 className="my-4">${service.price}</h2>
                <p className="lead">{service.desc}</p>
                <button onClick={()=>handleCart(service)} className="btn btn-outline-primary my-5">{cartBtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceDetail
