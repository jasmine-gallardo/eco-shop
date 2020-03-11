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
            key={product.id}
            productImage={product.image}
            productName={product.name}
            productPrice={product.price}
            productDescription={product.shortDescription}
          />
        );
      })
    );
  }
}
