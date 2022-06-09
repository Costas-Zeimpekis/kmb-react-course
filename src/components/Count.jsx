import { Component } from "react";
import AddButton from "./AddButton";
import NoCars from "./NoCars";
class Count extends Component {
  state = {
    cars: 0,
    address: {
      str: 12,
      town: "thessaloniki",
    },
  };

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name === this.props.name) {
    }

    console.log("update");
  }

  componentWillUnmount() {}

  handleAddCarsClick = () => {
    this.setState({ cars: this.state.cars + 1 });

    this.setState((prevSate) => ({
      address: {
        ...prevSate.address,
        town: "kilkis",
      },
    }));
  };

  render() {
    return (
      <div>
        <NoCars cars={this.state.cars} />
        <AddButton onAddCarClick={this.handleAddCarsClick} />
      </div>
    );
  }
}

export default Count;
