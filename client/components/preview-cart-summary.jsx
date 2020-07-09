import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class PreviewCartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.closeCart = this.closeCart.bind(this);
  }

  closeCart() {
    const cartPreview = document.querySelector('.cart-summary-drawer');
    cartPreview.classList.add('no-display');
  }

  render() {
    if (this.props.cart.length === 0) {
      return (
        <div className="cart-summary-drawer text-center row shadow-lg justify-content-center">
          <div className="cart-drawer-2 border-bottom row d-flex col-12">
            <i onClick={() => this.closeCart()} className="far fa-times-circle col-1 p-0"></i>
            <p className="col-11 text-right">{this.props.cart.length} items </p>
          </div>
          <div className="container text-center">
            <p>There are no items in your cart.</p>
          </div>
        </div>
      );
    }
    return (
      <div className="cart-summary-drawer text-center row shadow-lg justify-content-center">
        <div className="cart-drawer-2 border-bottom row d-flex col-12">
          <i onClick={() => this.closeCart()} className="far fa-times-circle col-1 p-0"></i>
          <p className="col-11 text-right">{this.props.cart.length} items </p>
        </div>
        <div className="cart-drawer-content">
          <div className="cart-drawer-3">
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
      </div>
    );
  }
}
