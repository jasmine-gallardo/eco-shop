import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="cart-summary-item card d-flex">
      <div className="cart-summary-item-2 border-bottom">
        <div className="text-left cart-item-text">
          <p className="mb-0 font-weight-bold">{props.name}</p>
          <p className="text-muted">{`$${(props.price / 100).toFixed(2)}`}</p>
        </div>
        <div className="p-0">
          <img className="card-img" src={props.image}/>
        </div>
      </div>
      {/* <div className="">
        <div className="cart-edit-text row text-center m-0 py-2">
          <p className="clickable mb-0 col-6 border-right-0 p-0">Edit</p>
          <p className="clickable mb-0 col-6 border-left p-0">Remove</p>
        </div>
      </div> */}
    </div>
  );
}
