import { Component } from "react";

class NoCars extends Component {
  render() {
    return <p>No of cars: {this.props.cars}</p>;
  }
}

export default NoCars;
