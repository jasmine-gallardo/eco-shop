import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    const productsListArray = this.state.products;
    return (
      productsListArray.map(product => {
        return (
          <ProductListItem
            key={''}
            productImage={'./images/shake-weight.jpg'}
            productName={'Product Name'}
            productPrice={'$1.00'}
            productDescription={'Short description of the product goes here.'}
          />
        );
      })
    );
  }
}
