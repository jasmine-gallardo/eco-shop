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
    if (this.props.cart.length === 0) {
      return (
        <div>
          <p>There are no items in your cart.</p>
        </div>
      );
    }
    const cartArrayCopy = this.props.cart.map(product => product.price);
    const itemTotalReduce = cartArrayCopy.reduce((acc, curr) => acc + curr);
    const itemTotal = (itemTotalReduce / 100).toFixed(2);
    return (
      <div className="w-75">
        <h2 className="mb-3">Checkout</h2>
        <p className="text-muted">Order Total:{ `$${itemTotal}`}</p>
        <form
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}>
          <div>
            <label className="d-block" htmlFor="name">Name</label>
            <input
              className="w-100 mb-3 border rounded-sm"
              onChange={this.handleChangeName}
              type="text"
              id="name"
              required />
          </div>
          <div>
            <label className="d-block" htmlFor="credit-card">Credit Card</label>
            <input
              className="w-100 mb-3 border rounded-sm"
              onChange={this.handleChangeCC}
              type="text"
              id="credit-card"
              required/>
          </div>
          <div className="mb-3 h-25">
            <label className="d-block" htmlFor="shipping">Shipping Address</label>
            <textarea
              className="w-100 border rounded-sm"
              onChange={this.handleChangeShipping}
              id="shipping"
              required></textarea>
          </div>
          <div className="row">
            <p className="col-sm-8 previous-page" onClick={() => this.props.setView('catalog', {})}> &lt; Continue Shopping</p>
            <button className="col-sm-4 btn btn-primary p-2" type="submit">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}
