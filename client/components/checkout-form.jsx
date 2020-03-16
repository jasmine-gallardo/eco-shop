import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  render() {
    const placeOrder = this.props.placeOrder;
    const name = this.state.name;
    const creditCard = this.state.creditCard;
    const shippingAddress = this.state.shippingAddress;
    return (
      <div>
        <h2>Checkout</h2>
        <p>Order Total: $20.00</p>
        <form >
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>
          <label htmlFor="credit-card">Credit Card</label>
          <input type="text" id="credit-card"/>
          <label htmlFor="shipping">Shipping Address</label>
          <textarea id="shipping"></textarea>
          <div className="row">
            <p className="col-8"> &lt; Continue Shopping</p>
            <button className="col-4 btn btn-primary p-2"
              onClick={() => placeOrder(name, creditCard, shippingAddress)}>Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}
