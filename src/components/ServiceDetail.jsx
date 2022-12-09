import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data';

const ServiceDetail = () => {
    {/* requires a service id from the service page */}
    const servid = useParams();
    const servDetail = DATA.filter(x=>x.id == servid.id)
    const service = servDetail[0];
    console.log(service);

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
                <button className="btn btn-outline-primary my-5">Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceDetail
