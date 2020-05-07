import React from 'react';

export default function ProductListItem(props) {
  const productImage = props.productImage;
  const productName = props.productName;
  const productPrice = props.productPrice;
  const productDescription = props.productDescription;
  const productId = props.productId;
  const setViewProp = props.setViewProp;

  return (
    <div className="item card col-md-3 m-2 col-sm-5 col-9 shadow-sm" onClick={() => setViewProp('details', { productId })}>
      <img className="card-img-top my-4" src={productImage}/>
      <div className="card-body p-2 mb-5">
        <h5 className="card-title">{productName}</h5>
        <p className="text-muted">{productPrice}</p>
        <p className="card-text">{productDescription}</p>
      </div>
    </div>
  );
}
