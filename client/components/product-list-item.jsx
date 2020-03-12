import React from 'react';

export default function ProductListItem(props) {
  const productImage = props.productImage;
  const productName = props.productName;
  const productPrice = props.productPrice;
  const productDescription = props.productDescription;
  const productId = props.productId;
  const setViewProp = props.setViewProp;

  return (
    <div className="card col-3 m-2" onClick={() => setViewProp('details',{ productId: productId })}>
      <img className="card-img-top" src={productImage}/>
      <div className="card-body p-2">
        <h5 className="card-title">{productName}</h5>
        <p className="text-muted">{productPrice}</p>
        <p className="card-text">{productDescription}</p>
      </div>
    </div>
  );
}
