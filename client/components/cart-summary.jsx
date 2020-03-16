import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  if (props.cart.length === 0) {
    return (
      <div>
        <p>There are no items in your cart.</p>
      </div>
    );
  }
  const cartArrayCopy = props.cart.map(product => product.price);
  const itemTotalReduce = cartArrayCopy.reduce((acc, curr) => acc + curr);
  const itemTotal = (itemTotalReduce / 100).toFixed(2);
  return (
    <div className="container ml-4 mr-4">
      <p onClick={() => props.setView('catalog', {})}> &lt; Back to Catalog</p>
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
      <div className="row">
        <h4 className="col-8">Item Total {`$${itemTotal}`}</h4>
        <button onClick={() => props.setView('checkout', {})} className="col-4">Checkout</button>
      </div>
    </div>
  );
}
