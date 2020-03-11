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
    if (this.componentDidMount) {
      return (
        <div className="container">
          <p> &lt; Back to Catalog</p>
          <div className="row">
            <img className="col-2"src="server/public/images/ostrich-pillow.jpg"></img>
            <div className="col-2">Product Name/Price/ShortDescr.</div>
          </div>
          <div>
            <p>Long Description</p>
          </div>
        </div>
      );
    }
    return (
      null
    );
  }
}
