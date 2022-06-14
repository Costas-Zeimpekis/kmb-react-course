import React, { Component } from "react";
import AddButton from "./AddButton";
import NoCars from "./NoCars";

class Count extends Component {
  state = {
    users: [],
    showParagraph: false,
    cars: 0,
    address: {
      str: 12,
      town: "thessaloniki",
    },
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  // async componentDidMount() {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
  //     (res) => res.json()
  //   );
  //   this.setState({ users: data });
  // }

  componentDidUpdate() {}

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
    // this.setState((prevState) => ({
    //   show: !prevState.show,
    // }));

    this.setState({
      showParagraph: !this.state.showParagraph,
    });
  };

  render() {
    return (
      <div>
        <NoCars cars={this.state.cars} />
        <div>
          <ul>
            {this.state.users.map(({ email, id, name }) => (
              <li key={id}>
                {name} {email}
              </li>
            ))}
            {/* 
             Alternative way
            {React.Children.toArray(
              this.state.users.map(({ name }) => <li>{name}</li>)
            )} */}
          </ul>
          {this.state.showParagraph && <p>show</p>}
          <button onClick={this.handleSwitchClick}>switch</button>
        </div>
        <AddButton onAddCarClick={this.handleAddCarsClick} />
      </div>
    );
  }
}

export default Count;
