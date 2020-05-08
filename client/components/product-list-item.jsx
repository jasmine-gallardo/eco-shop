import React from 'react';

export default function ProductListItem(props) {
  const productImage = props.productImage;
  const productName = props.productName;
  const productPrice = props.productPrice;
  const productDescription = props.productDescription;
  const productId = props.productId;
  const setViewProp = props.setViewProp;

  return (
    <div className="item card col-md-3 m-2 col-sm-5 col-9 shadow-sm pb-md-5" onClick={() => setViewProp('details', { productId })}>
      <img className="card-img-top mt-lg-4 mt-md-2 mt-sm-3 mt-5 mb-2 h-50" src={productImage}/>
      <div className="card-body p-2 mt-lg-3 mt-md-3 mt-4">
        <h5 className="card-title">{productName}</h5>
        <p className="text-muted">{productPrice}</p>
        <p className="card-text">{productDescription}</p>
      </div>
    </div>
  );
}
