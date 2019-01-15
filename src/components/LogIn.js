import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';

class LogIn extends Component {
  render() {
    return (
      <div className="container mt-4">
        <Title text="Log In" />
        <Form handleSubmit={this.props.handleLogIn} />
      </div>
    )
  }
}

export default LogIn;
