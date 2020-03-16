import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCC = this.handleChangeCC.bind(this);
    this.handleChangeShipping = this.handleChangeShipping.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeCC(event) {
    this.setState({
      creditCard: event.target.value
    });
  }

  handleChangeShipping(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newOrder = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.placeOrder(newOrder);
    this.handleReset(event);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }

  render() {
    const name = this.state.name;
    const creditCard = this.state.creditCard;
    const shippingAddress = this.state.shippingAddress;
    return (
      <div>
        <h2>Checkout</h2>
        <p>Order Total: $20.00</p>
        <form
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChangeName}
            type="text"
            id="name"/>
          <label htmlFor="credit-card">Credit Card</label>
          <input
            onChange={this.handleChangeCC}
            type="text"
            id="credit-card"/>
          <label htmlFor="shipping">Shipping Address</label>
          <textarea
            onChange={this.handleChangeShipping}
            id="shipping"></textarea>
          <div className="row">
            <p className="col-8" onClick={() => this.props.setView('catalog', {})}> &lt; Continue Shopping</p>
            <button className="col-4 btn btn-primary p-2" type="submit">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}
