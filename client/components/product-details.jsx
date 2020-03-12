import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getProductDetails = this.getProductDetails.bind(this);
    console.log(props)
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    fetch(`/api/products/${props.params}`)
      .then(res => res.json())
      .then(result => this.setState({ product: result}))
      .catch(err => console.err(err));
  }

  render() {
    const product = this.state.product;
    if (product) {
      return (
        <div className="container">
          <p> &lt; Back to Catalog</p>
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
