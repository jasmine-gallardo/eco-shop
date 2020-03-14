import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  getCartItems() {  //takes in productId?
    fetch('/api/cart')
      .then(res => res.json())
      .then(cartItemsResult => this.setState({ cart: cartItemsResult}))
      .catch(err => console.error(err));
  }

  addToCart(product) {
    const req = {
      method: "POST",
      headers: { 'Content-Type': 'application/json '},
      body: JSON.stringify(product)
    }
    fetch('/api/cart', req)
      .then(res => res.json())
      .then( allCartItemsArray => this.setState({ cart: allCartItemsArray }))
      .catch(err => console.error(err));
  }

  render() {
    let view;
    switch (this.state.view.name) {
      case 'catalog': view =
      <ProductList view={this.state.view} setViewProp={this.setView} />
        break;
      case 'details': view =
        <ProductDetails params={this.state.view.params} setViewProp={this.setView} />
        break;
    }
    return (
      <div>
        <Header cartItemCount={this.state.cart}/>
        <div className="container">
          <div className="row pt-4 pb-4 justify-content-center">
            {view}
          </div>
        </div>
      </div>
    );
  }
}
