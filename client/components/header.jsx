import React from 'react';

export default class Header extends React.Component {
  render() {
    const cartItemCount = this.props.cartItemCount;
    const setView = this.props.setView;
    return (
      <div className="container header-container">
        <header className="row p-2 bg-dark text-white">
          <div className="wicked-sales-text col-md-9 col-sm-9 d-flex" onClick={() => setView('catalog', {})}>
            <i className="fas fa-leaf fa-2x d-inline-block m-2"></i>
            <h2 className="clickable-header d-inline-block">Eco Shop</h2>
          </div>
          <div className="cart-items col-md-3 col-sm-3 d-flex justify-content-center align-items-center"
            onClick={() => setView('cart', {})}>
            <p className="m-1">{`${cartItemCount} items`}</p>
            <i className="clickable-header fas fa-shopping-cart fa-2x"></i>
          </div>
        </header>
      </div>
    );
  }
}
