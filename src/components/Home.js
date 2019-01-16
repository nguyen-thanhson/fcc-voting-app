import React, { Component } from 'react';
import Title from './Title';
import PollList from './PollList';

class Home extends Component {
  render() {
    return (
      <div className="container mt-4">
        <Title text="All Polls" />
        <PollList
          username={this.props.username}
          handleError={this.props.handleError}
          path=""
          options={{}}
        />
      </div>
    )
  }
}

export default Home;
