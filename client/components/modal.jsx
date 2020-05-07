import React from 'react';
import ReactDOM from 'react-dom';

export default function DisclaimerModal(props) {
  return (
    <div className="modal-bg">
      <div className="text-center">
        <p className="display-3">This site is for demonstrational purposes only</p>
        <p className="h2">By clicking `&quot;`I Understand`&quot;`, I acknowledge that I cannot make real purchases and should not use my personal or financial information including my real name, address, or credit card information.</p>
        <button className="btn btn-warning">I Understand</button>
      </div>
    </div>
  );
}
