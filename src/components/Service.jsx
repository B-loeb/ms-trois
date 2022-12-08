import React from "react";
import DATA from "../Data.jsx";

const Service = () => {
  const cardItem = (item) => {
    return (
      <div className="card" style={{width: "18rem"}}>
          <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="lead">${item.price}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Services</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Service;
