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
        <Header />
        <div className="container">
          <div className="row pt-4 pb-4 justify-content-center">
            {view}
          </div>
        </div>
      </div>
    );
  }
}
