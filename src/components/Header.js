import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          <span className="ofThe">Fish-shop</span>
        </h1>
        <h3 className="tagline">
          <span>Fresh Daily</span>
        </h3>
      </header>
    );
  }
}

export default Header;
