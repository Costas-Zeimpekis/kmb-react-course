import React from "react";
import { Component } from "react";
import AddButton from "./AddButton";
import NoCars from "./NoCars";
class Count extends Component {
  state = {
    users: [
      {id: 1, name: "costas"},
      {id: 2, name: "bob"},
      {id: 3, name: "john"},
      {id: 4, name: "nikitas"},
  ],

  showParagraph: false,
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

  handleSwitchClick = () => {
    // this.setState((prevState)=> ({
    //     showParagraph: !prevState.showParagraph,
    // }));

    this.setState({
        showParagraph: !this.state.showParagraph,
    })
}

  render() {
    return (
      <div>
        <NoCars cars={this.state.cars} />
        <div>
          <ul>
            {this.state.users.map(({id, name}) => (
                <li>{name}</li>
            ))}
          </ul>
            {this.state.showParagraph && <p>show</p>}
            <button onClick={this.handleSwitchClick}>Switch</button>
        </div>
        <AddButton onAddCarClick={this.handleAddCarsClick} />
      </div>
    );
  }
}

export default Count;
