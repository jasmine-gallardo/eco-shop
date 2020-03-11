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
    fetch('/api/products/1')
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(err => console.err(err));
  }

  render() {
    return (
      null
    );
  }
}
