import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    const cartItemCount = this.props.cartItemCount.length
  }
  render() {
    return (
      <div className="container">
        <header className="row p-2 bg-dark text-white">
          <div className="col-9">
            <i className="fas fa-dollar-sign fa-2x d-inline-block m-2"></i>
            <h2 className="d-inline-block">Wicked Sales</h2>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <p className="m-2">0 Items</p>
            <i className="fas fa-shopping-cart fa-2x"></i>
          </div>
        </header>
      </div>

    );
  }
}
