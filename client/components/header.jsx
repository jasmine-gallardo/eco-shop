import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="p-4 bg-dark text-white">
        <i className="fas fa-dollar-sign fa-2x d-inline-block m-2"></i>
        <h2 className="d-inline-block">Wicked Sales</h2>
      </header>
    );
  }
}
