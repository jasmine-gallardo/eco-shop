import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    const productId = this.props.params.productId;
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(result => this.setState({ product: result }))
      .catch(err => console.error(err));
  }

  render() {
    const product = this.state.product;
    const setViewProp = this.props.setViewProp;
    const addToCart = this.props.addToCart;
    if (product) {
      return (
        <div className="container m-5">
          <button onClick={() => setViewProp('catalog', {})} className="previous-page btn btn-outline-info">Back to Catalog</button>
          <div className="container card mt-4">
            <div className="row justify-content-center mx-2 my-4">
              <div className="col-md-5 col-sm-12 product-image">
                <img src={product.image} className="col-12"></img>
              </div>
              <div className="col-md-6 col-sm-12 m-auto">
                <h3>{product.name}</h3>
                <p className="text-muted">{`$${(product.price / 100).toFixed(2)}`}</p>
                <p>{product.shortDescription}</p>
                <div className="add-cart-button">
                  <button onClick={() => addToCart(product)} className="btn btn-primary p-2">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="px-4 mb-4">
              <p>{product.longDescription}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      null
    );
  }
}
