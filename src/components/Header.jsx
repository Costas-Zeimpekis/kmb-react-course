import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>{title} </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
