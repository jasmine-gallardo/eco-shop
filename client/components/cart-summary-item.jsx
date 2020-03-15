import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="card m-4">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img cart-item-img" src={props.image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-text text-muted">{`$${(props.price / 100).toFixed(2)}`}</p>
            <p className="card-text">{props.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
