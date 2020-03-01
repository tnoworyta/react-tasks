import React, { Component } from 'react';

export default class StatusFeed extends Component {
  state = {
    activeUsers: 0,
    purchasesCompleted: 0,
  };

  componentDidMount() {
    this.int1 = setInterval(
      () => this.setState((state) => ({ activeUsers: state.activeUsers + 2 })),
      1000,
    );
    this.int2 = setInterval(
      () =>
        this.setState((state) => ({
          purchasesCompleted: state.purchasesCompleted + 10,
        })),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.int1);
    clearInterval(this.int2);
  }

  render() {
    return <div>{this.props.children(this.state)}</div>;
  }
}
