import React from 'react';

export default function ProductListItem(props) {
  const productImage = props.productImage;
  const productName = props.productName;
  const productPrice = props.productPrice;
  const productDescription = props.productDescription;

  return (
    <div className="card">
      <img className="card-img-top" src={productImage} alt="shake-weight"/>
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p>{productPrice}</p>
        <p className="card-text">{productDescription}</p>
      </div>
    </div>
  );
}
