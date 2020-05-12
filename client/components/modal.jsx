import React from 'react';

export default function DisclaimerModal(props) {
  return (
    <div className="modal-bg vh-100 d-flex align-items-center">
      <div className="m-auto text-center col-11">
        <h2 className="mb-3">This site is for demonstrational purposes only.</h2>
        <p className="lead">By clicking &quot;I Understand&quot; I acknowledge that I cannot make real purchases and should not use my personal or financial information including my real name, address, or credit card information.</p>
        <button onClick={() => props.setView('catalog', {})} className="btn btn-danger">I Understand</button>
      </div>
    </div>
  );
}
