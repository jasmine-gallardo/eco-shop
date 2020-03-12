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
      .then(result => this.setState({ product: result}))
      .catch(err => console.err(err));
  }

  render() {
    const product = this.state.product;
    const setViewProp = this.props.setViewProp;
    if (product) {
      return (
        <div className="container">
          <p onClick={() => setViewProp('catalog', {})}> &lt; Back to Catalog</p>
          <div className="row justify-content-center">
            <img className="col-5"src={product.image}></img>
            <div className="col-6">
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.shortDescription}</div>
            </div>
          </div>
          <div>
            <p>{product.longDescription}</p>
          </div>
        </div>
      );
    }
    return (
      null
    );
  }
}
