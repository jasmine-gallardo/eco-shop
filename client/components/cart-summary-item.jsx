import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="card mt-4 mb-4 cart-summary-item col-11 m-auto">
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-4 p-0">
          <img className="card-img cart-item-img h-100 py-3" src={props.image} />
        </div>
        <div className="col-md-8 d-flex m-auto">
          <div className="card-body m-auto">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-text text-muted">{`$${(props.price / 100).toFixed(2)}`}</p>
            <p className="card-text">{props.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
