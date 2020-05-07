import React from 'react';

export default class Header extends React.Component {
  render() {
    const cartItemCount = this.props.cartItemCount;
    const setView = this.props.setView;
    return (
      <div className="header-container">
        <header className="row fixed-top py-3 px-5 bg-dark text-white shadow-sm">
          <div className="wicked-sales-text ml-md-5 ml-sm-2 d-flex" onClick={() => setView('catalog', {})}>
            <i className="fas fa-leaf fa-1x m-2"></i>
            <p className="clickable-header lead mb-0">Eco Shop</p>
          </div>
          <div className="cart-items ml-auto mr-md-5 mr-sm-2 d-flex align-items-center"
            onClick={() => setView('cart', {})}>
            <p className="m-1">{`${cartItemCount} items`}</p>
            <i className="clickable-header fas fa-shopping-cart fa-1x"></i>
          </div>
        </header>
      </div>
    );
  }
}
