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
      <div className="hero-container row py-5">
        <div className="hero-image ml-auto text-center row col-12 col-md-7"></div>
        <div className="header-text-2 col-12 col-md-3 ml-md-3 mr-auto">
          <div className="position-helper">
            <i className="fas fa-leaf fa-7x mb-4"></i>
            <div className="header-text">
              <h4 className="text-dark typeface-1 font-weight-bold">Seasonal Sale</h4>
              <p>Claim our best products of the season </p>
              <a href="#scroll-catalog-view" className="btn btn-block btn-dark">Shop now</a>
            </div>
          </div>
        </div>
        <div id="scroll-catalog-view" className="row justify-content-center mt-5">
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
