import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  if (props.cart.length === 0) {
    return (
      <div className="container">
        <button onClick={() => props.setView('catalog', {})} className="btn btn-outline-info mb-3">Back to Catalog</button>
        <p className="text-center">There are no items in your cart.</p>
      </div>
    );
  }
  const cartArrayCopy = props.cart.map(product => product.price);
  const itemTotalReduce = cartArrayCopy.reduce((acc, curr) => acc + curr);
  const itemTotal = (itemTotalReduce / 100).toFixed(2);
  return (
    <div className="container px-5">
      <button onClick={() => props.setView('catalog', {})} className="btn btn-outline-info mb-4">Back to Catalog</button>
      <h2>My Cart</h2>
      {
        props.cart.map(item => {
          return (
            <CartSummaryItem
              key={item.cartItemId}
              image={item.image}
              name={item.name}
              price={item.price}
              shortDescription={item.shortDescription}
            />
          );
        })
      }
      <div className="row m-2">
        <h4 className="col-sm-9 col-12 text-md-left text-sm-left text-center mb-3">Item Total {`$${itemTotal}`}</h4>
        <button onClick={() => props.setView('checkout', {})} className="btn btn-primary m-auto">Checkout</button>
      </div>
    </div>
  );
}
