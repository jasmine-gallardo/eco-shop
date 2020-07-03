import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(productsArray => this.setState({ products: productsArray }))
      .catch(err => console.error(err));
  }

  render() {
    const setViewProp = this.props.setViewProp;
    const productsListArray = this.state.products;
    return (
      <div>
        <div className="hero-container">
          <div className="hero-image mx-auto my-3 text-center row">
            <h4 className="display-4 col-12 m-auto">Seasonal Sale</h4>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          {
            productsListArray.map(product => {
              return (
                <ProductListItem
                  key={product.productId}
                  productId={product.productId}
                  productImage={product.image}
                  productName={product.name}
                  productPrice={`$${(product.price / 100).toFixed(2)}`}
                  productDescription={product.shortDescription}
                  setViewProp={setViewProp}
                />
              );
            })
          }
        </div>
      </div>

    );
  }
}
