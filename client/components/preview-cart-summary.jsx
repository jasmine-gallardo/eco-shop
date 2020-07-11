import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class PreviewCartSummary extends React.Component {
  render() {
    const cartDisplayStyles = this.props.cartDisplayStyles;
    const bootstrapDisplay = cartDisplayStyles.bootstrapClass.display;
    const bootstrapShadow = cartDisplayStyles.bootstrapClass.shadow;
    const customDisplay = cartDisplayStyles.customClass;
    if (this.props.cart.length === 0) {
      return (
        <div>
          <div onClick={() => this.props.closeCart()} className={`cart-click-away ${bootstrapDisplay}`}></div>
          <div className={`cart-summary-drawer text-center row justify-content-center ${customDisplay} ${bootstrapShadow}`}>
            <div className="cart-drawer-2 border-bottom row d-flex col-12">
              <i onClick={() => this.props.closeCart()} className="clickable far fa-times-circle col-1 pl-3 pr-0"></i>
              <p className="col-11 text-right typeface-1 font-weight-bold mb-0">{this.props.cart.length} items </p>
            </div>
            <div className="container text-center">
              <p>There are no items in your cart.</p>
            </div>
          </div>
        </div>
      );
    }
    const cartArrayCopy = this.props.cart.map(product => product.price);
    const itemTotalReduce = cartArrayCopy.reduce((acc, curr) => acc + curr);
    const itemTotal = (itemTotalReduce / 100).toFixed(2);
    return (
      <div>
        <div onClick={() => this.props.closeCart()} className={`cart-click-away ${bootstrapDisplay}`}></div>
        <div className={`cart-summary-drawer text-center row justify-content-center ${customDisplay} ${bootstrapShadow}`}>
          <div className="cart-drawer-2 border-bottom row d-flex col-12 shadow-sm">
            <i onClick={() => this.props.closeCart()} className="clickable far fa-times-circle col-1 pl-3 pr-0"></i>
            <p className="col-11 text-right typeface-1 font-weight-bold mb-0">{this.props.cart.length} items </p>
          </div>
          <div className="cart-drawer-content">
            <div className="cart-drawer-3 justify-content-center">
              {
                this.props.cart.map(item => {
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
            </div>
          </div>
          <div>
            <div className="checkout-section px-4 pt-3">
              <p className="font-weight-bold">Estimated Total</p>
              <p className="font-weight-bold pr-1">${itemTotal}</p>
              <button onClick={() => { this.props.closeCart(); this.props.setView('checkout', {}); }} className="btn btn-block btn-dark mb-3">Checkout</button>
              <p className="text-left disclaimer-text">Reminder: This site is not a real shop, it&apos;s a project. Do not use your real information when &quot;checking out&quot;.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
