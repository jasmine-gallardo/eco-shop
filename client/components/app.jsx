import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} }
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row pt-4 pb-4 justify-content-center">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}
