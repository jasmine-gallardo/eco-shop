import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="./images/shake-weight.jpg" alt="shake-weight"/>
        <div className="card-body">
          <h5 className="card-title">Product Name</h5>
          <p>$1.00</p>
          <p className="card-text">Short description of the product goes here.</p>
        </div>
      </div>
    );
  }
}
