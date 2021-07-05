import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage, match } = this.props
    const { id } = match.params
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component { id }</p>
      </div>
    );
  }
};

export default Users;

