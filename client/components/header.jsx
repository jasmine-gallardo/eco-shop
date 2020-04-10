import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cartItemCount = this.props.cartItemCount;
    const setView = this.props.setView;
    return (
      <div className="container header-container">
        <header className="row p-2 bg-dark text-white">
          <div className="wicked-sales-text col-md-9 col-sm-9 d-flex">
            <i className="fas fa-dollar-sign fa-2x d-inline-block m-2"></i>
            <h2 className="d-inline-block">Wicked Sales</h2>
          </div>
          <div className="cart-items col-md-3 col-sm-3 d-flex justify-content-center align-items-center"
            onClick={() => setView('cart', {})}>
            <p className="m-2">{`${cartItemCount} items`}</p>
            <i className="fas fa-shopping-cart fa-2x"></i>
          </div>
        </header>
      </div>
    );
  }
}
