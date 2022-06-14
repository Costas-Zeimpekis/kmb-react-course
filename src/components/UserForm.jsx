import { Component } from "react";

class UserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    errors: {},
  };

  validateForm = () => {
    const errors = {};
    if (!this.state.firstName) {
      errors.firstName = "First name should have a value";
    }

    if (!this.state.lastName) {
      errors.lastName = "Last name should have a value";
    }

    this.setState({ errors });
    return !Object.keys(errors).length;
  };

  resetForm = () => {
    this.setState({ firstName: "", lastName: "" });
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      console.log("Send request");
      this.resetForm();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <input
            id="firstName"
            name="firstName"
            onChange={this.handleOnChange}
            value={this.state.firstName}
          />
          <p style={{ color: "red", height: 16 }}>
            {this.state.errors.firstName}
          </p>
        </div>
        <div>
          <label htmlFor="lastName">LastName:</label>
          <input
            id="lastName"
            name="lastName"
            onChange={this.handleOnChange}
            value={this.state.lastName}
          />

          <p style={{ color: "red", height: 16 }}>
            {this.state.errors.lastName}
          </p>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default UserForm;
