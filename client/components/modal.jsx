import React from 'react';

export default function DisclaimerModal(props) {
  return (
    <div className="modal-bg d-flex">
      <div className="container m-auto text-center">
        <p className="display-4">This site is for demonstrational purposes only</p>
        <p className="lead">By clicking &quot;I Understand&quot;, I acknowledge that I cannot make real purchases and should not use my personal or financial information including my real name, address, or credit card information.</p>
        <button onClick={() => props.setView('catalog', {})} className="btn btn-danger">I Understand</button>
      </div>
    </div>
  );
}
