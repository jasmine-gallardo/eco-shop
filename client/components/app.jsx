import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
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

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(cartItemsResult => this.setState({ cart: cartItemsResult }))
      .catch(err => console.error(err));
  }

  addToCart(product) {
    const req = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    }
    fetch('/api/cart', req)
      .then(res => res.json())
      .then(newCartItem => {
        const allCartItemsArray = this.state.cart.concat(newCartItem);
        this.setState({ cart: allCartItemsArray });
      })
      .catch(err => console.error(err));
  }

  placeOrder(newOrder) {
    const req = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    }
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
        <ProductList view={this.state.view} setViewProp={this.setView} />
        break;
      case 'details': view =
        <ProductDetails
          params={this.state.view.params} setViewProp={this.setView} addToCart={this.addToCart} />
        break;
      case 'cart': view =
        <CartSummary cart={this.state.cart} setView={this.setView} />
        break;
      case 'checkout': view =
        <CheckoutForm cart={this.state.cart} placeOrder={this.placeOrder} setView={this.setView}/>
    }
    return (
      <div>
        <Header cartItemCount={this.state.cart.length} setView={this.setView} />
        <div className="container">
          <div className="view-row row pt-4 pb-4 justify-content-center">
            {view}
          </div>
        </div>
      </div>
    );
  }
}
