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

  getProductDetails(productId) {
    fetch(`/api/products/${productId}`)
      .then(result => result.status(200).json(result.rows[0]))
      .catch(err => console.err(err));
  }

  render() {
    return (
      null
    );
  }
}
