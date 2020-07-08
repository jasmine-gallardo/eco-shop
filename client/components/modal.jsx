import React from 'react';

export default class DisclaimerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState({ clicked: true });
  }

  render() {
    if (this.state.clicked === true) {
      const modalContainer = document.querySelector('.modal-container');
      modalContainer.classList.add('d-none');
    }
    return (
      <div className="modal-bg align-items-center">
        <div className="modal-container col-11 col-lg-6">
          <h2 className="mb-3">This site is for demonstrational purposes only.</h2>
          <p className="lead mb-4">By clicking &quot;I Understand&quot; I acknowledge that I cannot make real purchases and should not use my personal or financial information including my real name, address, or credit card information.</p>
          <div className="text-center">
            <button onClick={() => this.toggleButton()} className="btn btn-danger">I Understand</button>
          </div>
        </div>
      </div>
    );
  }
}
