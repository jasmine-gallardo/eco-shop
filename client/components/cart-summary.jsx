import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  if (props.cart.length === 0) {
    return (
      <div className="container">
        <p onClick={() => props.setView('catalog', {})} className="previous-page"> &lt; Back to Catalog</p>
        <p className="text-center">There are no items in your cart.</p>
      </div>
    );
  }
  const cartArrayCopy = props.cart.map(product => product.price);
  const itemTotalReduce = cartArrayCopy.reduce((acc, curr) => acc + curr);
  const itemTotal = (itemTotalReduce / 100).toFixed(2);
  return (
    <div className="container">
      <p onClick={() => props.setView('catalog', {})} className="previous-page"> &lt; Back to Catalog</p>
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
        <h4 className="col-sm-9 col-12">Item Total {`$${itemTotal}`}</h4>
        <button onClick={() => props.setView('checkout', {})} className="col-sm-3 col-12 btn btn-primary w-25">Checkout</button>
      </div>
    </div>
  );
}
