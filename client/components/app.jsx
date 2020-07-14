import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: [],
      cartIsOpen: {
        value: false,
        bootstrapClass: { display: 'd-none', shadow: '' },
        customClass: 'no-display'
      }
    };
    this.setView = this.setView.bind(this);
    this.closeCart = this.closeCart.bind(this);
    this.openCart = this.openCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  openCart() {
    this.setState({
      cartIsOpen: {
        value: true,
        bootstrapClass: { display: '', shadow: 'shadow-lg' },
        customClass: ''
      }
    });
  }

  closeCart() {
    this.setState({
      cartIsOpen: {
        value: false,
        bootstrapClass: { display: 'd-none', shadow: '' },
        customClass: 'no-display'
      }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(cartItemsResult => this.setState({ cart: cartItemsResult }))
      .catch(err => console.error(err));
  }

  addToCart(product) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('/api/cart', req)
      .then(res => res.json())
      .then(newCartItem => {
        const allCartItemsArray = this.state.cart.concat(newCartItem);
        this.setState({ cart: allCartItemsArray });
        this.openCart();
      })
      .catch(err => console.error(err));
  }

  placeOrder(newOrder) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    };
    fetch('/api/orders', req)
      .then(res => res.json())
      .then(result => {
        const emptyArray = [];
        this.setState({ cart: emptyArray });
      })
      .then(result => this.setView('catalog', {}))
      .catch(err => console.error(err));
  }

  render() {
    let view;
    switch (this.state.view.name) {
      case 'catalog': view =
        <ProductList view={this.state.view} setViewProp={this.setView}/>;
        break;
      case 'details': view =
        <ProductDetails
          params={this.state.view.params} setViewProp={this.setView} addToCart={this.addToCart}/>;
        break;
      case 'checkout': view =
        <CheckoutForm cart={this.state.cart} placeOrder={this.placeOrder} setView={this.setView}/>;
    }
    return (
      <div>
        <Header cart={this.state.cart} setView={this.setView} openCart={this.openCart} closeCart={this.closeCart} cartDisplayStyles={this.state.cartIsOpen}/>
        <div>
          <div className="row justify-content-center viewport-wrapper">
            {view}
          </div>
        </div>
      </div>
    );
  }
}
