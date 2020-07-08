import React from 'react';
import DisclaimerModal from './modal';

export default class Header extends React.Component {
  render() {
    const cartItemCount = this.props.cartItemCount;
    const setView = this.props.setView;
    return (
      <div>
        <DisclaimerModal />
        <div className="header-container">
          <header className="row py-3 px-3 bg-light text-dark">
            <div className="clickable cart-items col-3 p-0 col-md-2 d-flex align-items-center justify-content-center">
              {/* <i class="fas fa-bars fa-1x"></i> */}
            </div>
            <div className="brand-name col-5 justify-content-center m-auto d-flex clickable center" onClick={() => setView('catalog', {})}>
              <p className="mb-0 typeface-1 font-weight-bold eco-shop-text">Eco Shop</p>
            </div>
            <div className="clickable cart-items col-3 pl-0 pr-2 col-md-2 d-flex align-items-center justify-content-center"
              onClick={() => setView('cart', {})}>
              <p className="m-1 typeface-1 cart-text">{`${cartItemCount} items`}</p>
              <i className="fas fa-shopping-cart fa-1x"></i>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
