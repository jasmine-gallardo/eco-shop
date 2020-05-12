import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="card card-body cart-summary-item my-4">
      <div className="row no-gutters">
        <div className="col-lg-4 col-md-4 p-0 m-auto">
          <img className="card-img cart-item-img h-100 py-3" src={props.image} />
        </div>
        <div className="col-lg-7 col-md-7 d-flex">
          <div className="card-body m-auto p-4">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-text text-muted">{`$${(props.price / 100).toFixed(2)}`}</p>
            <p className="card-text">{props.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
