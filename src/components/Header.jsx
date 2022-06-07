import { Component } from "react";

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>{title} </h1>
      </header>
    );
  }
}

export default Header;
