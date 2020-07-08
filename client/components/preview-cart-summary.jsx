import React from 'react';

export default class PreviewCartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.closeCart = this.closeCart.bind(this);
  }

  closeCart() {
    const cartPreview = document.querySelector('.item-added');
    cartPreview.classList.add('no-display');
  }

  render() {
    return (
      <div className="item-added text-center row shadow-lg ">
        <div className="item-added-2 border-bottom row d-flex col-12">
          <i onClick={() => this.closeCart()} className="far fa-times-circle col-1 p-0"></i>
          <p className="col-11 text-right">{this.props.cartItemCount} items </p>
        </div>
        <div>
          <p className="mx-auto"> Item added to cart</p>
        </div>
      </div>
    );
  }
}
