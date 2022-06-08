import { Component } from "react";

class Count extends Component {
  state = {
    bikes: 0,
    cars: 0,
    houses: 0,
    ships: 0,
  };

  handleAddCarsClick = (event) => {
    this.setState({ cars: this.state.cars + 1 });
    console.log("Event", event);
  };

  handleAddCarsClick2 = (event, name) => {
    this.setState({ bikes: this.state.bikes + 1 });
    console.log("Event", event, name);
  };

  handleAddCarsClick3(name, event) {
    this.setState({ houses: this.state.houses + 1 });
    console.log("Event", event, name);
  }

  handleAddCarsClick4 = (name) => (event) => {
    this.setState({ ships: this.state.ships + 1 });
    console.log("Event", event, name);
  };

  render() {
    return (
      <div>
        <p>No of cars: {this.state.cars}</p>
        <button onClick={this.handleAddCarsClick}>Add cars</button>

        <p>No of bikes: {this.state.bikes}</p>
        <button onClick={(event) => this.handleAddCarsClick2(event, "Costas")}>
          Add bikes
        </button>
        <p>No of houses: {this.state.houses}</p>
        <button onClick={this.handleAddCarsClick3.bind(this, "Takis")}>
          Add house
        </button>
        <p>No of ships: {this.state.ships}</p>
        <button onClick={this.handleAddCarsClick4("Costas")}>Add ship</button>
      </div>
    );
  }
}

export default Count;
