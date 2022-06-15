import { Component } from "react";

import styles from "./car.module.css";

class Car extends Component {
  state = {
    switch: false,
  };

  handelSwitchClick = () => {
    this.setState((prevState) => ({ switch: !prevState.switch }));
  };

  handleStyle = () => (this.state.switch ? styles.success : styles.error);

  render() {
    return (
      <div>
        <h1 className={styles.bigblue}>Hello Car!</h1>
        <p style={{ color: this.state.switch ? "green" : "red" }}>Test</p>

        <p className={this.handleStyle()}>Test 2</p>

        <button onClick={this.handelSwitchClick}>Switch</button>
      </div>
    );
  }
}

export default Car;
