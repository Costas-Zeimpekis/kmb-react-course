import React from "react";
import { Component } from "react";

class Fetch2 extends Component{
    state = {
        users:[],
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(d => {
            this.setState({
                users: d,
            });
        });
    }

    render() {
        return (
            <div>
              <ul>
                {this.state.users.map(({id, name, email}) => (
                    <li key={id}>{name} || {email}</li>
                ))}
              </ul>
            </div>
        );
      }
}

export default Fetch2;